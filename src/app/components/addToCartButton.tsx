"use client";

import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../../../types/Product";
import { addToCart } from "../../../actions/actions";
import Swal from "sweetalert2";
import React from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-105 transition-all duration-300 font-semibold group"
    >
      <FiShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
      <span>Add to Cart</span>
    </button>
  );
}