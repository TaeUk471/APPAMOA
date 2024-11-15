import useMediaQuery from "@hooks/useMediaQuery";
import useSelectUserStore from "store/useSelectUserStore";

interface PatientItemProps {
  name: string;
  examinationId: string;
  onClick: () => void;
}

const PatientItem = ({ name, examinationId, onClick }: PatientItemProps) => {
  const isTb = useMediaQuery("(min-width: 768px)");
  const user = useSelectUserStore(state => state.user);

  const isSelected = user?.name === name;

  return (
    <li
      onClick={onClick}
      className={`flex flex-col tb:flex-row justify-between items-center shadow-sm shadow-white px-4 py-2 rounded-lg 
        hover:bg-stone-200 cursor-pointer hover:scale-97
        ${isSelected ? "bg-gradient-to-tl from-purple-200 to-purple-300 scale-97" : "bg-white"}`}>
      <div className="text-xl font-medium text-gray-800">{name}</div>
      <div className="text-base font-roboto text-gray-500">
        {isTb && "ID: "}
        {examinationId}
      </div>
    </li>
  );
};

export default PatientItem;
