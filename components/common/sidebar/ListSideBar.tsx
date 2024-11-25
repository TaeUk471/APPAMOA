"use client";

import useMediaQuery from "@hooks/useMediaQuery";
import { DummyPatientList } from "constant/DummyPatientList";

import PatientList from "./ListSideBar/PatientList";

const ListSidebar = () => {
  const isMd = useMediaQuery("(min-width : 767px)");

  return (
    <>
      <div className="bg-gradient-to-r from-stone-700 to-stone-600 h-full flex-1">
        <div className="relative flex justify-between pt-4">
          <div className="flex gap-1">
            {!isMd && <p className="text-white font-roboto text-4xl ml-4">Patient</p>}
            <p className="text-white font-roboto text-4xl ml-4">List</p>
          </div>
          <i className="fa fa-plus font-black text-white mr-4 p-1 cursor-pointer" />
        </div>
        <PatientList patients={DummyPatientList} />
      </div>
    </>
  );
};

export default ListSidebar;
