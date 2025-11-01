// src/routes/projects/[slug]/+page.ts
import type { Load } from '@sveltejs/kit';
import { getProjectBySlug, getProjects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
    const project = await getProjectBySlug(params.slug as string);
    
    if (!project) {
        throw error(404, 'Project not found');
    }

    const allProjects = await getProjects();
    const relatedProjects = allProjects
        .filter((p) => p.category === project.category && p.id !== project.id)
        .slice(0, 3);
    
    return {
        project,
        relatedProjects
    };
};