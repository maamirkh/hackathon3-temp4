<<<<<<< HEAD

export default function Footer() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="flex flex-wrap justify-center items-start mt-20 mb-20 gap-10">
                {/* Address Section */}
                <div className="w-full sm:w-auto max-w-[260px] mt-20 mr-10">
                    <p className="text-base leading-[24px] text-[#9F9F9F]">
                        400 University Drive Suite 200 Coral Gables,
                    </p>
                    <p className="text-base leading-[24px] text-[#9F9F9F]">
                        FL 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex flex-wrap justify-center gap-10 sm:gap-20 lg:gap-28">
                    <div className="flex flex-col gap-8 ">
                        <p className="text-base font-medium leading-[24px] hover:text-blue-400">Links</p>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Home</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Shop</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">About</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Contact</a>
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <p className="text-base font-medium leading-[24px] hover:text-blue-400">Help</p>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Payment options</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Returns</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Privacy Policy</a>
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <p className="text-base font-medium leading-[24px]">Newsletter</p>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <input 
                                className="flex-1 border px-4 py-2 w-full sm:w-auto" 
                                type="text" 
                                placeholder="Enter Your Email Address" 
                                ></input>
                            
                            <button className="text-base font-medium leading-[24px] underline underline-offset-8 hover:text-blue-400">
                                Subscribe
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <div className="border-t border-[#D9D9D9] w-full max-w-[1200px]"></div>
            <p className="text-base leading-[24px] text-center py-10">
                2022 Meubel House. All rights reserved
            </p>
        </div>
    );
}

=======

export default function Footer() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="flex flex-wrap justify-center items-start mt-20 mb-20 gap-10">
                {/* Address Section */}
                <div className="w-full sm:w-auto max-w-[260px] mt-20 mr-10">
                    <p className="text-base leading-[24px] text-[#9F9F9F]">
                        400 University Drive Suite 200 Coral Gables,
                    </p>
                    <p className="text-base leading-[24px] text-[#9F9F9F]">
                        FL 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex flex-wrap justify-center gap-10 sm:gap-20 lg:gap-28">
                    <div className="flex flex-col gap-8 ">
                        <p className="text-base font-medium leading-[24px] hover:text-blue-400">Links</p>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Home</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Shop</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">About</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Contact</a>
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <p className="text-base font-medium leading-[24px] hover:text-blue-400">Help</p>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Payment options</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Returns</a>
                        <a href="#" className="text-base font-medium leading-[24px] hover:text-blue-400">Privacy Policy</a>
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <p className="text-base font-medium leading-[24px]">Newsletter</p>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <input 
                                className="flex-1 border px-4 py-2 w-full sm:w-auto" 
                                type="text" 
                                placeholder="Enter Your Email Address" 
                                ></input>
                            
                            <button className="text-base font-medium leading-[24px] underline underline-offset-8 hover:text-blue-400">
                                Subscribe
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <div className="border-t border-[#D9D9D9] w-full max-w-[1200px]"></div>
            <p className="text-base leading-[24px] text-center py-10">
                2022 Meubel House. All rights reserved
            </p>
        </div>
    );
}

>>>>>>> e2110c773f4dae8fec017c02724a5a8750eb4920
