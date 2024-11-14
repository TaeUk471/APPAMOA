"use client";

import Image from "next/image";
import Link from "next/link";

// import useEditStore from "store/useEditStore"; 편집 중, 아닌지 격리

import Dropdown from "@components/dropdown/Dropdown";
import DummyPatientList from "constant/DummyPatientList";

import Pagination from "../Pagination";

const EditHeader = () => {
  return (
    <>
      <header className="sticky top-0 right-0 z-30 flex items-center justify-between h-[70px] shadow-md p-4 border-t-4 border-purple-800 bg-purple-100">
        <div className="relative z-50 w-20 h-20 overflow-hidden rounded-xl border-2 mix-blend-multiple border-purple-500 shadow-lg tb:w-16 tb:h-16 tb:rounded-2xl tb:border-2">
          <Link href={"/"}>
            <Image src="/images/APPAMOA.png" layout="fill" objectFit="cover" alt="로고" />
          </Link>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Pagination />
        </div>
        <Dropdown items={DummyPatientList} />
      </header>
    </>
  );
};

export default EditHeader;
