import DummyPatientList from "constant/DummyPatientList";

import PatientList from "./ListSideBar/PatientList";

const ListSidebar = () => {
  return (
    <>
      <div className="bg-stone-700 h-full flex-1">
        <div className="relative flex justify-between pt-4">
          <p className="text-white font-roboto text-4xl ml-4">List</p>
          <i className="fa fa-plus font-black text-white mr-4 p-1 cursor-pointer" />
        </div>
        <PatientList patients={DummyPatientList} />
      </div>
    </>
  );
};

export default ListSidebar;
