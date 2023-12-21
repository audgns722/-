import React from "react";

const Section1 = () => {
  return (
    <section id="section1">
      <div className="sec1__cont">
        <h1>Hellow My PortFolio</h1>
        <p>Developer <em>MyeongHun</em></p>
      </div>
      <div className="scroll__down">
        <div className="line"></div>
        <span>스크롤을 내리면<br />
          포트폴리오를 볼 수 있습니다.</span>
      </div>
    </section>
  );
};

export default Section1;
