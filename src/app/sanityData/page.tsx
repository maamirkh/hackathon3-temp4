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



