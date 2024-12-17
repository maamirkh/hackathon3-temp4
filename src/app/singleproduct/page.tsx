<<<<<<< HEAD

import Link from "next/link"; 
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function SingleProduct() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex items-center gap-10 py-4">
        <div className="flex gap-4 items-center">
          <Link href="/" className="text-gray-500 text-base leading-6">
            Home
          </Link>
          <IoIosArrowForward />
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/shop"
            className="text-gray-500 text-base leading-6"
          >
            Shop
          </Link>
          <IoIosArrowForward />
        </div>
        <div className="w-px h-9 bg-gray-500"></div>
        <div className="flex items-center">
          <p className="text-base leading-6">Asgaard sofa</p>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-12">
        <div className="w-full lg:w-1/2 mb-24">
          <img src="/assets/Group 102.png" alt="" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 space-y-8 mt-24 pl-10 pr-32">
          <div className="space-y-4">
            <p className="text-3xl leading-10">Asgaard sofa</p>
            <p className="text-gray-500 text-xl leading-6">Rs. 250,000.00</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="/assets/Group 88.png" alt="" />
            <div className="w-px h-7 bg-gray-500"></div>
            <p className="text-sm leading-5 text-gray-500">5 Customer Review</p>
          </div>
          <div>
            <p className="text-sm leading-5 tracking-wide text-justify">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>
          <img src="/assets/Group 92.png" alt="" />
          <p className="text-sm leading-5 text-gray-500">Color</p>
          <div className="flex gap-4">
            <img src="/assets/Rectangle 42.png" alt="" />
            <img src="/assets/Rectangle 43.png" alt="" />
            <img src="/assets/Rectangle 44.png" alt="" />
          </div>
          <div className="flex gap-3">
            <img src="/assets/Group 93.png" alt="" />
            <img src="/assets/Group 21.png" alt="" />
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="flex gap-8 mt-20">
            <div className="space-y-4">
              <p className="text-base leading-6 text-gray-500">SKU</p>
              <p className="text-base leading-6 text-gray-500">Category</p>
              <p className="text-base leading-6 text-gray-500">Tags</p>
              <p className="text-base leading-6 text-gray-500">Share</p>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-6 text-gray-500">: SS001</p>
              <p className="text-base leading-6 text-gray-500">: Sofas</p>
              <p className="text-base leading-6 text-gray-500">: Sofa, Chair, Home, Shop</p>
              <div className="flex gap-4 text-2xl">
                <FaFacebook />
                <FaLinkedin />
                <AiFillTwitterCircle />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-20"></div>

      <div className="space-y-6 text-center">
        <div className="flex gap-10 justify-center">
          <p className="text-xl leading-6">Description</p>
          <p className="text-xl leading-6 text-gray-500">
            Additional Information
          </p>
          <p className="text-xl leading-6 text-gray-500">Reviews [5]</p>
        </div>
        <div className="max-w-4xl mx-auto text-base leading-6 text-gray-500">
          <p className="text-justify">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p><br/>
          <p className="text-justify">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <img src="/assets/Group 109.png" alt="" className="pt-8 mx-auto" />
        </div>
      </div>

      <div className="text-center py-10">
        <p className="text-2xl leading-8">Related Products</p>
        <div className="flex flex-wrap justify-center gap-10 mt-6">
          <div className="space-y-4">
            <img src="/assets/Mask Group.png" alt="" />
            <p className="text-base leading-6">Trenton modular sofa_3</p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
          <div className="space-y-4">
            <img src="/assets/Mask Group (1).png" alt="" />
            <p className="text-base leading-6">
              Granite dining table with dining chair
            </p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
          <div className="space-y-4">
            <img src="/assets/Mask Group (2).png" alt="" />
            <p className="text-base leading-6">Outdoor bar table and stool</p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
          <div className="space-y-4">
            <img src="/assets/Mask Group (3).png" alt="" />
            <p className="text-base leading-6">Plain console with teak mirror</p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
        </div>
        <button className="text-lg underline hover:text-blue-400 mt-10">
          View More
        </button>
      </div>
    </div>
  );
}


=======

import Link from "next/link"; 
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function SingleProduct() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex items-center gap-10 py-4">
        <div className="flex gap-4 items-center">
          <Link href="/" className="text-gray-500 text-base leading-6">
            Home
          </Link>
          <IoIosArrowForward />
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/shop"
            className="text-gray-500 text-base leading-6"
          >
            Shop
          </Link>
          <IoIosArrowForward />
        </div>
        <div className="w-px h-9 bg-gray-500"></div>
        <div className="flex items-center">
          <p className="text-base leading-6">Asgaard sofa</p>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-12">
        <div className="w-full lg:w-1/2 mb-24">
          <img src="/assets/Group 102.png" alt="" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 space-y-8 mt-24 pl-10 pr-32">
          <div className="space-y-4">
            <p className="text-3xl leading-10">Asgaard sofa</p>
            <p className="text-gray-500 text-xl leading-6">Rs. 250,000.00</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="/assets/Group 88.png" alt="" />
            <div className="w-px h-7 bg-gray-500"></div>
            <p className="text-sm leading-5 text-gray-500">5 Customer Review</p>
          </div>
          <div>
            <p className="text-sm leading-5 tracking-wide text-justify">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>
          <img src="/assets/Group 92.png" alt="" />
          <p className="text-sm leading-5 text-gray-500">Color</p>
          <div className="flex gap-4">
            <img src="/assets/Rectangle 42.png" alt="" />
            <img src="/assets/Rectangle 43.png" alt="" />
            <img src="/assets/Rectangle 44.png" alt="" />
          </div>
          <div className="flex gap-3">
            <img src="/assets/Group 93.png" alt="" />
            <img src="/assets/Group 21.png" alt="" />
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="flex gap-8 mt-20">
            <div className="space-y-4">
              <p className="text-base leading-6 text-gray-500">SKU</p>
              <p className="text-base leading-6 text-gray-500">Category</p>
              <p className="text-base leading-6 text-gray-500">Tags</p>
              <p className="text-base leading-6 text-gray-500">Share</p>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-6 text-gray-500">: SS001</p>
              <p className="text-base leading-6 text-gray-500">: Sofas</p>
              <p className="text-base leading-6 text-gray-500">: Sofa, Chair, Home, Shop</p>
              <div className="flex gap-4 text-2xl">
                <FaFacebook />
                <FaLinkedin />
                <AiFillTwitterCircle />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-20"></div>

      <div className="space-y-6 text-center">
        <div className="flex gap-10 justify-center">
          <p className="text-xl leading-6">Description</p>
          <p className="text-xl leading-6 text-gray-500">
            Additional Information
          </p>
          <p className="text-xl leading-6 text-gray-500">Reviews [5]</p>
        </div>
        <div className="max-w-4xl mx-auto text-base leading-6 text-gray-500">
          <p className="text-justify">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p><br/>
          <p className="text-justify">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <img src="/assets/Group 109.png" alt="" className="pt-8 mx-auto" />
        </div>
      </div>

      <div className="text-center py-10">
        <p className="text-2xl leading-8">Related Products</p>
        <div className="flex flex-wrap justify-center gap-10 mt-6">
          <div className="space-y-4">
            <img src="/assets/Mask Group.png" alt="" />
            <p className="text-base leading-6">Trenton modular sofa_3</p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
          <div className="space-y-4">
            <img src="/assets/Mask Group (1).png" alt="" />
            <p className="text-base leading-6">
              Granite dining table with dining chair
            </p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
          <div className="space-y-4">
            <img src="/assets/Mask Group (2).png" alt="" />
            <p className="text-base leading-6">Outdoor bar table and stool</p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
          <div className="space-y-4">
            <img src="/assets/Mask Group (3).png" alt="" />
            <p className="text-base leading-6">Plain console with teak mirror</p>
            <p className="text-xl leading-6">Rs. 25,000.00</p>
          </div>
        </div>
        <button className="text-lg underline hover:text-blue-400 mt-10">
          View More
        </button>
      </div>
    </div>
  );
}


>>>>>>> e2110c773f4dae8fec017c02724a5a8750eb4920
