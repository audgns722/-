import React, { useEffect, useRef } from "react";
import Img4 from "../../assets/img/section5bg.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Section5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleMask5Ref = useRef(null);
  const section5Ref = useRef(null);
  const text1Ref = useRef(null); // 필요한 경우 text1, text2 참조
  const text2Ref = useRef(null);

  useEffect(() => {
    const maskAnimation = gsap.to(circleMask5Ref.current, {
      attr: { r: 1000 },
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
      onComplete: () => {
        gsap.to(".contents5 .desc", {
          opacity: 0.5,
          ease: "expo.in",
        });
      },
    });

    gsap.to(text1Ref.current, {
      opacity: 1,
      top: "0", // 상단으로 이동
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "25% center",
        end: "bottom bottom",
        ease: "none",
        scrub: true,
      },
    });

    gsap.to(text2Ref.current, {
      opacity: 1,
      bottom: "0", // 하단으로 이동
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "25% center",
        end: "bottom bottom",
        scrub: true,
        ease: "none",
      },
    });

    return () => {
      maskAnimation.kill();
      ScrollTrigger.getById("section5-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section5">
      <div className="contents5" ref={section5Ref}>
        <div className="cont__box">
          <div className="text1" ref={text1Ref}>
            TeamProject
          </div>
          <div className="text2" ref={text2Ref}>
            Php
          </div>
          <div className="desc">
            <p>
              유튜브 API를 이용하여 좋아하는 다큐멘터리 채널과 영상을
              모아봤습니다.
            </p>
          </div>
          <svg
            className="content__img content__img--5"
            width="100%"
            height="100%"
            viewBox="0 0 1920 579"
          >
            <defs>
              <filter id="displacementFilter5">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.1"
                  numOctaves="1"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="100"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
                <feMorphology
                  operator="dilate"
                  radius="2"
                  result="morph"
                  in="displacementFilter5"
                />
              </filter>
              <mask id="circleMask5">
                <circle
                  cx="50%"
                  cy="50%"
                  r="0"
                  fill="white"
                  ref={circleMask5Ref}
                  className="mask"
                  style={{ filter: "url(#displacementFilter5)" }}
                />
              </mask>
            </defs>
            <Link to="/home">
              <image
                xlinkHref={Img4}
                width="100%"
                height="100%"
                mask="url(#circleMask5)"
              />
            </Link>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Section5;
