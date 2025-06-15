import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import axios from "axios";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// ✅ Load .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// ✅ Check Required ENV Variables
const REQUIRED_ENV_VARS = [
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "NEXT_PUBLIC_SANITY_DATASET",
  "NEXT_PUBLIC_SANITY_API_TOKEN",
];

REQUIRED_ENV_VARS.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`🚨 Missing ${varName} in .env.local!`);
    process.exit(1);
  }
});

// ✅ Initialize Sanity Client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: "2025-01-15",
  useCdn: false,
});

// ✅ Function to Upload Images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`📸 Uploading Image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`✅ Image Uploaded: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`❌ Failed to Upload Image: ${imageUrl}`, error.message);
    return null;
  }
}

// ✅ Function to Import Products
async function importData() {
  try {
    console.log("🚀 Fetching Product Data From API...");

    const response = await axios.get("https://next-ecommerce-template-4.vercel.app/api/product");
    const products = response.data.products;

    for (const item of products) {
      console.log(`🔄 Processing: ${item.name}`);

      let imageRef = null;
      if (item.imagePath) {
        imageRef = await uploadImageToSanity(item.imagePath);
      }

      const sanityItem = {
        _type: "product",
        name: item.name,
        category: item.category || null,
        price: item.price,
        description: item.description || "",
        discountPercentage: item.discountPercentage || 0,
        stockLevel: item.stockLevel || 0,
        isFeaturedProduct: item.isFeaturedProduct,
        image: imageRef
          ? {
              _type: "image",
              asset: { _type: "reference", _ref: imageRef },
            }
          : undefined,
      };

      console.log(`📤 Uploading to Sanity: ${sanityItem.name}`);
      const result = await client.create(sanityItem);
      console.log(`✅ Uploaded Successfully: ${result._id}`);
    }

    console.log("🎉 Data Import Completed Successfully!");
  } catch (error) {
    console.error("❌ Error Importing Data:", error.message);
  }
}

// ✅ Run Import Function
importData();


