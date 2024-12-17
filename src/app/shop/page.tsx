
import { BsViewList } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsGridFill } from "react-icons/bs";
import Image from "next/image";
import Shoppic from "../../../public/assets/Group 78.png";
import React from "react";
import pic01 from "../../../public/assets/Mask group.png";
import pic02 from "../../../public/assets/Mask group (1).png";
import pic03 from "../../../public/assets/Mask group (2).png";
import pic04 from "../../../public/assets/Mask group (3).png";
import pic05 from "../../../public/assets/Mask group (4).png";
import pic06 from "../../../public/assets/Mask.png";
import pic07 from "../../../public/assets/Mask group (5).png";
import pic08 from "../../../public/assets/Mask group (6).png";
import pic09 from "../../../public/assets/Mask group (7).png";
import pic10 from "../../../public/assets/Mask group (8).png";
import pic11 from "../../../public/assets/Mask group (9).png";
import pic12 from "../../../public/assets/Mask group (10).png";
import pic13 from "../../../public/assets/Mask group (11).png";
import pic14 from "../../../public/assets/Mask group (12).png";
import pic15 from "../../../public/assets/Mask group (13).png";
import pic16 from "../../../public/assets/Mask group (14).png";
import pic17 from "../../../public/assets/Group 72.png"


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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 sm:mt-10 mx-2 sm:mx-4">
                    <div className="space-y-4"><Image src={pic01} alt="" />
                    <p className="text-base leading-[24px]">Trenton modular sofa_3</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic02} alt="" />
                    <p>Granite dining table with dining chair</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic03} alt="" />
                    <p>Outdoor bar table and stool</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic04} alt="" />
                    <p>Plain console with teak mirror</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic05} alt="" />
                    <p>Grain coffee table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 15,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic06} alt="" />
                    <p>Grain coffee table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 225,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic07} alt=""/>
                    <p>Round coffee table_color 2</p>
                    <p className="text-[24px] leading-[36px]">Rs. 251,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic08} alt=""/>
                    <p>Reclaimed teak coffee table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,200.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic09} alt="" />
                    <p>Plain console_</p>
                    <p className="text-[24px] leading-[36px]">Rs. 258,200.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic10} alt="" />
                    <p>Reclaimed teak Sideboard</p>
                    <p className="text-[24px] leading-[36px]">Rs. 20,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic11} alt=""  />
                    <p>SJP_0825 </p>
                    <p className="text-[24px] leading-[36px]">Rs. 200,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic12} alt=""/>
                    <p>Bella chair and table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 100,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic13} alt="" />
                    <p>Granite square side table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 258,800.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic14} alt=""  />
                    <p>Asgaard sofa</p>
                    <p className="text-[24px] leading-[36px]">Rs. 250,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic15} alt="" />
                    <p>Maya sofa three seater</p>
                    <p className="text-[24px] leading-[36px]">Rs. 115,000.00</p>
                    </div>
                    <div className="space-y-4"><Image src={pic16} alt="" />
                    <p>Outdoor sofa set</p>
                    <p className="text-[24px] leading-[36px]">Rs. 244,000.00</p>
                    </div>
                </div>

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
