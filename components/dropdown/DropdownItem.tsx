interface DropdownItemProps {
  name: string;
  onClick: () => void;
  examinationId: string;
}

const DropdownItem = ({ name, onClick, examinationId }: DropdownItemProps) => (
  <li
    onClick={onClick}
    className="py-4 px-4 cursor-pointer border-t-2 border-purple-300 hover:bg-purple-100 flex justify-between">
    <span>{name}</span>
    <span className="text-lg text-gray-500">{examinationId}</span>
  </li>
);

export default DropdownItem;
