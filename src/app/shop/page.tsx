import Link from "next/link"
import { BsViewList } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsGridFill } from "react-icons/bs";
import Image from "next/image"
import Shoppic from "../../../public/assets/Group 78.png"
import React from "react"
export default function Shop () {
    return (
        <div className="w-[1440px] h-[760px] mx-auto">
            <div className="">
              <Image src={Shoppic} alt=""/>
              </div>
              <div className=" py-10 bg-[#FAF4F4] flex items-center justify-between">
                <div className="flex place-items-center gap-6 ml-20">
                <GiSettingsKnobs className="text-2xl ml-2"/>
                <p className="text-[20px] leading-[30px] pr-4">Filter</p>
                <BsGridFill className="text-2xl"/>
                <BsViewList className="text-2xl"/>
                <div className="w-[3px] h-10 bg-[#9F9F9F]"></div>
                <p className="text-base leading-[24ps]">Showing 1–16 of 32 results</p>
                </div>
                <div className="flex items-center gap-1 mr-20">
                    <p className="text-base leading-[24ps]">Show</p>
                    <p className="text-center flex justify-center items-center size-[55px] text-base leading-[30ps] bg-[#ffffff] text-[#9f9f9f] ">16</p>
                    <p className="text-base leading-[30ps]">Short By</p>
                    <p className="flex items-center justify-evenly text- w-[188px] h-[55px] text-base leading-[30ps]  bg-[#ffffff] text-[#9f9f9f]">Default</p>
                </div>
                
              </div>
              <div className="grid grid-cols-4 gap-y-10 mt-10 mx-8">
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
                <div className="flex justify-center mt-20">
                    <img src="/assets/Group 72.png" alt="" />
                </div>
                <div className="flex gap-6 my-20 py-32 justify-around bg-[#FAF4F4] mr-[70px]">
                    <div className="w-[376px] h-[108px]">
                        <p className="text-[32px] leading-[48px]">Free Delivery</p>
                        <p className="text-[20px] leading-[30px]">For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    <div className="w-[376px] h-[108px]">
                        <p className="text-[32px] leading-[48px]">90 Days Return</p>
                        <p className="text-[20px] leading-[30px]">If goods have problems, consectetur adipim scing elit.</p>
                    </div>
                    <div className="w-[376px] h-[108px]">
                        <p className="text-[32px] leading-[48px]">Secure Payment</p>
                        <p className="text-[20px] leading-[30px]">100% secure payment, consectetur adipim scing elit.</p>
                    </div>
                </div>
        </div>
    ) 
}