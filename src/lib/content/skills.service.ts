import type { Skill, SkillClass } from '@/types/content';
import { getAllSkills, getSkillBySlug } from "@/lib/content/skills.repository";
import { groupBy } from '@/lib/utils/groupBy';

//Obtener lista de de skills resumida a partir de lista de skills
export async function getSkillSummaries(): Promise<Skill[]> {
    return await getAllSkills();
}

// 🔹 Obtener skills por lista de slugs
export function getSkillsBySlugs(
    skills: Skill[],
    slugs: string[]
): Skill[] {
    const slugSet = new Set(slugs); // 🔥 O(1) lookup

    return skills.filter(skill => slugSet.has(skill.data.slug));
}

// 🔝 Top N skills por domain (en version SkillSummary)
export function getTopSkills(skills: Skill[], limit = 5): Skill[] {
    return [...skills]
        .sort((a, b) => b.data.domain - a.data.domain)
        .slice(0, limit)
}

// 🔻 Bottom N skills por domain
export function getBottomSkills(
    skills: Skill[],
    limit = 5
): Skill[] {
    return [...skills] // 🔥 evitar mutación
        .sort((a, b) => a.data.domain - b.data.domain)
        .slice(0, limit);
}

// 📦 Group by class (en version SkillSummary)
export function groupSkillsByClass(skills: Skill[]): Record<SkillClass, Skill[]> {
    return groupBy(skills, (s) => s.data.class);
}


//Obtener Skill a detalle por slug
export async function getSkillById(slug: string): Promise<Skill | undefined> {
    return getSkillBySlug(slug);
}

// 🧼 Mapper: Detail → Summary
