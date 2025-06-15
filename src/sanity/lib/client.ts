// lib/sanity.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string, // 🛑 Replace with your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: '2024-06-01',
  useCdn: false,
}

export const sanityClient = createClient(config)
export const urlFor = (source: any) => imageUrlBuilder(config).image(source)

