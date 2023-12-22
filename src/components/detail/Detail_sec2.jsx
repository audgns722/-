import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Detail_sec2 = () => {
    const navigate = useNavigate(); // useNavigate 사용

    // 사용자가 X를 클릭하면 이전 페이지로 돌아가는 핸들러
    const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1); // 이전 페이지로 이동
    };

    useEffect(() => {
        // 부드럽게 등장하는 애니메이션
        gsap.to(".detail__section2", {
            background: "linear-gradient(0deg, transparent, hsl(15deg 55% 6%))",
            opacity: 1, // 시작 투명도
            duration: 2, // 애니메이션 지속 시간 (초)
            ease: "power1.out" // 애니메이션 효과 (옵션)
        });
    }, []);

    return (
        <div>
            <div className="detail__section2">
                <a href="/" onClick={handleBackClick}>X</a> {/* onClick 핸들러 추가 */}
            </div>
        </div>
    );
};

export default Detail_sec2;
