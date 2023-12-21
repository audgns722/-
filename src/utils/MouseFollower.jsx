import React, { useState, useEffect } from "react";

const MouseFollower = ({ isHovering }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      // 스크롤 시 마우스 위치 업데이트
      setMousePosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + window.scrollY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.cursor = "default";
    };
  }, [isHovering]);

  const style = {
    position: "absolute",
    left: mousePosition.x,
    top: mousePosition.y,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    opacity: isHovering ? 1 : 0, // Hover 상태에 따라 opacity 조절
    transition: "opacity 0.5s ease", // 부드러운 효과를 위한 transition
  };

  return (
    <span className="scroll-btn" style={style}>
      <span className="mouse">
        <span></span>
      </span>
      <p>View on Github</p>
    </span>
  );
};

export default React.memo(MouseFollower);
