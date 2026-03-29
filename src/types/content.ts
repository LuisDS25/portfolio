import type { CollectionEntry } from "astro:content";

export type Project = CollectionEntry<'projects'>;
export type Skill = CollectionEntry<'skills'>;

// 🔹 Versión resumida (sin listas)
export type SkillSummary = Omit<Skill, 'data'> & {
    data: Omit<Skill['data'], 'tools' | 'projects'>;
}


export type SkillClass = Skill['data']['class'];

// 🔹 Props para componente
export interface SkillItemProps {
    skill: Skill;
}

export interface StoryContentProps {
    project: Project;
}

