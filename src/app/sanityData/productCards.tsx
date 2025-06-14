import Image from "next/image";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { Product } from "../../../types/Product";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import AddToCartButton from "../components/AddToCartBt/page";

export default function ProductCards({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-400 transition-all duration-300 overflow-hidden h-full"
    >
      {/* Image with Badges */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        {product.image?.asset ? (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <FiShoppingCart className="w-12 h-12" />
          </div>
        )}

        {/* Top-right Badges */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          {product.discountPercentage !== 0 && (
            <span className="bg-red-500 text-white px-3 py-1 text-xs sm:text-sm rounded-full shadow">
              -{product.discountPercentage}%
            </span>
          )}
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors shadow">
            <FiHeart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="space-y-3">
          {/* Name + Featured */}
          <div className="flex justify-between items-start">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
              {product.name}
            </h3>
            {product.isFeaturedProduct && (
              <div
                title="Featured Product"
                className="flex items-center gap-1 text-sm text-gray-600"
              >
                <FiStar className="w-4 h-4 text-yellow-400" />
              </div>
            )}
          </div>

          {/* Price + Discount */}
          <div>
            <span className="text-lg font-bold text-indigo-600">
              ${product.price}
            </span>
            {product.discountPercentage !== 0 && (
              <span className="block text-sm text-gray-500 line-through">
                ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Info */}
          <div className="text-sm font-medium">
            {product.stockLevel === 0 ? (
              <span className="text-red-600">Out of Stock</span>
            ) : (
              <span className="text-green-600">In Stock</span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6">
          <AddToCartButton product={product} />
        </div>
      </div>
    </Link>
  );
}




