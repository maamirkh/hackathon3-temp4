import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import AddToCartButton from "@/app/components/addToCartButton";
import { Product } from "../../../../types/Product";
import Swal from "sweetalert2";
import { addToCart } from "../../../../actions/actions";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Productpage({ params }: Props) {
  const { slug } = params;

  // Fetch product data from Sanity
  const data = await client.fetch(`
    *[_type == "product" && slug.current == "${slug}"] {
      _id,
      name,
      description,
      price,
      stockLevel,
      isFeaturedProduct,
      discountPercentage,
      "slug": slug.current,
      "image": image,
      category
    }
  `)

  const product = data[0];

  const handleAddToCart =(e: React.MouseEvent, product: Product) => {
      e.preventDefault()
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.name} added to cart`,
        showConfirmButton: false,
        timer: 1000
  
      })
      addToCart(product)
    }

  if (!product) {
    return <div className="text-red-600 py-10">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden group shadow-md">
          {product.image?.asset ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-500"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Image
            </div>
          )}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            {product.discountPercentage !== 0 && (
              <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full shadow">
                -{product.discountPercentage}%
              </span>
            )}
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
              <FiHeart className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
              Category: {product.category}
            </span>
          </div>

          <div className="text-2xl font-bold text-indigo-600 flex items-center gap-3">
            <span>${product.price}</span>
            {product.discountPercentage !== 0 && (
              <span className="text-gray-400 line-through text-lg font-medium">
                ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>

          <div className="text-sm font-medium">
            {product.stockLevel === 0 ? (
              <span className="text-red-600">Out of Stock</span>
            ) : (
              <span className="text-green-600">In Stock</span>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Description:</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description || "No description available."}
            </p>
          </div>

          <div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "product"]{ "slug": slug.current }`;
  const products = await client.fetch(query);
  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}

export const revalidate = 60;