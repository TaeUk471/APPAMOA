import ListItem from "./ListItem";

// 상수 데이터 정의
const ListItems = [
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Seoul General Hospital",
    doctor: "Dr. Kim",
    date: 20241115,
    result: 60,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Busan Medical Center",
    doctor: "Dr. Lee",
    date: 20241114,
    result: 23,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Incheon City Hospital",
    doctor: "Dr. Park",
    date: 20241113,
    result: 78,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Seoul General Hospital",
    doctor: "Dr. Kim",
    date: 20241115,
    result: 85,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Busan Medical Center",
    doctor: "Dr. Lee",
    date: 20241114,
    result: 14,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Incheon City Hospital",
    doctor: "Dr. Park",
    date: 20241113,
    result: 68,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Seoul General Hospital",
    doctor: "Dr. Kim",
    date: 20241115,
    result: 82,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Busan Medical Center",
    doctor: "Dr. Lee",
    date: 20241114,
    result: 92,
  },
  {
    profileUrl: "/images/고먐미.jpeg",
    hospital: "Incheon City Hospital",
    doctor: "Dr. Park",
    date: 20241113,
    result: 78,
  },
];

const ListBoxContainer = () => {
  return (
    <div
      className="bg-stone-400 m-1 rounded-lg p-4 overflow-y-auto scrollbar-thin scrollbar-hide h-[100vh]"
      // style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      {ListItems.map((item, index) => (
        <ListItem
          key={index}
          profileUrl={item.profileUrl}
          hospital={item.hospital}
          doctor={item.doctor}
          date={item.date}
          result={item.result}
        />
      ))}
    </div>
  );
};

export default ListBoxContainer;
