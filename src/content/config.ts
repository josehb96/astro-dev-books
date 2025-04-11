import { defineCollection, z } from 'astro:content';
// z -> zod schema

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string(),
      usa: z.string(),
    })
  })
})


export const collections = { books }