// components/HospitalGrid.tsx
import React from "react";

import HospitalCard from "./HospitalCard";

const hospitalData = [
  { imageSrc: "/images/연대 세브란스 병원.jpeg", name: "세브란스 병원" },
  { imageSrc: "/images/아산병원.jpeg", name: "아산 병원" },
  { imageSrc: "/images/삼성 서울 병원.png", name: "삼성 병원" },
  { imageSrc: "/images/서울대 병원.jpeg", name: "서울 대 병원" },
  { imageSrc: "/images/연대 세브란스 병원.jpeg", name: "세브란스 병원" },
  { imageSrc: "/images/아산병원.jpeg", name: "아산 병원" },
  { imageSrc: "/images/삼성 서울 병원.png", name: "삼성 병원" },
  { imageSrc: "/images/서울대 병원.jpeg", name: "서울 대 병원" },
  { imageSrc: "/images/연대 세브란스 병원.jpeg", name: "세브란스 병원" },
  { imageSrc: "/images/아산병원.jpeg", name: "아산 병원" },
  { imageSrc: "/images/삼성 서울 병원.png", name: "삼성 병원" },
  { imageSrc: "/images/서울대 병원.jpeg", name: "서울 대 병원" },
];

const HospitalGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {hospitalData.map((hospital, index) => (
        <HospitalCard key={index} imageSrc={hospital.imageSrc} name={hospital.name} />
      ))}
    </div>
  );
};

export default HospitalGrid;
