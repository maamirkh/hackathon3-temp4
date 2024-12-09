import Image from "next/image"
import Shoppic from "../../../public/assets/checout.png"

export default function Checkout () {
    return (
        <div className="w-[1440px] mx-auto">
        <div className=" w-[1440px] h-[316px]">
          <Image src={Shoppic} alt="" />
        </div>
        <div className="flex mt-20 justify-center">
            <div className="w-[608px] h-[1714px]">
                <p className="text-[36px] leading-[54px] font-semibold">Billing details</p>
                <div className="w-[608px] h-[121px] flex gap-8 mt-20">
                    <div className="w-[212px] h-[121px] space-y-4">
                    <p className="text-base leading-[24px] font-medium">First Name</p>
                    <input type="text" className="w-[211px] h-[75px] border border-[#9F9F9F] rounded-[10px]"/>
                    </div>
                    <div className="w-[212px] h-[121px] space-y-4">
                    <p className="text-base leading-[24px] font-medium">First Name</p>
                    <input type="text" className="w-[211px] h-[75px] border border-[#9F9F9F] rounded-[10px]"/>
                    </div>
                </div>
                <div className="space-y-8">
                <p className="text-base leading-[24px] font-medium">Company Name (Optional)</p>
                <input className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]"/>
                
                <p className="text-base leading-[24px] font-medium">Country/Region</p>
                <select name="" id="" className=" text-center w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]">
                <option value="">Pakistan</option>
                <option value="">UAE</option>
                <option value="">KSA</option>
            
                </select>
                <p className="text-base leading-[24px] font-medium">Street Address</p>
                <input className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]"/>
                <p className="text-base leading-[24px] font-medium">Town/City</p>
                <input className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]"/>
                <p className="text-base leading-[24px] font-medium">Province</p>
                <select name="" id="" className=" text-center w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]">
                    <option value="">Sindh</option>
                    <option value="">Punjab</option>
                    <option value="">Balochistan</option>
                    <option value="">Khyber Pakhtonkhua</option>
                </select>
                <p className="text-base leading-[24px] font-medium">ZIP Code</p>
                <input className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]"/>
                <p className="text-base leading-[24px] font-medium">Phone</p>
                <input className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]"/>
                <p className="text-base leading-[24px] font-medium">Email Address</p>
                <input className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px]"/>
                <p className="text-base leading-[24px] font-medium">Company Name (Optional)</p>
                <input className="w-[453px] h-[75px] border border-[#9f9f9f] rounded-[10px] text-center" placeholder="Additional Information"/>
            </div>
            </div>
            
            <div className="w-[608px] h-[789px]">
                <img src="/assets/Group 134.png" alt="" />
            </div>
        </div>
        <div className=" w-[1440px] flex gap-6 my-20 py-32 justify-around bg-[#FAF4F4]">
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