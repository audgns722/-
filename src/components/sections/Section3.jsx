import React, { useEffect, useRef } from "react";
import Img2 from "../../assets/img/section3bg.png";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const circleMaskRef = useRef(null);
  const section3Ref = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const maskAnimation = gsap.to(circleMaskRef.current, {
      attr: { r: 950 },
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
      onComplete: () => {
        gsap.from(".contents3 .desc", {
          delay: 3,
          opacity: 0,
          ease: "expo.in",
          y: 10
        });
      }
    });

    gsap.to(
      text1Ref.current,
      {
        opacity: 1,
        left: "0", // 왼쪽 끝으로 이동
        top: "0", // 상단으로 이동
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "25% center",
          end: "bottom bottom",
          ease: "none",
          scrub: true,
        },
      }
    );

    gsap.to(
      text2Ref.current,
      {
        opacity: 1,
        right: "0", // 오른쪽 끝으로 이동
        bottom: "0", // 하단으로 이동
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "25% center",
          end: "bottom bottom",
          scrub: true,
          ease: "none",
        },
      }
    );

    return () => {
      maskAnimation.kill();
      ScrollTrigger.getById("section3-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section3">
      <div className="contents3" ref={section3Ref}>
        <div className="cont__box">
          <div className="text1" ref={text1Ref}>
            react
          </div>
          <div className="text2" ref={text2Ref}>
            blog site
          </div>
          <div className="desc">
            <p>유튜브 API를 이용하여 좋아하는 다큐멘터리 채널과 영상을 모아봤습니다.</p>
          </div>
          <svg
            class="content__img content__img--2"
            width="100%"
            height="100%"
            viewBox="0 0 913 516"
          >
            <defs>
              <filter id="displacementFilter2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.1"
                  numOctaves="1"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  result="displacement"
                  scale="100"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
                <feMorphology
                  operator="dilate"
                  radius="2"
                  result="morph"
                  in="displacement"
                />
              </filter>
              <mask id="circleMask2">
                <circle
                  cx="50%"
                  cy="50%"
                  r="0"
                  fill="white"
                  ref={circleMaskRef}
                  class="mask"
                  style={{ filter: "url(#displacementFilter2)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img2}
              width="100%"
              height="100%"
              mask="url(#circleMask2)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Section3;
