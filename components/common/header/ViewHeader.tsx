"use client";

import Image from "next/image";
import Link from "next/link";

// import useEditStore from "store/useEditStore"; 편집 중, 아닌지 격리

import Dropdown from "@components/dropdown/Dropdown";
import PatientList from "constant/DummyPatientList";

import Pagination from "../Pagination";

const EditHeader = () => {
  return (
    <>
      <div className="relative flex items-center justify-between h-[70px] shadow-md p-4 border-t-4 border-purple-800 bg-sky-100">
        <Link href={"/"} className="cursor-pointer z-10">
          <Image
            src={"/images/APPAMOA.png"}
            width={50}
            height={60}
            alt="APPAMOA"
            className="border-3 border-purple-500"
          />
        </Link>
        <div className="absolute inset-0 flex justify-center items-center">
          <Pagination />
        </div>
        <Dropdown items={PatientList} />
      </div>
    </>
  );
};

export default EditHeader;
