import { createClient } from 'next-sanity'



export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-06-15',
  token: process.env.SANITY_API_TOKEN ,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
