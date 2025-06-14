// 'use client'
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// const sanityClient = createClient({
//   projectId: "x6s66g5y",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: false,
// });

// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source: any) {
//   return builder.image(source);
// }

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   stockLevel: number;
//   image: { asset: { _ref: string } };
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const query = `
//           *[_type == "product"] {
//             _id,
//             name,
//             description,
//             price,
//             discountPercentage,
//             stockLevel,
//             "image": image
//           }
//         `;
//         const data = await sanityClient.fetch(query);
//         console.log("Fetched Products:", data); // Debugging
//         setProducts(data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div className="mx-2 grid grid-cols-4 gap-6 mt-10">
//       {products.map((product) => (
//         <div key={product._id} className="product-card">
//           <h2>{product.name}</h2>
//           {product.image && product.image.asset ? (
//             <img
//               src={urlFor(product.image).width(300).url()}
//               alt={product.name}
//               style={{ width: "200px", height: "200px" }}
//             />
//           ) : (
//             <p>No image available</p>
//           )}
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <button className="border rounded px-2 text-center bg-blue-400">Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCards;
import { client } from "@/sanity/lib/client";
import ProductCards from "./productCards";
import { Product } from "../../../types/Product";

export const revalidate = 60; // Optional: Revalidate every 60 seconds (ISR)

export default async function ProductsPage() {
  const query = `*[_type == "product"] {
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
}`;

  const products: Product[] = await client.fetch(query);
  console.log("Fetched products from Sanity:", products);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCards key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <Link
//             href={`/product/${product.slug}`}
//             key={product._id}
//             className="group relative block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
//           >
//             {/* Product Badges */}
//             <div className="absolute top-3 right-3 z-10 flex gap-2">
//               {product.discoutPercentage && (
//                 <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full">
//                   -{product.discoutPercentage}%
//                 </span>
//               )}
//               <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors">
//                 <FiHeart className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>

//             {/* Product Image */}
//             <div className="relative aspect-square bg-gray-100">
//               {product.image?.asset ? (
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.name}
//                   fill
//                   className="object-cover w-full h-full transition-transform group-hover:scale-105"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-full text-gray-400">
//                   <FiShoppingCart className="w-12 h-12" />
//                 </div>
//               )}
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {product.name}
//                 </h3>
                
                
//               </div>
              
//               <div className="mt-4 flex items-center justify-between">
//                 <div className="space-y-1">
//                   <span className="text-xl font-bold text-gray-900">
//                     ${product.price}
//                   </span>
//                   {product.discoutPercentage && (
//                     <span className="block text-sm text-gray-500 line-through">
//                       ${(product.price * (1 + product.discoutPercentage/100)).toFixed(2)}
//                     </span>
//                   )}
//                 </div>

//                 <button
//                   onClick={(e) => handleAddToCart(e, product)}
//                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all"
//                 >
//                   <FiShoppingCart className="w-5 h-5" />
//                   <span className="text-sm font-medium">Add</span>
//                 </button>
//               </div>

              
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;


