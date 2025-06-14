
import { BsViewList } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsGridFill } from "react-icons/bs";
import Image from "next/image";
import Shoppic from "../../../public/assets/Group 78.png";
import React from "react";

import pic17 from "../../../public/assets/Group 72.png"
import ProductCards from "../sanityData/page";


export default function Shop () {
    return (
        <div className="max-w-full mx-auto px-4">
            <div className="w-full h-auto">
              <Image src={Shoppic} alt=""/>
              </div>
              <div className="py-6 bg-[#FAF4F4] flex flex-wrap items-center justify-between gap-4 md:py-10">
        <div className="flex items-center gap-4 sm:gap-6 ml-0 sm:ml-4">
          <GiSettingsKnobs className="text-xl sm:text-2xl" />
          <p className="text-sm sm:text-[20px] leading-[30px] pr-4">Filter</p>
          <BsGridFill className="text-xl sm:text-2xl" />
          <BsViewList className="text-xl sm:text-2xl" />
          <div className="hidden sm:block w-[3px] h-10 bg-[#9F9F9F]"></div>
          <p className="text-xs sm:text-base leading-[24ps]">
            Showing 1-16 of 32 results
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mr-0 sm:mr-4">
          <p className="text-xs sm:text-base leading-[24ps]">Show</p>
          <p className="text-center flex justify-center items-center w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] text-xs sm:text-base leading-[30ps] bg-[#ffffff] text-[#9f9f9f]">
            16
          </p>
          <p className="text-xs sm:text-base leading-[30ps]">Short By</p>
          <p className="flex items-center justify-center text-xs sm:text-base w-[120px] sm:w-[188px] h-[45px] sm:h-[55px] leading-[30ps] bg-[#ffffff] text-[#9f9f9f]">
            Default
          </p>
        </div>
      </div>

      
                <ProductCards/>

      {/* Pagination */}
      <div className="flex justify-center my-10">
        <Image src={pic17} alt="" />
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap gap-6 my-20 py-20 justify-around bg-[#FAF4F4]">
                {[
                    {
                        title: "Free Delivery",
                        description: "For all orders over $50, consectetur adipiscing elit."
                    },
                    {
                        title: "90 Days Return",
                        description: "If goods have problems, consectetur adipiscing elit."
                    },
                    {
                        title: "Secure Payment",
                        description: "100% secure payment, consectetur adipiscing elit."
                    }
                ].map((feature, index) => (
                    <div key={index} className="w-full max-w-[376px]">
                        <p className="text-[24px] sm:text-[32px] leading-[36px] sm:leading-[48px]">{feature.title}</p>
                        <p className="text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px]">{feature.description}</p>
                    </div>
                ))}
                </div>
    </div>
  );
}
