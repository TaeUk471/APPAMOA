import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import useClickOutSide from "@hooks/useClickoutSide";
import useToggle from "@hooks/useToggle";
import { DummyPatientList } from "constant/DummyPatientList";
import usePaginationStore from "store/usePaginationStore";
import useSelectUserStore from "store/useSelectUserStore";

import DropdownItem from "./DropdownItem";

interface DropdownProps {
  items: {
    examinationId: string;
    name: string;
    examinationList: { date: number }[];
  }[];
}

const Dropdown = ({ items }: DropdownProps) => {
  const { isOpen, toggle, close } = useToggle();
  const dropDownRef = useClickOutSide(close);
  const { user, setUser } = useSelectUserStore();
  const resetPages = usePaginationStore(state => state.resetPages);
  const router = useRouter();

  const PatientData = useMemo(() => {
    return DummyPatientList.reduce(
      (acc, patient) => {
        acc[patient.examinationId] = {
          dateList: patient.examinationList.map(exam => exam.date),
        };
        return acc;
      },
      {} as Record<string, { dateList: number[] }>
    );
  }, []);

  const [currentDateIndex, setCurrentDateIndex] = useState<number>(0);

  useEffect(() => {
    if (!user) return;

    const dateList = PatientData[user.examinationId]?.dateList;
    if (!dateList || currentDateIndex < 0 || currentDateIndex >= dateList.length) return;

    const newDate = dateList[currentDateIndex]?.toString();
    if (newDate) {
      resetPages(user.examinationId, newDate);
      router.push(`/edit/${user.examinationId}${newDate}`);
    }
  }, [user, currentDateIndex, PatientData, resetPages, router]);

  const handleDateChange = (direction: "prev" | "next") => {
    const dateList = PatientData[user.examinationId]?.dateList || [];
    if (direction === "prev" && currentDateIndex > 0) {
      setCurrentDateIndex(prev => prev - 1);
    }
    if (direction === "next" && currentDateIndex < dateList.length - 1) {
      setCurrentDateIndex(prev => prev + 1);
    }
  };

  return (
    <div ref={dropDownRef} className="relative">
      <div className="flex items-center gap-4">
        <button
          className="btn-common btn-hover disabled:opacity-50"
          onClick={() => handleDateChange("prev")}
          disabled={currentDateIndex === 0}>
          &laquo;
        </button>
        <button onClick={toggle} className="btn-dropdown cursor-pointer p-2 font-roboto">
          {`${user?.name || "Select User"} (ID: ${user?.examinationId || ""})`}
        </button>
        <button
          className="btn-common btn-hover disabled:opacity-50"
          onClick={() => handleDateChange("next")}
          disabled={!user || currentDateIndex === (PatientData[user.examinationId]?.dateList.length || 1) - 1}>
          &raquo;
        </button>
      </div>

      {isOpen && (
        <ul
          className={`absolute bg-white border border-gray-200 rounded-md shadow-lg w-[220px] z-20 p-2 mt-4 left-[50px] ${
            items.length > 5 ? "max-h-72 overflow-y-auto" : ""
          }`}>
          {items.map(item => (
            <DropdownItem
              key={item.examinationId}
              name={item.name}
              examinationId={item.examinationId}
              onClick={() => {
                setUser(item);
                const dateList = PatientData[item.examinationId]?.dateList;
                if (dateList) {
                  setCurrentDateIndex(dateList.length - 1);
                  resetPages(item.examinationId, dateList[0].toString());
                }
                close();
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
