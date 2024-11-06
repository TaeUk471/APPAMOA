import { useEffect } from "react";

import useClickOutSide from "@hooks/useClickOutSide";
import useToggle from "@hooks/useToggle";
import usePaginationStore from "store/usePaginationStore";
import useSelectUserStore from "store/useSelectUserStore";

import DropdownItem from "./DropdownItem";

interface DropdownProps {
  items: { examinationId: string; name: string }[];
}

const Dropdown = ({ items }: DropdownProps) => {
  const { isOpen, toggle, close } = useToggle();
  const dropDownRef = useClickOutSide(close);
  const { user, setUser } = useSelectUserStore();
  const resetPages = usePaginationStore(state => state.resetPages);

  useEffect(() => {
    if (user) {
      resetPages(user.name, user.examinationId);
    }
  }, [user, resetPages]);

  return (
    <div ref={dropDownRef} className="relative">
      <button onClick={toggle} className="btn-dropdown cursor-pointer p-2">
        {`${user.name} (ID: ${user.examinationId})`}
      </button>

      {isOpen && (
        <ul
          className={`absolute bg-white border border-gray-200 rounded-md shadow-lg w-[188px] z-20 p-2 mt-4 ${
            items.length > 5 ? "max-h-72 overflow-y-auto" : ""
          }`}>
          {items.map(item => (
            <DropdownItem
              key={item.examinationId}
              name={item.name}
              examinationId={item.examinationId}
              onClick={() => {
                setUser(item);
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
