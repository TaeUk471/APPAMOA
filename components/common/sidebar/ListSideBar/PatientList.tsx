"use client";

import useMediaQuery from "@hooks/useMediaQuery";

const PatientList = ({ patients }: { patients: { examinationId: string; name: string }[] }) => {
  const isTb = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative flex-1 overflow-auto transition-all mt-4 tb:mt-8 tb:px-4 py-2 px-2 bg-stone-700">
      <ul className="gap-2 tb:gap-3 flex tb:flex-col">
        {patients.map((patient, index) => (
          <li
            key={index}
            className="flex flex-col tb:flex-row justify-between items-center bg-white shadow-sm shadow-white px-4 py-2 rounded-lg hover:bg-stone-100 cursor-pointer hover:scale-97 peer-checked:bg-pink-200 ">
            <div className="text-xl font-medium text-gray-800">{patient.name}</div>
            <div className="text-base font-roboto text-gray-500">
              {" "}
              {isTb && "ID: "}
              {patient.examinationId}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
