import Image from "next/image";
import Link from "next/link";
import Shoppic from "../../../public/assets/contact.png";
import Pic001 from "../../../public/assets/Rectangle001.png";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import pic002 from "../../../public/assets/Rectangle002.png"
import pic003 from "../../../public/assets/Rectangle003.png"
import pic004 from "../../../public/assets/Rectangle004.png"
import pic005 from "../../../public/assets/Rectangle005.png"
import pic006 from "../../../public/assets/Rectangle006.png"
import pic007 from "../../../public/assets/Rectangle007.png"
import pic008 from "../../../public/assets/Rectangle008.png"

export default function About() {
  return (
    <div className="max-w-full mx-auto px-4">
      <div className="w-full h-auto">
        <Image src={Shoppic} alt="Contact" className="w-full h-auto" />
      </div>

      <div className="mt-20 flex flex-wrap lg:flex-nowrap mr-10">
        <div className="left side ">
          <div className="max-w-full">
            <Image src={Pic001} alt="" />
            <div className="flex items-center mt-4 text-[#9F9F9F]">
              <FaUser className="text-xl" />
              <span className="ml-2 text-base leading-[24px]" >Admin</span>
              <MdDateRange className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">14 August 2022</span>
              <FaTags className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">Wood</span>
            </div>
            <h1 className="text-[30px] font-medium leading-[45px] my-8">Going all-in with millennial design</h1>
            <p className="w-[80%] text-justify text-[15px] font-medium leading-[22.5px] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="text-[16px] leading-[24px] underline underline-offset-8 my-8">Read More</button>
          </div>

          <div className="mt-4">
            <Image src={pic003} alt="" />
            <div className="flex items-center mt-4 text-[#9F9F9F]">
              <FaUser className="text-xl" />
              <span className="ml-2 text-base leading-[24px]" >Admin</span>
              <MdDateRange className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">14 August 2022</span>
              <FaTags className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">Wood</span>
            </div>
            <h1 className="text-[30px] font-medium leading-[45px] my-8">Going all-in with millennial design</h1>
            <p className="w-[80%] text-justify text-[15px] font-medium leading-[22.5px] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="text-[16px] leading-[24px] underline underline-offset-8 my-8">Read More</button>
          </div>

          <div className="mt-4">
            <Image src={pic002} alt="" />
            <div className="flex items-center mt-4 text-[#9F9F9F]">
              <FaUser className="text-xl" />
              <span className="ml-2 text-base leading-[24px]" >Admin</span>
              <MdDateRange className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">14 August 2022</span>
              <FaTags className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">Wood</span>
            </div>
            <h1 className="text-[30px] font-medium leading-[45px] my-8">Going all-in with millennial design</h1>
            <p className="w-[80%] text-justify text-[15px] font-medium leading-[22.5px] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="text-[16px] leading-[24px] underline underline-offset-8 my-8">Read More</button>
          </div>

            

        </div>
        <div className="right side">
            <div className=" flex h-12">
                <input className="border border-gray-500 px-10 border-r-0 rounded-l-[10px]"></input>
                <div className="p-2 text-3xl border border-gray-500 border-l-0 rounded-r-[10px]"><IoSearchOutline/>
                </div>
            </div>
            <p className="text-[24px] font-medium leading-[36px] ml-10 my-10">Categories</p>
            <div className="flex gap-40 ml-10">
                <div className=" space-y-10">
                    <p className="text-base leading-[24px] text-[#9f9f9f]">Crafts</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">Designs</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">Homemade</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">Interior</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">Wood</p>
                </div>
                <div className="space-y-10">
                    <p className="text-base leading-[24px] text-[#9f9f9f]">2</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">8</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">7</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">1</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">6</p>
                </div>

            </div>
            <p className="ml-10 mt-36 text-[24px] font-medium leading-[36px] ">Recent Posts</p>


            <div className="ml-10 space-y-10 mt-10">
                <div className="flex gap-2 items-center">
                    <Image src={pic004} alt=""/>
                    <div className="">
                    <p className="text-[14px] leading-[21px]">Going all-in with </p>
                    <p className="text-[14px] leading-[21px]">millennial design</p>
                    <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">03 Aug 2022</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src={pic005} alt=""/>
                <div className="">
                    <p className="text-[14px] leading-[21px]">Exploring new ways </p>
                    <p className="text-[14px] leading-[21px]">of decorating</p>
                    <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">03 Aug 2022</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                <Image src={pic006} alt=""/>
                <div className="">
                    <p className="text-[14px] leading-[21px]">Handmade pieces</p>
                    <p className="text-[14px] leading-[21px]">that took time to make</p>
                    <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">03 Aug 2022</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                <Image src={pic007} alt=""/>
                <div className="">
                    <p className="text-[14px] leading-[21px]">Modern home in </p>
                    <p className="text-[14px] leading-[21px]">Milan</p>
                    <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">03 Aug 2022</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                <Image src={pic008} alt=""/>
                <div className="">
                    <p className="text-[14px] leading-[21px]">Colorful office</p>
                    <p className="text-[14px] leading-[21px]">redesign</p>
                    <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">03 Aug 2022</p>
                    </div>
                </div>
            </div>

        </div>
      
      </div>
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
