"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainInfo = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-center w-full h-[500px] relative bg-gray-200 mt-2">
      <Image
        src={"/images/Report_Data_Main_Image.avif"}
        width={500}
        height={300}
        alt={"메인페이지"}
        className={`object-cover w-full h-full blur-sm transition-filter duration-750 ${
          isTextVisible ? "blur-sm" : "blur-none"
        }`}
      />
      <div
        className={`flex flex-col absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white gap-8 transition-opacity duration-1000 ${
          isTextVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}>
        <p
          className="font-poppins text-purple-700 text-[50px] font-semibold"
          style={{ textShadow: "0 0 3px white, 0 0 10px white" }}>
          세상
        </p>
        <p className="font-poppins text-[60px] font-bold mb-5">APPA</p>
        <Link href={"/edit"} className="flex-center">
          <button />
        </Link>
        <div className="flex-center text-purple-700 font-poppins font-bold text-[50px] flex-col gap-8 mt-24 mb-16">
          <p>당신</p>
          <p>걷고?</p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
