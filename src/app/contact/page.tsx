import Image from "next/image";
import Shoppic from "../../../public/assets/contact.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function Contact() {
  return (
    <div className="w-[1440px] mx-auto">
      <div className=" w-[1440px] h-[316px]">
        <Image src={Shoppic} alt="" />
      </div>
      <div className="w-[1440px] h-[1144px] flex flex-col items-center mt-20">
        <div className="w-[644px] h-[48px] flex flex-col items-center text-center">
          <p className="text-[36px] font-semibold leading-[54px]">
            Get In Touch With Us
          </p>
          <p className="text-base leading-[24px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="w-[1050px] h-[923px] flex gap-40 justify-center">
          <div>
            <div className="flex gap-4 mt-40 items-center">
              <IoLocationSharp className="text-2xl" />
              <p className="text-[24px] font-medium leading-[36px]">Address</p>
            </div>
            <p className="text-base leading-[24px] tracking-[0.5px] ml-8 w-[212px] h-[72px]">
              236 5th SE Avenue, New York NY10000, United States
            </p>
            <div className="flex gap-4 mt-20 items-center">
              <FaPhoneAlt className="text-2xl" />
              <p className="text-[24px] font-medium leading-[36px]">Phone</p>
            </div>
            <p className="text-base leading-[24px] tracking-[0.5px] ml-8 w-[212px] h-[72px]">
              Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
            </p>
            <div className="flex gap-4 mt-20 items-center">
              <MdOutlineAccessTimeFilled className="text-2xl" />
              <p className="text-[24px] font-medium leading-[36px]">
                Working Time
              </p>
            </div>
            <p className="text-base leading-[24px] tracking-[0.5px] ml-8 w-[212px] h-[72px]">
              Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          <div className="w-[635px] h-[923px] mt-40 space-y-10">
            <p className="text-base font-medium leading-[24px]">Your name</p>
            <input className="w-[528px] h-[75px] border border-[#9f9f9f] rounded-[10px]" />
            <p className="text-base font-medium leading-[24px]">
              Email address
            </p>
            <input className="w-[528px] h-[75px] border border-[#9f9f9f] rounded-[10px]" />
            <p className="text-base font-medium leading-[24px]">Subject</p>
            <input className="w-[528px] h-[75px] border border-[#9f9f9f] rounded-[10px]" />
            <p className="text-base font-medium leading-[24px]">Message</p>
            <input className="w-[528px] h-[75px] border border-[#9f9f9f] rounded-[10px]" />
            <button className=" w-[222px] h-[58px] border border-black rounded-[15px]">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[1440px] flex gap-6 my-20 py-32 justify-around bg-[#FAF4F4]">
        <div className="w-[376px] h-[108px]">
          <p className="text-[32px] leading-[48px]">Free Delivery</p>
          <p className="text-[20px] leading-[30px]">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div className="w-[376px] h-[108px]">
          <p className="text-[32px] leading-[48px]">90 Days Return</p>
          <p className="text-[20px] leading-[30px]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className="w-[376px] h-[108px]">
          <p className="text-[32px] leading-[48px]">Secure Payment</p>
          <p className="text-[20px] leading-[30px]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
