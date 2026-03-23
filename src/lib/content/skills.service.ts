import type { Skill, SkillClass } from '@/types/content';
import { getAllSkills, getSkillBySlug } from "@/lib/content/skills.repository";
import { groupBy } from '@/lib/utils/groupBy';

//Obtener lista de de skills resumida a partir de lista de skills
export async function getSkillSummaries(): Promise<Skill[]> {
    return await getAllSkills();
}

// 🔝 Top N skills por domain (en version SkillSummary)
export function getTopSkills(skills: Skill[], limit = 5): Skill[] {
    return [...skills]
        .sort((a, b) => b.data.domain - a.data.domain)
        .slice(0, limit)
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
