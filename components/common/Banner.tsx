import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

import { bannerImageList } from "constant/BannerData";

const Banner = () => {
  const bannerContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [bannerWidth, setBannerWidth] = useState(0);
  const bannerList = bannerImageList;

  const clearExistingInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const updateBannerWidth = useCallback(() => {
    if (bannerContainerRef.current) {
      setBannerWidth(bannerContainerRef.current.clientWidth);
    }
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (isScrolling) return;

      const banner = bannerContainerRef.current;
      if (banner) {
        setIsScrolling(true);
        const scrollAmount = direction === "left" ? -bannerWidth : bannerWidth;
        banner.scrollBy({ left: scrollAmount, behavior: "smooth" });

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    },
    [isScrolling, bannerWidth]
  );

  const startAutoScroll = useCallback(() => {
    clearExistingInterval();
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % bannerImageList.length);
    }, 7000);
  }, [clearExistingInterval]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const banner = bannerContainerRef.current;

      startAutoScroll();
      updateBannerWidth();

      if (banner) {
        banner.addEventListener("mouseenter", clearExistingInterval);
        banner.addEventListener("mouseleave", startAutoScroll);
      }

      window.addEventListener("resize", updateBannerWidth);

      return () => {
        clearExistingInterval();
        if (banner) {
          banner.removeEventListener("mouseenter", clearExistingInterval);
          banner.removeEventListener("mouseleave", startAutoScroll);
        }
        window.removeEventListener("resize", updateBannerWidth);
      };
    }
  }, [startAutoScroll, clearExistingInterval, updateBannerWidth]);

  useEffect(() => {
    const banner = bannerContainerRef.current;
    if (banner) {
      banner.scrollTo({
        left: currentIndex * bannerWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, bannerWidth]);

  return (
    <div className="flex justify-center tb:justify-end tb:mr-[20px] pc:mr-[80px] mt-[40px] tb:mt-[160px]">
      <div className="relative w-full h-[400px] tb:w-[500px] tb:h-[500px] pc:w-[1024px] pc:h-[500px]">
        <div
          ref={bannerContainerRef}
          className="flex h-full min-h-[240px] overflow-hidden rounded-lg tb:rounded-full"
          style={{ width: `${100 * bannerList.length}` }}>
          {bannerList.map((image, idx) => (
            <div key={idx} className="relative w-full flex-none">
              <Image className="absolute object-cover" fill src={image.imageUrl} alt="Banner_image" priority />
              <div className="absolute h-full w-full bg-black opacity-40" />
              <div className="absolute h-full w-full p-4 text-white top-[5%] left-[5%] tb:left-[50%] tb:translate-x-[-25%]">
                <div className="flex flex-col gap-6">
                  <div
                    className="text-[50px] tb:text-[30px] pc:text-[50px] font-bold font-roboto"
                    style={{ textShadow: "0 0 3px black, 0 0 4px white" }}>
                    {image.title}
                  </div>
                  <div className="text-[20px] tb:text-[13px] pc:text-[20px] font-roboto ml-3">{image.description}</div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white bg-opacity-50 p-4 border-2 border-purple-200 rounded-lg text-purple-600 font-bold hover:bg-black"
            onClick={() => scroll("left")}>
            <i className="fa fa-arrow-left" />
          </div>
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white bg-opacity-50 p-4 border-2 border-purple-200 rounded-lg text-purple-600 font-bold hover:bg-black"
            onClick={() => scroll("right")}>
            <i className="fa fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
