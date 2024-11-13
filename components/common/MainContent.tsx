import Image from "next/image";
import { useCallback, useRef } from "react";

import Banner from "./Banner";

const features = [
  {
    image: "/images/Article_1.avif",
    title: "Dashboard Overview",
    description: "Access a detailed dashboard displaying comprehensive health data and insights at a glance.",
  },
  {
    image: "/images/Article_2.avif",
    title: "Editable Features",
    description: "Customize layouts effortlessly using drag-and-drop and resizing functionalities.",
  },
  {
    image: "/images/Article_3.webp",
    title: "PDF Export",
    description: "Export your customized data and reports to PDF format with just a click.",
  },
];

const useScrollToArticle = (ref: React.RefObject<HTMLElement>) => {
  return useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [ref]);
};

const MainContent = () => {
  const ArticleRef = useRef<HTMLDivElement>(null);
  const handleScrollToArticle = useScrollToArticle(ArticleRef);

  return (
    <>
      <div className="flex flex-col gap-4 mt-[160px] tb:grid tb:grid-cols-2 tb:mt-[40px]">
        {/* 텍스트 영역 */}
        <div className="flex flex-col justify-center items-center tb:items-start px-4 tb:ml-[20px] pc:ml-[80px]">
          <h1 className="text-6xl tb:text-7xl font-bold text-purple-700 font-poppins">
            Empowering Health Management Through Data
          </h1>
          <p className="text-2xl tb:text-3xl font-roboto mt-6 text-gray-600">
            We make it easier for patients to access and manage their health data. By providing a comprehensive
            dashboard for analyzing health check-up results, along with an editable interface and PDF export
            capabilities, we support efficient workflows for doctors and nurses. Our platform integrates diverse
            datasets to enhance health insights and enable better healthcare management.
          </p>
          <button
            className="bg-purple-700 text-white font-poppins mt-8 px-8 py-4 rounded-lg hover:bg-purple-200"
            onClick={handleScrollToArticle}>
            Learn More
          </button>
        </div>
        {/* 배너 영역 */}
        <Banner />
      </div>

      {/* 주요 기능 */}
      <div className="flex flex-col gap-4 mt-[160px] tb:grid tb:grid-cols-3 tb:mt-[130px] px-4 mb-24" ref={ArticleRef}>
        {features.map((feature, index) => (
          <div key={index} className="relative flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="relative w-full h-[300px]">
              <Image src={feature.image} alt={`${feature.title} Image`} fill className="rounded-md object-cover" />
            </div>
            <div className="text-5xl font-bold font-poppins">{feature.title}</div>
            <div className="text-gray-600 text-center text-2xl font-roboto">{feature.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainContent;
