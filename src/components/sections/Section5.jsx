import React, { useEffect, useRef } from "react";
import Img4 from "../../assets/img/4.jpg";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Section5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleMask5Ref = useRef(null);
  const section5Ref = useRef(null);

  const text1Ref = useRef(null); // 필요한 경우 text1, text2 참조
  const text2Ref = useRef(null);

  useEffect(() => {
    const maskAnimation = gsap.to(circleMask5Ref.current, {
      attr: { r: 950 },
      scrollTrigger: {
        trigger: section5Ref.current,
        start: "top 25%",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });
    // text1, text2 애니메이션
    gsap.fromTo(
      text1Ref.current,
      { opacity: 0, yPercent: -50 },
      {
        opacity: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: section5Ref.current,
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
          trigger: section5Ref.current,
          start: "top 25%",
          end: "bottom bottom",
          scrub: 1,
          ease: "none",
        },
      }
    );

    return () => {
      maskAnimation.kill();
      ScrollTrigger.getById("section5-trigger")?.kill();
    };
  }, []);

  return (
    <section id="section5" ref={section5Ref}>
      <div className="contents5">
        <div className="cont__box">
          <svg
            class="content__img content__img--5"
            width="1000"
            height="450"
            viewBox="0 0 1000 450"
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
                  class="mask"
                  style={{ filter: "url(#displacementFilter5)" }}
                />
              </mask>
            </defs>
            <image
              xlinkHref={Img4}
              width="1000"
              height="450"
              mask="url(#circleMask5)"
            />
          </svg>
          <div className="text">
            <div className="text1" ref={text1Ref}>
              YOUR TEXT1
            </div>
            <div className="text2" ref={text2Ref}>
              YOUR TEXT2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
