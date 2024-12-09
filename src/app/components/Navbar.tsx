import Link from "next/link";
import { TbUserExclamation } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export default function Navbar () {
    return (
        <div>
                <header className="bg-white border- mx-auto flex w-[1440px]">
    <div className=" bg-white text-black py-6 text-sm flex items-center px-8 w-full">

      <div className="flex items-center gap-[300px] ml-[500px]">
        <div className="flex gap-10 text-base font-medium">
          <Link className=" hover:text-blue-400" href="/">Home</Link>
          <Link className=" hover:text-blue-400" href="/shop">Shop</Link>
          <Link className=" hover:text-blue-400" href="/about">About</Link>
          <Link className=" hover:text-blue-400" href="/contact">Contact</Link>
        </div>
        <div className="flex gap-8">
        <a href="/MyAccount"><TbUserExclamation className="text-2xl hover:text-blue-400"/></a>
        <a href=""><IoSearchOutline className="text-2xl hover:text-blue-400"/></a>
        <a href="/Checkout"><FaRegHeart className="text-2xl hover:text-blue-400"/></a>
        <a href="/Cart"><IoMdCart className="text-2xl hover:text-blue-400"/></a>
        </div>
      </div>

    </div>
    </header>
        </div>
    )
}