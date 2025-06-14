// 'use client'

// import Shoppic from "../../../public/assets/checout.png";
// import React, { useEffect, useState } from 'react'
// import { Product } from "../../../types/Product";
// import { clearCart, getCartItems } from '../../../actions/actions';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import {CgChevronRight} from 'react-icons/cg';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import Swal from 'sweetalert2';

// const Checkout = () => {

//     const [cartItems, setCartItems] = useState<Product[]>([]);
//     const [discount, setDiscount] = useState<number>(0);
//     const [formValues, setFormValues] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         address: "",
//         zipCode: "",
//         city: "",

//     })
//     const [formErrors, setFormErrors] = useState({
//         firstName: false,
//         lastName: false,
//         email: false,
//         phone: false,
//         address: false,
//         zipCode: false,
//         city: false,
//     });
//     useEffect (() => {
//         setCartItems(getCartItems())
//         const appliedDiscount = localStorage.getItem("appliedDiscount")
//         if (appliedDiscount) {
//             setDiscount(Number(appliedDiscount))
//         }
//     },[])

//     const subtotal = cartItems.reduce(
//         (total, item) => total + item.price * item.stockLevel,
//         0
//       );
//       const total = Math.max(subtotal - discount, 0);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormValues({
//             ...formValues,
//             [e.target.id]: e.target.value
//         })
//     }
//     const validateForm = () => {
//         const errors = {
//             firstName : !formValues.firstName,
//             lastName : !formValues.lastName,
//             email : !formValues.email,
//             phone : !formValues.phone,
//             address : !formValues.address,
//             zipCode : !formValues.zipCode,
//             city : !formValues.city

//         };
//         setFormErrors(errors);
//         return Object.values(errors).every((error) => !error);
//     }
//     const handlePlaceOrder = async () => {

//       Swal.fire({
//         title: 'Processing your order...',
//         text: 'Please wait a moment.',
//         icon: 'info',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Proceed',
//         }).then(async (result) => {
//           if (result.isConfirmed) {
//             if (validateForm()){
//               // localStorage.removeItem("appliedDiscount");
//               // Swal.fire(
//               //   "Success",
//               //   "Your order has been placed successfully.",
//               //   "success"

//               // );

//             } else {
//               Swal.fire(
//                 "Error",
//                 "Please fill in all the required fields.",
//                 "error"
//               )

//             }
//           }
//       })
//         const orderData = {
//             _type : 'order',
//             firstName : formValues.firstName,
//             lastName : formValues.lastName,
//             address: formValues.address,
//             city : formValues.city,
//             zipCode : formValues.zipCode,
//             phone : formValues.phone,
//             email : formValues.email,
//             cartItems : cartItems.map(item => ({
//                 _type : 'reference',
//                 _ref : item._id
//             })),
//             total : total,
//             discount : discount,
//             orderDate : new Date().toISOString()
//         };

//         try {
//             await client.create(orderData)
//             localStorage.removeItem("appliedDiscount");
//             clearCart();          // ✅ LocalStorage se cart clear
//           setCartItems([]);

//           localStorage.removeItem("appliedDiscount");
//               Swal.fire(
//                 "Success",
//                 "Your order has been placed successfully.",
//                 "success"
//               )
//         } catch (error) {
//             console.error("error creating order", error)
//         }
//         // if (validateForm()) {
//         //     localStorage.removeItem("applliedDiscount")
//         // }
//     }
//       return (
//         <div className={`min-h-screen bg-gray-50`}>
//         {/* Breadcrumb */}
//         <div className="mt-6">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <nav className="flex items-center gap-2 py-4">
//               <Link
//                 href="/cart"
//                 className="text-[#666666] hover:text-black transition text-sm"
//               >
//                 Cart
//               </Link>
//               <CgChevronRight className="w-4 h-4 text-[#666666]" />
//               <span className="text-sm">Checkout</span>
//             </nav>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Order Summary */}
//             <div className="bg-white border rounded-lg p-6 space-y-4">
//               <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//               {cartItems.length > 0 ? (
//                 cartItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="flex items-center gap-4 py-3 border-b"
//                   >
//                     <div className="w-16 h-16 rounded overflow-hidden">
//                       {item.image && (
//                         <Image
//                           src={urlFor(item.image).url()}
//                           alt={item.name}
//                           width={64}
//                           height={64}
//                           className="object-cover w-full h-full"
//                         />
//                       )}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-sm font-medium">{item.name}</h3>
//                       <p className="text-xs text-gray-500">
//                         Quantity: {item.stockLevel}
//                       </p>
//                     </div>
//                     <p className="text-sm font-medium">
//                       ${item.price * item.stockLevel}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-500">Your cart is empty.</p>
//               )}
//               <div className="text-right pt-4">
//                 <p className="text-sm">
//                   Subtotal: <span className="font-medium">${subtotal}</span>
//                 </p>
//                 <p className="text-sm">
//                   Discount: <span className="font-medium">-${discount}</span>
//                 </p>
//                 <p className="text-lg font-semibold">
//                   Total: ${total.toFixed(2)}
//                 </p>
//               </div>
//             </div>

//             {/* Billing Form */}
//             <div className="bg-white border rounded-lg p-6 space-y-6">
//               <h2 className="text-xl font-semibold">Billing Information</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="firstName">First Name</label>
//                   <input
//                     id="firstName"
//                     placeholder="Enter your first name"
//                     value={formValues.firstName}
//                     onChange={handleInputChange}
//                     className="border"
//                   />
//                   {formErrors.firstName && (
//                     <p className="text-sm text-red-500">
//                       First name is required.
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label htmlFor="lastName">Last Name </label>
//                   <input
//                     id="lastName"
//                     placeholder="Enter your last name"
//                     value={formValues.lastName}
//                     onChange={handleInputChange}
//                   />
//                   {formErrors.lastName && (
//                     <p className="text-sm text-red-500">
//                       Last name is required.
//                     </p>
//                   )}
//                 </div>
//               </div>
//               <div className='flex flex-col gap-4 items-start'>
//               <div>
//                 <label htmlFor="address">Address </label>
//                 <input
//                   id="address"
//                   placeholder="Enter your address"
//                   value={formValues.address}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.address && (
//                   <p className="text-sm text-red-500">Address is required.</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="city">City </label>
//                 <input
//                   id="city"
//                   placeholder="Enter your city"
//                   value={formValues.city}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.city && (
//                   <p className="text-sm text-red-500">City is required.</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="zipCode">Zip Code </label>
//                 <input
//                   id="zipCode"
//                   placeholder="Enter your zip code"
//                   value={formValues.zipCode}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.zipCode && (
//                   <p className="text-sm text-red-500">Zip Code is required.</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="phone">Phone </label>
//                 <input
//                   id="phone"
//                   placeholder="Enter your phone number"
//                   value={formValues.phone}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.phone && (
//                   <p className="text-sm text-red-500">Phone is required.</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="email">Email </label>
//                 <input
//                   id="email"
//                   placeholder="Enter your email address"
//                   value={formValues.email}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.email && (
//                   <p className="text-sm text-red-500">Email is required.</p>
//                 )}
//               </div>
//               </div>
//               <button
//                 className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//                 onClick={handlePlaceOrder}
//               >
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// export default Checkout

"use client";

import Shoppic from "../../../public/assets/checout.png";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/Product";
import { clearCart, getCartItems } from "../../../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.id]: false });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire("Error", "Please fill in all required fields", "error");
      return;
    }

    Swal.fire({
      title: "Processing Order",
      text: "Please wait while we process your order",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    try {
      const orderData = {
        _type: "order",
        ...formValues,
        cartItems: cartItems.map((item) => ({
          _type: "reference",
          _ref: item._id,
        })),
        total: total,
        discount: discount,
        orderDate: new Date().toISOString(),
      };

      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
      clearCart();
      setCartItems([]);

      Swal.fire({
        title: "Order Placed!",
        text: "Your order has been placed successfully",
        icon: "success",
        confirmButtonColor: "#2563eb",
        confirmButtonText: "Continue Shopping",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      console.error("Order creation error:", error);
      Swal.fire("Error", "There was an error processing your order", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <Image src={Shoppic} alt="Cart Image" className="w-full" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <CgChevronRight className="w-4 h-4" />
          <span className="text-gray-600">Checkout</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Shipping Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    formErrors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    First name is required
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    formErrors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    Last name is required
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Valid email is required
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Street Address *
                </label>
                <input
                  id="address"
                  type="text"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    formErrors.address ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  onChange={handleInputChange}
                />
                {formErrors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    Address is required
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City *
                </label>
                <input
                  id="city"
                  type="text"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    formErrors.city ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  onChange={handleInputChange}
                />
                {formErrors.city && (
                  <p className="text-red-500 text-sm mt-1">City is required</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ZIP Code *
                </label>
                <input
                  id="zipCode"
                  type="text"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    formErrors.zipCode ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  onChange={handleInputChange}
                />
                {formErrors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">
                    ZIP code is required
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Phone number is required
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-sm h-fit sticky top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.stockLevel} × ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="text-green-600">-${discount}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">
                  ${total}
                </span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Place Order
            </button>
          </div>
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
};

export default Checkout;
