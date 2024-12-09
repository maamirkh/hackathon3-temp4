export default function Footer () {
    return (
        <div>
            <div className="flex justify-evenly mt-20 mb-20 px-20">
                <div className="mt-[70px] w-[260px]">
                    <p className="  text-base leading-[24px] text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, </p>
                    <p className="text-base leading-[24px] text-[#9F9F9F]">FL 33134 USA</p>
                </div>
                <div className="flex flex-col gap-10 ml-10">
                    <p className="text-base font-medium leading-[24px] hover:text-blue-400">Links</p>
                    <a className="text-base font-medium leading-[24px] hover:text-blue-400">Home</a>
                    <a className="text-base font-medium leading-[24px] hover:text-blue-400">Shop</a>
                    <a className="text-base font-medium leading-[24px] hover:text-blue-400">About</a>
                    <a className="text-base font-medium leading-[24px] hover:text-blue-400">Contact</a>

                </div>
                <div className="flex flex-col gap-10 ml-10">
                    <p className="text-base font-medium leading-[24px] hover:text-blue-400">Help</p>
                    <a className="text-base font-medium leading-[24px] hover:text-blue-400">Payment options</a>
                    <a className="text-base font-medium leading-[24px] hover:text-blue-400">Returns</a>
                    <a className="text-base font-medium leading-[24px] hover:text-blue-400">Privacy Policy</a>
                </div>
                <div className="flex flex-col gap-10 ml-10">
                    <p className="text-base font-medium leading-[24px]">Newsletter</p>
                   <div className="flex gap-6">
                    <input className=" border border-b-gray-500" type="text" placeholder="Enter Your Email Address" />
                    <button className="text-base font-medium leading-[24px] underline underline-offset-8 hover:text-blue-400">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="mx-[120px] border border-b-[#D9D9D9]"></div>
            <p className="text-base leading-[24px] py-10 ml-[200px]">2022 Meubel House. All rights reverved</p>
        </div>
    )
}