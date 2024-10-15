// components/HospitalCard.tsx
import Image from "next/image";
import React from "react";

type HospitalCardProps = {
  imageSrc: string;
  name: string;
};

const HospitalCard = ({ imageSrc, name }: HospitalCardProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <Image src={imageSrc} width={185} height={185} alt={name} className="rounded-[50px]" />
      <p className="text-white mt-2">{name}</p>
    </div>
  );
};

export default HospitalCard;
