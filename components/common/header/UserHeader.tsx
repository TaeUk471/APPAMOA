"use client";

import Image from "next/image";
import Link from "next/link";

import useMediaQuery from "@hooks/useMediaQuery";
import useToggle from "@hooks/useToggle";

const UserHeader = () => {
  const isTb = useMediaQuery("(min-width: 768px)");
  const { isOpen, toggle } = useToggle(false);

  return (
    <>
      <header className="sticky top-0 right-0 z-20 flex h-[70px] bg-gradient-to-t from-purple-500 to-purple-400 items-center justify-between shadow-md p-4 border-t-4 border-stone-300">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 overflow-hidden rounded-xl border-2 mix-blend-multiple border-purple-500 shadow-lg tb:w-16 tb:h-16 tb:rounded-2xl tb:border-2">
            <Link href={"/"}>
              <Image src="/images/APPAMOA.png" layout="fill" objectFit="cover" alt="로고" />
            </Link>
          </div>
          {isTb && <span className="text-white font-bold text-4xl drop-shadow-lg font-roboto">APPAMOA</span>}
        </div>

        <div className="relative">
          <button
            className={`btn-common btn-hover bg-stone-700 font-poppins px-2 py-1 rounded-lg shadow-md hover:bg-purple-200 hover:text-black transition-colors duration-300 transform ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={toggle}>
            <i className="fa fa-bars text-3xl font-bold text-stone-200 hover:text-black" />
          </button>
          <div
            className={`absolute right-24 bottom-0 mt-2 w-[350px] bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0 pointer-events-none"
            }`}>
            <ul className="flex gap-2 p-4">
              <li>
                <Link href="/">
                  <p className="block px-4 py-2 rounded-lg hover:bg-purple-200 text-gray-800 font-bold font-poppins">
                    Main Page
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/list">
                  <p className="block px-4 py-2 rounded-lg hover:bg-purple-200 text-gray-800 font-bold font-poppins">
                    List Page
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <p className="block px-4 py-2 rounded-lg hover:bg-purple-200 text-gray-800 font-bold font-poppins">
                    Dashboard
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
