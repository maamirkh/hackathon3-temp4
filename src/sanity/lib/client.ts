import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId: "x6s66g5y",
  dataset: "production",
  apiVersion: "2025-01-01",
  token: token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
