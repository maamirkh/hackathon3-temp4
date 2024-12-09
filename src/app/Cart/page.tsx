import Image from "next/image"
import Shoppic from "../../../public/assets/cart.png";

export default function Cart () {
    return (
        <div className="w-[1440px] mx-auto">
        <div className=" w-[1440px] h-[316px]">
          <Image src={Shoppic} alt="" />
        </div>
    
        <div className="w-[1240px] h-[390px] flex justify-center gap-10 mt-20 ml-24">
            <div>
            <div className=" w-[817px] h-[55px] bg-[#FFF9E5] flex items-center">
                <p className="text-base font-medium leading-[24px] ml-36">Product</p>
                <p className="text-base font-medium leading-[24px] ml-32">Price</p>
                <p className="text-base font-medium leading-[24px] ml-36">Quantity</p>
                <p className="text-base font-medium leading-[24px] ml-10">Sub-Total</p>
            </div>
            <div className="mt-24 flex items-center">
                <img src="/assets/Group 137.png" alt="" />
                <p className="text-base  leading-[24px] ml-4">Asgaard Sofa</p>
                <p className="text-base  leading-[24px] ml-24">Rs. 250,000.00</p>
                <div className="flex ml-[100px] items-center justify-center w-[32px] h-[32px] border border-[#9f9f9f] rounded-[5px] ">1</div>
                <p className="text-base  leading-[24px] ml-10">Rs. 250,000.00</p>
            </div>
            </div>
            <div className="w-[393px] h-[390px] flex flex-col items-center space-y-8 bg-[#FFF9E5]">
                <p className="text-[32px] font-semibold leading-[48px] text-center">Cart Totals</p>
                <div className="flex gap-24 pt-6">
                    <p className="text-base font-medium leading-[24px]">Subtotal</p>
                    <p className="text-base leading-[24px] text-[#9f9f9f]">Rs. 250,000.00</p>
                </div>
                <div className="flex gap-24">
                    <p className="text-base font-medium leading-[24px]">Total</p>
                    <p className="text-[20px] font-medium leading-[30px] text-[#B88E2F]">Rs. 250,000.00</p>
                </div>
                <button className=" w-[222px] h-[58px] border border-black rounded-[15px]">Check Out</button>

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