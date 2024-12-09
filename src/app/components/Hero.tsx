import { GoClock } from "react-icons/go";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function Hero() {
  return (
    <header className="bg-white border- mx-auto flex w-[1440px]">
      <div className=" text-black  text-sm flex flex-col items-center px-8 w-full">
        <div className="bg-[#FBEBB5] flex items-center mx-[-32px]">
          <div className="ml-[300px] space-y-4 mt-6">
            <h1 className="text-[64px] font-medium leading-[96px]">
              Rocket single seater
            </h1>
            <button className="text-[24px] font-medium leading-[36px] hover:text-blue-400 underline underline-offset-8">
              Shop Now
            </button>
          </div>
          <div className="mr-[100px]">
            <img src="/assets/hero-1.png" alt="" />
          </div>
        </div>
        <div className="flex gap-20 items-center bg-[#FAF4F4] py-20 px-40 mx-[-32px]">
          <div>
            <img className="" src="/assets/Group 9.png" alt="" />
          </div>
          <div>
            <img className="" src="/assets/Group 8.png" alt="" />
          </div>
        </div>
        <div>
          <div className="py-20 text-center">
            <h1 className="text-4xl font-medium leading-[54px]">
              Top Picks For You
            </h1>
            <h1 className="text-base font-medium leading-[24px]">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </h1>
          </div>
          <div className="flex gap-10">
            <div>
              <img src="/assets/Mask group (3).png" alt="" />
              <p className="text-base leading-[24px]">Trenton modular sofa_3</p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
            <div>
              <img src="/assets/Mask group (2).png" alt="" />
              <p className="text-base leading-[24px]">
                Granite dining table with dining chair
              </p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
            <div>
              <img src="/assets/Mask group (1).png" alt="" />
              <p className="text-base leading-[24px]">
                Outdoor bar table and stool
              </p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
            <div>
              <img src="/assets/Mask group.png" alt="" />
              <p className="text-base leading-[24px]">
                Plain console with teak mirror
              </p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className="my-20 text-center text-[20px] font-medium leading-[30px]">
            <button className="underline underline-offset-8 hover:text-blue-400">
              View More
            </button>
          </div>
        </div>
        <div className="bg-[#FBEBB5] flex items-center gap-28 mx-[-32px]">
          <div className="ml-[20px]">
            <img src="/assets/Asgaard sofa 1.png" alt="" />
          </div>
          <div className="mr-[50px] space-y-4">
            <p className="text-2xl font-medium leading-">New Arrivals</p>
            <h1 className="text-[48px] font-medium leading-[72px] inline-block">
              Asgaard sofa
            </h1><br/>
            <a href="/singleproduct" className="text-[24px] font-medium leading-[36px] hover:text-blue-400 underline underline-offset-8">
              Order Now
            </a>
          </div>
        </div>
        <div>
          <div className="py-20 text-center">
            <h1 className="text-4xl font-medium leading-[54px]">Our Blogs</h1>
            <h1 className="text-base font-medium leading-[24px]">
              Find a bright ideal to suit your taste with our great selection
            </h1>
          </div>
          <div className="flex gap-10">
            <div>
              <img src="/assets/Rectangle 13.png" alt="" />
              <div className="space-y-4 mt-10">
                <p className="text-[20px] leading-[30px]">
                  Going all-in with millennial design
                </p>
                <button
                  className="text-[24px] font-medium leading-[36px] underline underline-offset-8
                    hover:text-blue-400"
                >
                  Read More
                </button>
                <div className="flex gap-3 items-center pt-4">
                  <GoClock />
                  <p>5 min</p>
                  <MdOutlineCalendarToday />
                  <p>
                    12<sup>th</sup>Oct 2022
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/Rectangle 14.png" alt="" />
              <div className="space-y-4 mt-10">
                <p className="text-[20px] leading-[30px]">
                  Going all-in with millennial design
                </p>
                <button
                  className="text-[24px] font-medium leading-[36px] underline underline-offset-8
                    hover:text-blue-400"
                >
                  Read More
                </button>
                <div className="flex gap-3 items-center pt-4">
                  <GoClock />
                  <p>5 min</p>
                  <MdOutlineCalendarToday />
                  <p>
                    12<sup>th</sup>Oct 2022
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/Rectangle 15.png" alt="" />
              <div className="space-y-4 mt-10">
                <p className="text-[20px] leading-[30px]">
                  Going all-in with millennial design
                </p>
                <button
                  className="text-[24px] font-medium leading-[36px] underline underline-offset-8
                    hover:text-blue-400"
                >
                  Read More
                </button>
                <div className="flex gap-3 items-center pt-4">
                  <GoClock />
                  <p>5 min</p>
                  <MdOutlineCalendarToday />
                  <p>
                    12<sup>th</sup>Oct 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20 text-center text-[20px] font-medium leading-[30px]">
            <button className="underline underline-offset-8 hover:text-blue-400">
              View All Posts
            </button>
          </div>
        </div>
        <div>
          <img src="/assets/Group 47.png" alt="" />
        </div>
      </div>
    </header>
  );
}
