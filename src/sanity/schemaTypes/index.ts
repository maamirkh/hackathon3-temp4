import { productSchema } from './product'
import { order } from './order'

import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, order],
}
