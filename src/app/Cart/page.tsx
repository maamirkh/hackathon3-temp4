

import Link from "next/link";
import Image from "next/image";
import Shoppic from "../../../public/assets/cart.png";

export default function Cart() {
    return (
        <div className="max-w-full mx-auto px-4">
            <div className="w-full h-auto">
                <Image src={Shoppic} alt="Cart Image" layout="responsive" className="w-full" />
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mt-20">
                {/* Product Details Section */}
                <div className="flex-1">
                    <div className="w-full h-[55px] bg-[#FFF9E5] flex items-center px-4">
                        <p className="text-base font-medium leading-[24px] flex-1 text-center">Product</p>
                        <p className="text-base font-medium leading-[24px] flex-1 text-center">Price</p>
                        <p className="text-base font-medium leading-[24px] flex-1 text-center">Quantity</p>
                        <p className="text-base font-medium leading-[24px] flex-1 text-center">Sub-Total</p>
                    </div>
                    <div className="mt-10 flex items-center px-4">
                        <img src="/assets/Group 137.png" alt="Product" className="w-16 h-16" />
                        <p className="text-base leading-[24px] flex-1 text-center">Asgaard Sofa</p>
                        <p className="text-base leading-[24px] flex-1 text-center">Rs. 250,000.00</p>
                        <div className="flex justify-center items-center w-10 h-10 border border-[#9f9f9f] rounded-[5px]">1</div>
                        <p className="text-base leading-[24px] flex-1 text-center">Rs. 250,000.00</p>
                    </div>
                </div>

                {/* Cart Totals Section */}
                <div className="w-full max-w-[393px] bg-[#FFF9E5] p-6 flex flex-col items-center space-y-6 pb-20">
                    <p className="text-[24px] sm:text-[32px] font-semibold leading-[36px] sm:leading-[48px]">Cart Totals</p>
                    <div className="flex justify-between w-full px-4 p-4">
                        <p className="text-base font-medium leading-[24px]">Subtotal</p>
                        <p className="text-base leading-[24px] text-[#9f9f9f]">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between w-full px-4 p-4">
                        <p className="text-base font-medium leading-[24px]">Total</p>
                        <p className="text-[18px] sm:text-[20px] font-medium leading-[24px] sm:leading-[30px] text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                
                        <Link href="Checkout" className="w-full max-w-[222px] h-[50px] sm:h-[58px] flex justify-center items-center border border-black rounded-[15px] text-center">Check Out</Link>
                    
                </div>
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
