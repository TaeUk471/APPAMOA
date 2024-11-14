import ListboxSection from "./list/ListboxSection";
import ListSideBar from "./sidebar/ListSideBar";

const ListInfo = () => {
  return (
    <div className="min-h-screen flex flex-col tb:flex-row">
      <div className="tb:flex-[1_1_20%]">
        <ListSideBar />
      </div>
      <div className="tb:flex-[4_1_80%]">
        <ListboxSection />
      </div>
    </div>
  );
};

export default ListInfo;
