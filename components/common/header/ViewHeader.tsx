"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@components/button/Button";
// import useEditStore from "store/useEditStore"; 편집 중, 아닌지 격리

import Pagination from "../Pagination";

const EditHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between h-[70px] shadow-md p-4 border-t-4 border-purple-800 bg-red-100">
        <div className="flex gap-6">
          <Link href={"/"}>
            <Image
              src={"/images/APPAMOA.png"}
              width={50}
              height={60}
              alt="APPAMOA"
              className="border-3 border-purple-500"
            />
          </Link>
          <Button size={"s"} color={"primary"} isLoading={false}>
            편집 기능
          </Button>
        </div>
        <Pagination />
        {/* 미리보기는 제거하고, 드롭다운이 들어가는 방식으로 */}
        <Button size={"s"} color={"primary"} isLoading={false}>
          미리보기
        </Button>
      </div>
    </>
  );
};

export default EditHeader;
