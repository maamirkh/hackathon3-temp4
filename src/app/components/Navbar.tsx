'use client'
import { useRef, useState } from "react"; // Ensure useState is imported
import Image from "next/image";
import Link from "next/link";
import { TbUserExclamation } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";
import cartpic from "../../../public/assets/Group 137.png"
import { IoMdCloseCircle } from "react-icons/io";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Add this line to define menuOpen state
  
  return (
      
      <header className="bg-white w-full">
        <div className="bg-white text-black py-6 text-sm flex items-center px-8 max-w-screen-xl mx-auto">
          

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center ml-[400px] gap-20 text-base font-medium">
            <Link className="hover:text-blue-400" href="/">
              Home
            </Link>
            <Link className="hover:text-blue-400" href="/shop">
              Shop
            </Link>
            <Link className="hover:text-blue-400" href="/about">
              About
            </Link>
            <Link className="hover:text-blue-400" href="/contact">
              Contact
            </Link>
          </nav>

          {/* Icons Section */}
          <div className="hidden md:flex gap-8 ml-[200px]">
            <Link href="/MyAccount">
              <TbUserExclamation className="text-2xl hover:text-blue-400" />
            </Link>
            <Link href="">
              <IoSearchOutline className="text-2xl hover:text-blue-400" />
            </Link>
            <Link href="/Checkout">
              <FaRegHeart className="text-2xl hover:text-blue-400" />
            </Link>
            <Link href="/Cart">
              <IoMdCart className="text-2xl hover:text-blue-400" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-2xl hover:text-blue-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col items-center py-4">
              <Link className="py-2 hover:text-blue-400" href="/">
                Home
              </Link>
              <Link className="py-2 hover:text-blue-400" href="/shop">
                Shop
              </Link>
              <Link className="py-2 hover:text-blue-400" href="/about">
                About
              </Link>
              <Link className="py-2 hover:text-blue-400" href="/contact">
                Contact
              </Link>
              <div className="flex gap-4 py-2">
                <a href="/MyAccount">
                  <TbUserExclamation className="text-2xl hover:text-blue-400" />
                </a>
                <a href="">
                  <IoSearchOutline className="text-2xl hover:text-blue-400" />
                </a>
                <a href="/Checkout">
                  <FaRegHeart className="text-2xl hover:text-blue-400" />
                </a>
                <a href="/Cart">
                  <IoMdCart className="text-2xl hover:text-blue-400" />
                </a>
              </div>
            </nav>
          </div>
        )}
          <div className="hidden absolute top-0 right-0 w-[25%] h-[600px] bg-white">
            <div className=" flex items-center justify-between mx-8 mt-8">
              <p className="text-[24px] font-semibold leading-[36px]">Shopping Cart</p>
              <p className="text-2xl text-[#9f9f9f]"><IoLockClosedSharp /></p>
            </div>
            <div className="w-[250px] h-[1px] ml-8 bg-[#D9D9D9] mt-8">
            </div>
            <div className="flex mt-8 ml-8 items-center gap-8">
              <Image src={cartpic} alt=""/>
              <div className="space-y-4">
              <p className="text-base leading-[24px]">Asgaard sofa</p>
              <div className="flex gap-4">
                <p className="text-base font-light leading-[24px]">1</p>
                <p className="text-[12px] font-light leading-[18px]">X</p>
                <p className="text-[12px] font-medium leading-[18px] text-[#B88E2F]">Rs. 250,000.00</p>
              </div>
              <div className="absolute top-40 right-4 text-2xl text-[#9F9F9F]"><IoMdCloseCircle /></div>
              </div>
             
            </div>
            <div className="mt-[180px] ml-8 flex gap-24">
                <p className="text-base leading-[24px]">Total</p>
                <p className="text-[#B88E2F] text-base leading-[24px] font-semibold">Rs. 250,000.00</p>
              </div>
              <div className="h-[1px] w-full bg-[#D9D9D9] mt-8"></div>
              <div className="mt-10 ml-8 space-x-8">
                <Link className="border border-black rounded-3xl px-8 py-2" href="/Cart">View Cart</Link>
                <Link className="border border-black rounded-3xl px-8 py-2" href="/Checkout">Checkout</Link>
              </div>
          </div>
      </header>
    
  );
};

export default Navbar;

