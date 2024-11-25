"use client";

import { useEffect } from "react";

import { DummyPatientList } from "constant/DummyPatientList";
import useSelectUserStore from "store/useSelectUserStore";

import ListItem from "./ListItem";

const ListBoxContainer = () => {
  const selectPatient = useSelectUserStore(state => state.user);
  const ListItems =
    DummyPatientList.find(patient => patient.examinationId === selectPatient.examinationId)?.examinationList || [];

  useEffect(() => {
    console.log(selectPatient);
  }, [selectPatient]);

  return (
    <div
      className="bg-stone-400 m-1 rounded-lg p-4 overflow-y-auto scrollbar-thin scrollbar-hide h-[100vh]"
      // style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      {selectPatient.name !== "" ? (
        ListItems.map((item, index) => (
          <ListItem
            key={index}
            profileUrl={item.profileUrl}
            hospital={item.hospital}
            doctor={item.doctor}
            date={item.date}
            result={item.result}
            examinationId={item.examinationId}
          />
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center gap-10">
          <i className="fa fa-users-slash text-7xl text-stone-200" />
          <p className="font-poppins text-7xl font-bold text-stone-200">Select User</p>
        </div>
      )}
    </div>
  );
};

export default ListBoxContainer;
