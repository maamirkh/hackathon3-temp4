"use client";

import { Product } from "../../../types/Product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,

} from "../../../actions/actions"
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { FiShoppingBag, FiTrash2, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Shoppic from "../../../public/assets/cart.png";

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Remove Item?",
      text: "This will remove the item from your cart",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Remove",
      backdrop: "rgba(241, 245, 249, 0.8)",
      customClass: {
        confirmButton: "hover:scale-105 transition-transform",
        cancelButton: "hover:scale-105 transition-transform"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire({
          title: "Removed!",
          text: "Item has been removed from your cart",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#fff",
          backdrop: false
        });
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };
  const router = useRouter();

  const handleProceed = () => {
  Swal.fire({
    title: "Ready to Checkout?",
    text: "You'll be redirected to secure payment",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3b82f6",
    cancelButtonColor: "#64748b",
    confirmButtonText: "Continue to Payment",
    reverseButtons: true,
    customClass: {
      confirmButton: "hover:scale-105 transition-transform",
      cancelButton: "hover:scale-105 transition-transform"
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Success!", "Your order has been successfully processed!", "success");

      
      router.push("/Checkout")
        setCartItems([]);
    }
  });
};

  
      

      return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
        <Image src={Shoppic} alt="Cart Image" className="w-full" />
      </div>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <FiShoppingBag className="w-8 h-8" />
              Your Shopping Cart ({cartItems.length})
            </h1>
    
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                
                <p className="mt-6 text-gray-600 text-xl">Your cart feels lonely!</p>
                <Link 
                  href="/" 
                  className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg 
                            hover:bg-blue-700 transition-all duration-300"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items Section */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <div 
                      key={item._id}
                      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow 
                                duration-300 flex flex-col sm:flex-row gap-6"
                    >
                      {/* Product Image */}
                      {item.image && (
                    <div className="relative flex-shrink-0">
                      <Image
                        src={urlFor(item.image).url()}
                        width={120}
                        height={120}
                        alt={item.name}
                        className="rounded-lg object-cover w-24 h-24"
                      />
                    </div>
                  )}
    
                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                        
                        {/* Price Section */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="space-y-1">
                            <p className="text-2xl font-bold text-blue-600">
                              ${item.price}
                            </p>
                            {item.discountPercentage && (
                              <span className="text-sm text-gray-400 line-through">
                                ${(item.price * (1 + item.discountPercentage/100)).toFixed(2)}
                              </span>
                            )}
                          </div>
    
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                            <button 
                              onClick={() => handleQuantityChange(item._id, item.stockLevel -1)}
                              disabled={item.stockLevel <= 1}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <FiChevronDown className="w-5 h-5" />
                            </button>
                            <span className="w-8 text-center">{item.stockLevel}</span>
                            
                            <button 
                              onClick={() => handleQuantityChange(item._id, item.stockLevel +1)}
                              
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <FiChevronUp className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="self-start sm:self-center p-2 hover:bg-red-50 rounded-full 
                                  text-red-600 hover:text-red-700 transition-colors"
                      >
                        <FiTrash2 className="w-6 h-6" />
                      </button>
                    </div>
                  ))}
                </div>
    
                {/* Order Summary Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm h-fit sticky top-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                      <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
    
                    <hr className="my-4" />
    
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
    
                    <button
                      onClick={handleProceed}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white 
                                py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity 
                                mt-6 shadow-lg"
                    >
                      Proceed to Checkout
                    </button>
    
                    <Link 
                      href="/" 
                      className="inline-block w-full text-center text-gray-600 mt-4 
                                hover:text-blue-600 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            )}
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
    

