// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob} from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const skills = defineCollection({
    loader: glob({ base: './src/content/skills', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        domain: z.number().max(100).min(0),
        class: z.enum(['Core', 'Backend', 'Integración & Arquitectura', 'Frontend', 'DevOps & Cloud', 'Testing & Calidad', 'Herramientas', 'Soft Skills', 'Otros']),
        image: z.string().optional(),
        // campos como listas de strings
        challenges: z.array(z.string()).optional(),
        actions: z.array(z.string()).optional(),
        impact: z.array(z.string()).optional(),
        projects: z.array(z.string()).optional(),
    }),
});

//Register collections
export const collections = {
    skills,
};