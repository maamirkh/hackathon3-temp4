import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { Product } from "../../../../types/Product";
import AddToCartButton from "@/app/components/AddToCartBt/page";
import { FiHeart } from "react-icons/fi";

interface Props {
  params: { slug: string };
}

export default async function Productpage({ params }: Props) {
  const { slug } = params;

  const query = `
    *[_type == "product" && slug.current == $slug][0] {
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
  `;
  const product: Product = await client.fetch(query, { slug });

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center text-red-600 text-xl font-semibold">
        Product not found
      </div>
    );
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
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>

          {/* Category */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
              Category: {product.category}
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-indigo-600 flex items-center gap-3">
            <span>${product.price}</span>
            {product.discountPercentage !== 0 && (
              <span className="text-gray-400 line-through text-lg font-medium">
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

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Description:</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description || "No description available."}
            </p>
          </div>

          {/* Add to Cart */}
          <div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}




// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import React from "react";
// import { addToCart } from "../../../../actions/actions";
// import Swal from "sweetalert2";
// import { Product } from "../../../../types/Product";
// import AddToCartButton from "@/app/components/AddToCartBt/page";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// export default async function Productpage({ params }: Props) {
//   const { slug } = params;

//   // Fetch product data from Sanity
//   const query = `
//   *[_type == "product" && slug.current == $slug][0] {
//       _id,
//       name,
//       description,
//       price,
//       stockLevel,
//       isFeaturedProduct,
//       discountPercentage,
//       "slug": slug.current,
//       "image": image,
//       category,
//       rating,
//       tags
//     }
//   `;

//   const product = await client.fetch(query, { slug })

//   // Debugging: Check if product data is fetched correctly
//   console.log("Product Data:", product);

//   const handleAddToCart =(e: React.MouseEvent, product: Product) => {
//       e.preventDefault()
//       Swal.fire({
//         position: "top-right",
//         icon: "success",
//         title: `${product.name} added to cart`,
//         showConfirmButton: false,
//         timer: 1000
  
//       })
//       addToCart(product)
//     }

//   // Handle missing product
//   if (!product) {
//     return (
//       <div className="max-w-4xl mx-auto p-4">
//         <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-4 md:p-8">
//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Main Image */}
//         <div className="w-full md:w-1/2 lg:w-2/5">
//           {product.image?.asset ? (
//             <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
//               <p className="text-gray-500">No image available</p>
//             </div>
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="w-full md:w-1/2 lg:w-3/5">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             {product.name}
//           </h1>
//           <p className="text-2xl text-gray-800 font-semibold mb-4">
//             ${product.price}
//           </p>
          
//           <p className="text-md text-gray-600 mb-6">
//             <span className="font-medium">Description:</span>{" "}
//             {product.description}
//           </p>

//           {/* Add to Cart Button */}
//           <AddToCartButton product={product} />
//         </div>
//       </div>
//     </div>
//   );
// }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="max-w-md text-center p-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
//           <a 
//             href="/" 
//             className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
//           >
//             <BiArrowBack className="mr-2" />
//             Return to Shop
//           </a>
//         </div>
//       </div>
//     );
//   }

//   const discountPrice = product.price * (1 - (product.discountPercentage || 0) / 100);
//   const mainImage = product.image;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="w-full h-auto">
//               <Image src={Shoppic} alt=""/>
//               </div>
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <nav className="mb-8">
//           <a 
//             href="/" 
//             className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             <BiArrowBack className="mr-2" />
//             Continue Shopping
//           </a>
//         </nav>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Image Gallery */}
//           <div className="space-y-6">
//             <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group">
//               {mainImage && (
//                 <Image
//                   src={urlFor(mainImage).url()}
//                   alt={product.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   priority
//                 />
//               )}
//               {product.discountPercentage && (
//                 <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//                   {product.discountPercentage}% OFF
//                 </span>
//               )}
//             </div>

//             {product.images?.length > 1 && (
//               <div className="grid grid-cols-4 gap-4">
//                 {product.images.map((image: any, index: number) => (
//                   <div 
//                     key={index}
//                     className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer border-2 hover:border-blue-500 transition-all"
//                   >
//                     <Image
//                       src={urlFor(image).url()}
//                       alt={`${product.name} - ${index + 1}`}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="flex items-center text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <FiStar
//                       key={i}
//                       className={`w-5 h-5 ${i < (product.rating || 0) ? 'fill-current' : 'text-gray-300'}`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-gray-500">(128 reviews)</span>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-white p-6 rounded-xl shadow-sm">
//                 <div className="flex items-baseline space-x-4">
//                   <span className="text-4xl font-bold text-gray-900">
//                     ${discountPrice}
//                   </span>
//                   {product.discountPercentage && (
//                     <span className="text-xl text-gray-400 line-through">
//                       ${product.price}
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-4 flex items-center space-x-4">
//                   <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                     product.stockLevel > 0 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-red-100 text-red-800'
//                   }`}>
//                     {product.stockLevel > 0 ? 'In Stock' : 'Out of Stock'}
//                   </span>
//                   <span className="text-sm text-gray-500">
//                     {product.stockLevel} units available
//                   </span>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm">
//                 <p className="text-gray-700 leading-relaxed">{product.description}</p>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
//                 <AddToCartButton
//                   product={product}                  
//                 />

//                 <div className="grid grid-cols-2 gap-4">
//                   <button className="flex items-center justify-center space-x-2 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
//                     <FiShoppingBag className="w-5 h-5" />
//                     <span>Buy Now</span>
//                   </button>
//                   <button className="flex items-center justify-center space-x-2 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
//                     <FiRefreshCw className="w-5 h-5" />
//                     <span>Compare</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm">
//                 <dl className="grid grid-cols-2 gap-4 text-sm">
//                   <div className="flex items-center space-x-2">
//                     <FiTruck className="text-gray-400 w-5 h-5" />
//                     <div>
//                       <dt className="text-gray-500">Delivery</dt>
//                       <dd className="font-medium">2-4 Business Days</dd>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <FiRefreshCw className="text-gray-400 w-5 h-5" />
//                     <div>
//                       <dt className="text-gray-500">Returns</dt>
//                       <dd className="font-medium">30 Day Policy</dd>
//                     </div>
//                   </div>
//                 </dl>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm">
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-500">Category</span>
//                     <span className="font-medium">{product.category}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-500">SKU</span>
//                     <span className="font-medium">{product._id.slice(-8).toUpperCase()}</span>
//                   </div>
//                   {product.tags && (
//                     <div className="flex justify-between">
//                       <span className="text-gray-500">Tags</span>
//                       <div className="flex space-x-2">
//                         {product.tags.map((tag: string) => (
//                           <span key={tag} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Features Section */}
//       <div className="flex flex-wrap gap-6 my-20 py-20 justify-around bg-[#FAF4F4]">
//                 {[
//                     {
//                         title: "Free Delivery",
//                         description: "For all orders over $50, consectetur adipiscing elit."
//                     },
//                     {
//                         title: "90 Days Return",
//                         description: "If goods have problems, consectetur adipiscing elit."
//                     },
//                     {
//                         title: "Secure Payment",
//                         description: "100% secure payment, consectetur adipiscing elit."
//                     }
//                 ].map((feature, index) => (
//                     <div key={index} className="w-full max-w-[376px]">
//                         <p className="text-[24px] sm:text-[32px] leading-[36px] sm:leading-[48px]">{feature.title}</p>
//                         <p className="text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px]">{feature.description}</p>
//                     </div>
//                 ))}
//             </div>
//     </div>
//   );
// }