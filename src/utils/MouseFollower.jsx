import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const style = {
        position: 'absolute',
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)', // 마우스 중앙에 위치
        pointerEvents: 'none' // 마우스 이벤트 방지
    };

    return (
        <span className="scroll-btn" style={style}>
            <Link to="/">
                <span className="mouse">
                    <span></span>
                </span>
            </Link>
            <p>Click to git</p>
        </span>
    );
};

export default MouseFollower;
