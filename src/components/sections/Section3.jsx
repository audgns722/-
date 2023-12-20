import React, { useEffect, useRef } from "react";
import Img2 from "../../assets/img/2.jpg";

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
        start: "top 25%",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });

    gsap.fromTo(
      text1Ref.current,
      { opacity: 0, yPercent: -50 },
      {
        opacity: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 25%",
          end: "bottom bottom",
          ease: "none",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      text2Ref.current,
      { opacity: 0, xPercent: -100 },
      {
        opacity: 1,
        xPercent: 0,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 25%",
          end: "bottom bottom",
          scrub: 1,
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
    <section id="section3" ref={section3Ref}>
      <div className="contents3">
        <div className="cont__box">
          <svg
            class="content__img content__img--2"
            width="1000"
            height="450"
            viewBox="0 0 1000 450"
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
              width="1000"
              height="450"
              mask="url(#circleMask2)"
            />
          </svg>
          <div className="text">
            <div className="text1" ref={text1Ref}>
              NEW TEXT1
            </div>
            <div className="text2" ref={text2Ref}>
              NEW TEXT2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
