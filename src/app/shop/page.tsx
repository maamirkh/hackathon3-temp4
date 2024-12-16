
import Link from "next/link";
import { BsViewList } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsGridFill } from "react-icons/bs";
import Image from "next/image";
import Shoppic from "../../../public/assets/Group 78.png";
import React from "react";

export default function Shop() {
  return (
    <div className="max-w-full mx-auto px-4">
      <div className="w-full h-auto">
        <Image src={Shoppic} alt="Shop Banner" className="w-full h-auto" />
      </div>

      <div className="py-6 bg-[#FAF4F4] flex flex-wrap items-center justify-between px-4">
        {/* Filter and Info Section */}
        <div className="flex items-center gap-4">
          <GiSettingsKnobs className="text-2xl" />
          <p className="text-base md:text-lg leading-[30px]">Filter</p>
          <BsGridFill className="text-2xl" />
          <BsViewList className="text-2xl" />
          <div className="hidden sm:block w-[3px] h-10 bg-[#9F9F9F]"></div>
          <p className="text-sm md:text-base leading-[24px]">
            Showing 1–16 of 32 results
          </p>
        </div>

        {/* Sorting Section */}
        <div className="flex items-center gap-4">
          <p className="text-sm md:text-base">Show</p>
          <p className="px-4 py-2 border rounded-md bg-white text-gray-500">
            16
          </p>
          <p className="text-sm md:text-base">Sort By</p>
          <p className="px-4 py-2 border rounded-md bg-white text-gray-500">
            Default
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      
                    <div className="space-y-4"><img src="/assets/Mask Group.png" alt="" />
                    <p className="text-base leading-[24px]">Trenton modular sofa_3</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (1).png" alt="" />
                    <p>Granite dining table with dining chair</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (2).png" alt="" />
                    <p>Outdoor bar table and stool</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (3).png" alt="" />
                    <p>Plain console with teak mirror</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (4).png" alt="" />
                    <p>Grain coffee table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 15,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask.png" alt="" />
                    <p>Grain coffee table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 225,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (5).png" alt="" />
                    <p>Round coffee table_color 2</p>
                    <p className="text-[24px] leading-[36px]">Rs. 251,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (6).png" alt="" />
                    <p>Reclaimed teak coffee table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 25,200.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (7).png" alt="" />
                    <p>Plain console_</p>
                    <p className="text-[24px] leading-[36px]">Rs. 258,200.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (8).png" alt="" />
                    <p>Reclaimed teak Sideboard</p>
                    <p className="text-[24px] leading-[36px]">Rs. 20,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (9).png" alt="" />
                    <p>SJP_0825 </p>
                    <p className="text-[24px] leading-[36px]">Rs. 200,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (10).png" alt="" />
                    <p>Bella chair and table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 100,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (11).png" alt="" />
                    <p>Granite square side table</p>
                    <p className="text-[24px] leading-[36px]">Rs. 258,800.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (12).png" alt="" />
                    <p>Asgaard sofa</p>
                    <p className="text-[24px] leading-[36px]">Rs. 250,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (13).png" alt="" />
                    <p>Maya sofa three seater</p>
                    <p className="text-[24px] leading-[36px]">Rs. 115,000.00</p>
                    </div>
                    <div className="space-y-4"><img src="/assets/Mask Group (14).png" alt="" />
                    <p>Outdoor sofa set</p>
                    <p className="text-[24px] leading-[36px]">Rs. 244,000.00</p>
                    </div>
                </div>

      {/* Pagination */}
      <div className="flex justify-center my-10">
        <img src="/assets/Group 72.png" alt="Pagination" />
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
