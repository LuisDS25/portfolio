import { getCollection, getEntry } from 'astro:content';
import type { Skill, SkillSummary } from '@/types/content';

//todas las skills
export async function getAllSkills(): Promise<Skill[]> {
    const skills = await getCollection('skills');

    console.log('Skills encontradas:', skills.length);

    skills.forEach(s => console.log(s.data.title));

    return skills;
}

//Todas las skills version resumida (SkillSummary)
export async function getAllSkillsSummaries(): Promise<SkillSummary[]> {
    const skills = await getCollection('skills');

    return skills.map(toSkillSummary);
}


//skill por slug
export async function getSkillBySlug(slug: string): Promise<Skill | undefined> {
    const skills = await getCollection('skills');
    return await getEntry('skills', slug);
}

// 🔹 Mapper interno (privado del repository)
function toSkillSummary(skill: Skill): SkillSummary {
    const {
        challenges,
        actions,
        impact,
        projects,
        ...restData
    } = skill.data;

    return {
        ...skill,
        data: restData,
    };
}