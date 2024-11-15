"use client";

import Image from "next/image";

import useMediaQuery from "@hooks/useMediaQuery";
import { getResultStyle } from "@utils/getResultStyle";

interface ListItemParams {
  profileUrl: string;
  hospital: string;
  doctor: string;
  date: number;
  result: number;
}

const ListItem = (items: ListItemParams) => {
  const { profileUrl, hospital, doctor, date, result } = items;
  const { color, message } = getResultStyle(result);
  const isTb = useMediaQuery("(min-width: 768px)");
  const isSmall = useMediaQuery("(min-width:500px");

  return (
    <>
      <li className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-row gap-2">
        {isSmall && (
          <div className="flex items-center">
            <Image className="rounded-lg" src={profileUrl} alt="Image" width={60} height={80} />
          </div>
        )}
        <div className="grid [grid-template-areas:'hospital_doctor''date_result'] items-center justify-start gap-4 tb:gap-x-10 pc:gap-x-44  ml-4 flex-grow">
          <div className="font-roboto text-lg pc:text-xl font-semibold text-gray-800" style={{ gridArea: "doctor" }}>
            <span>HCP : </span> {doctor}
          </div>
          <div
            className="font-roboto text-2xl pc:text-3xl text-black font-bold w-[170px] tb:w-[250px] pc:w-[300px]"
            style={{ gridArea: "hospital" }}>
            {hospital}
          </div>
          <div className="font-roboto text-xl pc:text-2xl text-gray-700" style={{ gridArea: "date" }}>
            <span className="font-semibold">Examination Date:</span> {date}
          </div>
          <div className={"font-poppins font-bold text-xl pc:text-2xl"} style={{ gridArea: "result", color: color }}>
            {message}
          </div>
        </div>
        <div className="flex flex-col pc:flex-row justify-end items-center gap-3">
          {/* Edit 페이지는 의료 관계자 및 관리자만 확인! */}
          {isTb && (
            <button className="flex justify-center items-center cursor-pointer w-[60px] h-[35px] pc:w-[60px] pc:h-[80px] bg-purple-400 rounded-lg">
              <i className="fa fa-pen-to-square px-2 py-4 text-3xl pc:text-5xl text-white" />
            </button>
          )}
          <button className="flex justify-center items-center cursor-pointer w-[60px] h-[80px] tb:w-[60px] tb:h-[35px] pc:w-[60px] pc:h-[80px] bg-red-400 rounded-lg">
            <i className="fa-regular fa-file-pdf px-2 py-4 text-3xl pc:text-5xl text-black" />
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
