import ListboxSection from "./list/ListboxSection";
import ListSideBar from "./sidebar/ListSideBar";

const ListInfo = () => {
  return (
    <div className="min-h-screen flex flex-col tb:flex-row">
      <div className="tb:flex-[1_1_20%] pc:flex-[1_1_15%] mt-3 tb:mt-0">
        <ListSideBar />
      </div>
      <div className="tb:flex-[4_1_80%] pc:flex-[4_1_85%] mt-3 ml-1 tb:mt-1">
        <ListboxSection />
      </div>
    </div>
  );
};

export default ListInfo;
