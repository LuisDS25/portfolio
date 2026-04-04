// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob} from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const skills = defineCollection({
    loader: glob({ base: './src/content/skills', pattern: '**/*.md' }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        domain: z.number().max(100).min(0),
        class: z.enum(['Core', 'Backend', 'Integration & Architecture', 'Frontend', 'DevOps & Cloud', 'Testing & Quality', 'Tools', 'Soft Skills', 'Others']),
        image: z.string().optional(),
        // campos como listas de strings
        challenges: z.array(z.string()).optional(),
        actions: z.array(z.string()).optional(),
        impact: z.array(z.string()).optional(),
        projects: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
    schema: z.object({  
        slug: z.string(),
        title: z.string(),
        hook: z.string(),
        description: z.string(),
        context: z.string(),
        role: z.string(),
        challenges: z.array(z.string()),
        decisions: z.array(z.string()),
        actions: z.array(z.string()),
        result: z.string(),
        impact: z.array(z.string()),
        stack: z.array(z.string()),
        learnings: z.array(z.string()),
        image: z.string().optional(),
        gallery: z.array(
            z.object({
                image: z.string(),
                tag: z.string().optional()
            })
        ).optional()
    }),
});

// Export collections
export const collections = {
    skills,
    projects,
};