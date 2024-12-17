<<<<<<< HEAD

import Image from "next/image";
import Shoppic from "../../../public/assets/checout.png";

export default function Checkout() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-auto">
                <Image src={Shoppic} alt="Checkout Image" layout="responsive" className="w-full" />
            </div>

            <div className="flex flex-col lg:flex-row mt-20 justify-center gap-10">
                {/* Billing Details */}
                <div className="w-full max-w-[608px]">
                    <p className="text-[24px] sm:text-[36px] leading-[36px] sm:leading-[54px] font-semibold">Billing details</p>

                    <div className="flex flex-wrap gap-8 mt-10">
                        <div className="w-full sm:w-[212px] space-y-4">
                            <p className="text-base leading-[24px] font-medium">First Name</p>
                            <input type="text" className="w-full h-[50px] sm:h-[75px] border border-[#9F9F9F] rounded-[10px]" />
                        </div>
                        <div className="w-full sm:w-[212px] space-y-4">
                            <p className="text-base leading-[24px] font-medium">Last Name</p>
                            <input type="text" className="w-full h-[50px] sm:h-[75px] border border-[#9F9F9F] rounded-[10px]" />
                        </div>
                    </div>

                    <div className="space-y-8 mt-6">
                        <div>
                            <p className="text-base leading-[24px] font-medium">Company Name (Optional)</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Country/Region</p>
                            <select className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]">
                                <option>Pakistan</option>
                                <option>UAE</option>
                                <option>KSA</option>
                            </select>
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Street Address</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Town/City</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Province</p>
                            <select className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]">
                                <option>Sindh</option>
                                <option>Punjab</option>
                                <option>Balochistan</option>
                                <option>Khyber Pakhtunkhwa</option>
                            </select>
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">ZIP Code</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Phone</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Email Address</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Additional Information</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px] text-center" placeholder="Additional Information" />
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full max-w-[608px]">
                    <img src="/assets/Group 134.png" alt="Order Summary" className="w-full" />
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
=======

import Image from "next/image";
import Shoppic from "../../../public/assets/checout.png";

export default function Checkout() {
    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-auto">
                <Image src={Shoppic} alt="Checkout Image" layout="responsive" className="w-full" />
            </div>

            <div className="flex flex-col lg:flex-row mt-20 justify-center gap-10">
                {/* Billing Details */}
                <div className="w-full max-w-[608px]">
                    <p className="text-[24px] sm:text-[36px] leading-[36px] sm:leading-[54px] font-semibold">Billing details</p>

                    <div className="flex flex-wrap gap-8 mt-10">
                        <div className="w-full sm:w-[212px] space-y-4">
                            <p className="text-base leading-[24px] font-medium">First Name</p>
                            <input type="text" className="w-full h-[50px] sm:h-[75px] border border-[#9F9F9F] rounded-[10px]" />
                        </div>
                        <div className="w-full sm:w-[212px] space-y-4">
                            <p className="text-base leading-[24px] font-medium">Last Name</p>
                            <input type="text" className="w-full h-[50px] sm:h-[75px] border border-[#9F9F9F] rounded-[10px]" />
                        </div>
                    </div>

                    <div className="space-y-8 mt-6">
                        <div>
                            <p className="text-base leading-[24px] font-medium">Company Name (Optional)</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Country/Region</p>
                            <select className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]">
                                <option>Pakistan</option>
                                <option>UAE</option>
                                <option>KSA</option>
                            </select>
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Street Address</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Town/City</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Province</p>
                            <select className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]">
                                <option>Sindh</option>
                                <option>Punjab</option>
                                <option>Balochistan</option>
                                <option>Khyber Pakhtunkhwa</option>
                            </select>
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">ZIP Code</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Phone</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Email Address</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px]" />
                        </div>

                        <div>
                            <p className="text-base leading-[24px] font-medium">Additional Information</p>
                            <input className="w-full max-w-[453px] h-[50px] sm:h-[75px] border border-[#9f9f9f] rounded-[10px] text-center" placeholder="Additional Information" />
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full max-w-[608px]">
                    <img src="/assets/Group 134.png" alt="Order Summary" className="w-full" />
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
>>>>>>> e2110c773f4dae8fec017c02724a5a8750eb4920
