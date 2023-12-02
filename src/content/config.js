import { defineCollection, z } from 'astro:content'

const projectCollection = defineCollection({
    schema: z.object({
        id: z.string(),
        title: z.string(),
        location: z.string(),
        year: z.string(),
        tech: z.string(),
        url: z.string(),
        description: z.string(),
        platform: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        show_title: z.boolean(),
        secondary_link: z.object({
            href: z.string(),
            text: z.string()
        })
    })
})

export const collections = {
    'project': projectCollection
}