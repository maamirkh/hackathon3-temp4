import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function SingleProduct() {
  return (
    <div>
      <div className="w-[1440px] h-[100px] flex items-center ml-[120px] gap-10">
        <div className="flex gap-4 items-center">
          <Link href="/" className=" text-[#9f9f9f] text-base leading-[24px]">
            Home
          </Link>
          <IoIosArrowForward />
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/shop"
            className="text-[#9f9f9f] text-base leading-[24px]"
          >
            Shop
          </Link>
          <IoIosArrowForward />
        </div>
        <div className="w-[2px] h-[37px] bg-[#9F9F9F]"></div>
        <div className="flex items-center">
          <p className="text-base leading-[24px]">Asgaard sofa</p>
        </div>
      </div>
      <div className="w-[1440px] h-[820px] flex justify-center items-center">
        <div className="w-[1241px] h-[730px] flex gap-20">
          <div className="w-[553px] h-[500px]">
            <img src="/assets/Group 102.png" alt="" />
          </div>
          <div>
            <div className="w-[606px] h-[500px] space-y-4">
              <div>
                <p className="text-[42px] leading-[63px] ">Asgaard sofa</p>
                <p className="text-[#9f9f9f} text-[24px] leading-[36px]">
                  Rs. 250,000.00
                </p>
              </div>
              <div className="flex items-center gap-6">
                <img src="/assets/Group 88.png" alt="" />
                <div className="w-[2px] h-[30px] bg-[#9f9f9f]"></div>
                <p className="text-[13px] leading-[19.5px] text-[#9f9f9f]">
                  5 Customer Review
                </p>
              </div>
              <div className="w-[424px] h-[80px] text-left">
                <p className="text-[13px] leading-[19.5px] tracking-[0.6px]">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </p>
              </div>
              <img src="/assets/Group 92.png" alt="" />
              <p className="text-[14px] leading-[21px] text-[#9f9f9f]">Color</p>
              <div className="flex gap-4">
                <img src="/assets/Rectangle 42.png" alt="" />
                <img src="/assets/Rectangle 43.png" alt="" />
                <img src="/assets/Rectangle 44.png" alt="" />
              </div>
              <div className="flex gap-3">
                <img src="/assets/Group 93.png" alt="" />
                <img src="/assets/Group 21.png" alt="" />
              </div>
            </div>
            <div className="w-[605px] h-[1px] bg-[#D9D9D9] mt-[50px]"></div>
            <div className="flex gap-8 mt-10">
              <div className=" space-y-4">
                <p className="text-base leading-[24px] text-[#9F9F9F]">SKU</p>
                <p className="text-base leading-[24px] text-[#9F9F9F]">
                  tegory
                </p>
                <p className="text-base leading-[24px] text-[#9F9F9F]">Tags</p>
                <p className="text-base leading-[24px] text-[#9F9F9F]">
                  {" "}
                  Share
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-base leading-[24px] text-[#9F9F9F]">
                  : SS001
                </p>
                <p className="text-base leading-[24px] text-[#9F9F9F]">
                  : Sofas
                </p>
                <p className="text-base leading-[24px] text-[#9F9F9F]">
                  : Sofa, Chair, Home, Shop
                </p>
                <div className="flex gap-4 text-2xl">
                  <p className="text-base">:</p>
                  <FaFacebook />
                  <FaLinkedin />
                  <AiFillTwitterCircle />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[1px] bg-[#D9D9D9] ml-[120px]"></div>
      <div className="w-[1440px] h-[844px]">
        <div className="flex gap-10 mt-10 items-center justify-center">
          <p className="text-[24px] leading-[36px] ">Description</p>
          <p className="text-[24px] leading-[36px] text-[#9F9F9F]">
            Additional Information
          </p>
          <p className="text-[24px] leading-[36px] text-[#9F9F9F]">
            Reviews [5]
          </p>
        </div>
        <div className="w-[1440px] h-[174px] flex justify-center">
        <div className="w-[1026px] h-[174px] mt-10 text-base leading-[24px] text-[#9F9F9F] space-y-6">
          <p className="">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-justify">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <img src="/assets/Group 109.png" alt="" className="pt-8"/>
        </div>
        </div>
        
      </div>
      <div className="w-[1440px] h-[777px] flex flex-col items-center">
        <p className="text-[36px] h-[54px]">Related Products</p>
        <div className="flex">
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
                            
        </div>
        <button className="text-[20px] leading-[30px] underline underline-offset-8 hover:text-blue-400 mt-20">
              View More
            </button>
      </div>
    </div>
  );
}
