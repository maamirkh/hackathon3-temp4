import Image from "next/image";
import Shoppic from "../../../public/assets/my-accout.png";
export default function MyAccount() {
  return (
    <div className="w-[1440px] mx-auto">
      <div className=" w-[1440px] h-[316px]">
        <Image src={Shoppic} alt="" />
      </div>
      <div className="w-[1440px]  flex justify-center items-center ml-[100px] mt-20">
        <div className="w-[608px] h-[630px] space-y-10 flex flex-col">
          <p className="text-[36px] leading-[54px] font-semibold">Log In</p>
          <form>
            <fieldset className="">
              <label className="text-base leading-[24px] font-medium">
                Username or Email address
              </label>
              <br />
              <input
                type="text"
                className=" mt-4 border border-[#9F9F9F] w-[400px] h-12 rounded-[10px]"
              ></input>
              <br />
              <br />
              <br />
              <label className="text-base leading-[24px] font-medium">
                Password
              </label>
              <br />
              <input
                type="text"
                className=" mt-4 border border-[#9F9F9F] w-[400px] h-12 rounded-[10px]"
              ></input>
              <br />
              <div className="mt-10 flex gap-6 items-center ">
                <div className="w-[30px] h-[27px] border border-[#9f9f9f] rounded-[5px]"></div>
                <p className="text-base leading-[24px]">Remember me</p>
              </div>
              <div className="mt-10 flex gap-8 items-center">
                <button className="w-[215px] h-[64px] border border-black rounded-[15px] text-[20px] leading-[30px]">
                  Log in
                </button>
                <p className="text-base leading-[24px] font-light">
                  Lost Your Password?
                </p>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="w-[608px] h-[630px] space-y-10 flex flex-col">
          <p className="text-[36px] leading-[54px] font-semibold">Register</p>
          <form>
            <fieldset className="">
              <label className="text-base leading-[24px] font-medium">
            Email address
              </label>
              <br />
              <input
                type="text"
                className=" mt-4 border border-[#9F9F9F] w-[400px] h-12 rounded-[10px]"
              ></input>
              <br />
              <br />
              <div className="w-[453px] h-[48px]">
                <p className="text-base text-justify leading-[24px] tracking-[0.5px] font-light">A link to set a new password will be sent to your email address.</p>
              </div>
              <div className="w-[453px] h-[96px] mt-4">
                <p className="text-base text-justify leading-[24px] tracking-[0.9px] font-light">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              </div>

              <div className="mt-10 flex gap-6 items-center "></div>
              <div className="mt-6 flex gap-8 items-center">
                <button className="w-[215px] h-[64px] border border-black rounded-[15px] text-[20px] leading-[30px]">
                  Register
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        
      </div>
      <div className=" w-[1440px] flex gap-6 mb-20 py-32 justify-around bg-[#FAF4F4]">
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
  );
}
