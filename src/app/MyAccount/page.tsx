
import Image from "next/image";
import Shoppic from "../../../public/assets/my-accout.png";

export default function MyAccount() {
  return (
    <div className="max-w-full mx-auto px-4">
      {/* Hero Section */}
      <div className="w-full h-auto">
        <Image src={Shoppic} alt="My Account" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-start mt-20 gap-10">
        {/* Login Section */}
        <div className="flex-1 max-w-md space-y-10">
          <p className="text-3xl md:text-4xl font-semibold">Log In</p>
          <form>
            <fieldset>
              <label className="text-base font-medium">Username or Email address</label>
              <input
                type="text"
                className="mt-4 border border-gray-400 w-full rounded-lg px-4 py-2"
              />
              <div className="mt-8">
                <label className="text-base font-medium">Password</label>
                <input
                  type="password"
                  className="mt-4 border border-gray-400 w-full rounded-lg px-4 py-2"
                />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-gray-400 rounded"
                />
                <p className="text-base">Remember me</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button className="w-full md:w-auto px-8 py-3 border border-black rounded-lg text-lg">
                  Log In
                </button>
                <p className="text-base">Lost Your Password?</p>
              </div>
            </fieldset>
          </form>
        </div>

        {/* Register Section */}
        <div className="flex-1 max-w-md space-y-10">
          <p className="text-3xl md:text-4xl font-semibold">Register</p>
          <form>
            <fieldset>
              <label className="text-base font-medium">Email address</label>
              <input
                type="email"
                className="mt-4 border border-gray-400 w-full rounded-lg px-4 py-2"
              />
              <p className="mt-6 text-base text-justify text-gray-700">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="mt-6 text-base leading-[24px] tracking-[0.9px] text-justify text-gray-700">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our</p>
                <p className="font-semibold">privacy policy.</p>
              <div className="mt-4">
                <button className="w-full md:w-auto px-6 py-3 border border-black rounded-lg text-lg">
                  Register
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      {/* Info Section */}
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
