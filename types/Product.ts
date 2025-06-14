export interface Product {
    images: any;
    quantity: number;
    imageUrl: any;
    slug: any;
    _id: string;
    _type: "product";
    name: string;
    description: string;
    price: number;
    stockLevel: number;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    category: string;
    image: { asset: { _ref: string } };
  }