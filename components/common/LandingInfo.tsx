import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LandingInfo = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-center w-full h-[700px] relative bg-gray-200 mt-2 mx-auto">
      <Image
        src={"/images/Report_Data_Main_Image.avif"}
        width={500}
        height={300}
        alt={"메인페이지"}
        className={`object-cover w-full h-full blur-sm transition-filter duration-1000 ${
          isTextVisible ? "blur-lg scale-125" : "blur-none"
        }`}
      />
      <div
        className={`flex flex-col absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 text-center text-white gap-8 transition-opacity duration-1000 ${
          isTextVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}>
        <p
          className="font-poppins text-purple-700 text-[50px] font-semibold"
          style={{ textShadow: "0 0 3px white, 0 0 10px white" }}>
          APPAMOA
        </p>
        <p className="font-poppins text-[20px] font-bold mb-5">be aware of your health</p>
        <Link href={"/edit"} className="flex-center">
          <button />
        </Link>
        <div className="flex text-purple-800 font-poppins font-bold text-[30px] flex-col gap-6 mt-52 mb-16">
          <p>What</p>
          <p>you could do</p>
          <i
            className="fa fa-arrow-down text-[30px]"
            style={{ textShadow: "0 0 3px white, 0 0 10px white, 0 0 14px white, 0 0 18px white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingInfo;
