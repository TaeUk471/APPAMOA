import Banner from "./Banner";

const MainContent = () => {
  return (
    <div className="flex flex-col gap-4 mt-[160px] tb:grid tb:grid-cols-2 tb:mt-[40px]">
      <div className="flex flex-col justify-center items-center tb:items-start px-4 tb:ml-[20px] pc:ml-[80px]">
        <h1 className="text-6xl tb:text-7xl font-bold text-purple-700 font-poppins px-[5%]">
          Empowering Health Management Through Data
        </h1>
        <p className="text-2xl px-[5%] tb:text-3xl font-roboto mt-6 text-gray-600">
          We make it easier for patients to access and manage their health data. By providing a comprehensive dashboard
          for analyzing health check-up results, along with an editable interface and PDF export capabilities, we
          support efficient workflows for doctors and nurses. Our platform integrates diverse datasets to enhance health
          insights and enable better healthcare management.
        </p>
        <button className="bg-purple-700 text-white font-poppins mt-8 px-8 py-4 rounded-lg  hover:bg-purple-200 ml-[5%]">
          Learn More
        </button>
      </div>
      <Banner />
    </div>
  );
};

export default MainContent;
