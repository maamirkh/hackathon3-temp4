

import Image from "next/image";
import Shoppic from "../../../public/assets/contact.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function Contact() {
  return (
    <div className="max-w-full mx-auto px-4">
      <div className="w-full h-auto">
        <Image src={Shoppic} alt="Contact" className="w-full h-auto" />
      </div>

      <div className="w-full flex flex-col items-center mt-20">
        <div className="max-w-lg text-center">
          <p className="text-3xl md:text-4xl font-semibold leading-tight">
            Get In Touch With Us
          </p>
          <p className="text-base leading-relaxed mt-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="w-full max-w-5xl flex flex-wrap md:flex-nowrap gap-8 justify-center mt-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <IoLocationSharp className="text-2xl" />
              <p className="text-xl md:text-2xl font-medium">Address</p>
            </div>
            <p className="text-base leading-relaxed pl-8">
              236 5th SE Avenue, New York NY10000, United States
            </p>

            <div className="flex items-center gap-4 mt-6">
              <FaPhoneAlt className="text-2xl" />
              <p className="text-xl md:text-2xl font-medium">Phone</p>
            </div>
            <p className="text-base leading-relaxed pl-8">
              Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
            </p>

            <div className="flex items-center gap-4 mt-6">
              <MdOutlineAccessTimeFilled className="text-2xl" />
              <p className="text-xl md:text-2xl font-medium">Working Time</p>
            </div>
            <p className="text-base leading-relaxed pl-8">
              Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:max-w-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-base font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-4"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-base font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-4"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-base font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-4"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className="block text-base font-medium">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-4"
                  placeholder="Enter your message"
                  rows={5}
                />
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg">
                Submit
              </button>
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
