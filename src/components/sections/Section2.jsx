import React, { useEffect, useRef } from "react";
import Img1 from "../../assets/img/testimg.png";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleMaskRef = useRef(null);
  const section2Ref = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const maskAnimation = gsap.to(circleMaskRef.current, {
      attr: { r: 820 },
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 25%",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    // text1, text2에 ScrollTrigger 애니메이션 적용
    gsap.fromTo(
      text1Ref.current,
      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 25%",
          end: "bottom bottom",
          ease: "none",
          scrub: 1,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      text2Ref.current,
      {
        opacity: 0,
        xPercent: 0,
        yPercent: -50,
      },
      {
        opacity: 1,
        xPercent: 100,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 25%",
          end: "bottom bottom",
          scrub: 1,
          ease: "none",
          markers: true,
        },
      }
    );

    return () => {
      maskAnimation.kill();
      // 특정 컴포넌트의 ScrollTrigger 인스턴스만 제거
      ScrollTrigger.getById("section2-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section2" ref={section2Ref}>
      <div className="contents2">
        <div className="cont__box">
          <svg
            class="content__img content__img--1"
            width="500"
            height="500"
            viewBox="0 0 500 500"
          >
            <defs>
              <filter id="displacementFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.03"
                  numOctaves="3"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="50"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <mask id="circleMask">
                <circle
                  cx="50%"
                  cy="50%"
                  r="0"
                  fill="white"
                  ref={circleMaskRef}
                  class="mask"
                  style={{ filter: "url(#displacementFilter)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img1}
              width="500"
              height="500"
              mask="url(#circleMask)"
            />
          </svg>
          <div className="text">
            <div className="text1" ref={text1Ref}>
              REACT
            </div>
            <div className="text2" ref={text2Ref}>
              BLOG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
