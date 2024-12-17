
import { GoClock } from "react-icons/go";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function Hero() {
  return (
    <header className="bg-white mx-auto">
      <div className="text-black text-sm flex flex-col items-center">
        <div className="bg-[#FBEBB5] flex items-center px-4 py-6 lg:px-[108px]">
          <div className="space-y-4 max-w-md">
            <h1 className="ml-28 text-3xl md:text-5xl font-bold leading-tight md:leading-[96px] tracking-[px]">
              Rocket single seater
            </h1>
            <button className="ml-32 text-lg md:text-2xl font-medium leading-6 md:leading-[36px] hover:text-blue-400 underline underline-offset-8">
              Shop Now
            </button>
          </div>
          <div className=" sm:max-w-none md:max-w-2xl">
            <img src="/assets/hero-1.png" alt="" className="w-full" />
          </div>
        </div>

        <div className="max-w-full flex flex-wrap justify-center lg:flex-nowrap gap-4 bg-[#FAF4F4] py-10 px-4 lg:px-[55px] mx-auto">
          <img src="/assets/Group 9.png" alt="" className="max-w-1/2" />
          <img src="/assets/Group 8.png" alt="" className="max-w-1/2" />
        </div>

        <div className="my-20 text-center">
          <h1 className="text-2xl md:text-4xl font-medium leading-tight md:leading-[54px]">
            Top Picks For You
          </h1>
          <p className="text-base font-medium leading-6 md:leading-[24px]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 px-4">
        <div className="space-y-4">
              <img src="/assets/Mask group (3).png" alt="" />
              <p className="text-base leading-[24px]">Trenton modular sofa_3</p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
            <div className="space-y-4">
              <img src="/assets/Mask group (2).png" alt="" />
              <p className="text-base leading-[24px]">
                Granite dining table with dining chair
              </p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
            <div className="space-y-4">
              <img src="/assets/Mask group (1).png" alt="" />
              <p className="text-base leading-[24px]">
                Outdoor bar table and stool
              </p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
            <div className="space-y-4">
              <img src="/assets/Mask group.png" alt="" />
              <p className="text-base leading-[24px]">
                Plain console with teak mirror
              </p>
              <p className="text-2xl font-medium leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          
        </div>

        <div className="my-20 text-center text-lg font-medium">
          <button className="underline underline-offset-8 hover:text-blue-400">
            View More
          </button>
        </div>

        <div className="bg-[#FBEBB5] flex flex-wrap justify-between items-center px-4 py-10 lg:px-20">
          <div className="max-w-4xl">
            <img src="/assets/Asgaard sofa 1.png" alt="" className="w-full" />
          </div>
          <div className="space-y-4 max-w-lg">
            <p className="text-lg md:text-2xl font-medium">New Arrivals</p>
            <h1 className="text-3xl md:text-5xl font-medium leading-tight md:leading-[72px]">
              Asgaard sofa
            </h1>
            <a
              href="/singleproduct"
              className="text-lg md:text-2xl font-medium leading-6 md:leading-[36px] hover:text-blue-400 underline underline-offset-8"
            >
              Order Now
            </a>
          </div>
        </div>

        <div className="py-10 my-10 text-center">
          <h1 className="text-2xl md:text-4xl font-medium leading-tight md:leading-[54px]">
            Our Blogs
          </h1>
          <p className="text-base font-medium leading-6 md:leading-[24px]">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        <div className="max-w-full flex flex-wrap gap-10">
          <div className="">
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
            <div className="">
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
            
            <div className="">
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
        <div className="my-20 text-center text-lg font-medium">
          <button className="underline underline-offset-8 hover:text-blue-400">
            View All Posts
          </button>
        </div>

        <div className="w-full">
          <img src="/assets/Group 47.png" alt="" className="w-full" />
        </div>
      </div>
    </header>
  );
}
