"use client";

import Image from "next/image";
import Link from "next/link";

import useMediaQuery from "@hooks/useMediaQuery";

const GuestHeader = () => {
  const isTb = useMediaQuery("(min-width: 768px");
  // const isPc = useMediaQuery("(min-width: 1024px");

  return (
    <>
      <header className="sticky top-0 right-0 z-10 flex h-[70px] bg-gradient-to-t from-purple-500 to-purple-400 items-center justify-between shadow-md p-4 border-t-4 border-stone-300">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 overflow-hidden rounded-xl border-2 mix-blend-multiple border-purple-500 shadow-lg tb:w-16 tb:h-16 tb:rounded-2xl tb:border-2">
            <Link href={"/"}>
              <Image src="/images/APPAMOA.png" layout="fill" objectFit="cover" alt="로고" />
            </Link>
          </div>
          {isTb && <span className="text-white font-bold text-4xl drop-shadow-lg font-roboto">APPAMOA</span>}
        </div>

        <div className="flex gap-6">
          <Link href={"/signin"}>
            <button className="btn-common btn-hover bg-stone-700 font-poppins px-2 py-1 rounded-lg shadow-md hover:bg-purple-200 transition-colors duration-300">
              <p className="text-stone-200 font-bold hover:text-black">Join</p>
            </button>
          </Link>
          <button className="btn-common btn-hover bg-stone-700 font-poppins px-2 py-1 rounded-lg shadow-md hover:bg-purple-200 hover:text-black transition-colors duration-300">
            <i className="fa fa-bars text-3xl font-bold text-stone-200 hover:text-black" />
          </button>
        </div>
      </header>
    </>
  );
};

export default GuestHeader;
