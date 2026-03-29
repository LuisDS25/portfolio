import { getCollection, getEntry } from 'astro:content';
import type { Project } from '@/types/content';

//todos los proyectos
export async function getAllProjects(): Promise<Project[]> {
    const projects = await getCollection('projects');
    return projects;
}