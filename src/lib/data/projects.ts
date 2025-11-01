// src/lib/data/projects.ts
import { pb, type Project } from '$lib/pocketbase';

export const categories = ['All', 'Web Development', 'SEO', 'Web Application'];

/**
 * Fetch all projects from PocketBase
 */
export async function getProjects(): Promise<Project[]> {
	try {
		const records = await pb.collection('projects').getFullList<Project>({
			sort: '-year,-created',
		});
		return records;
	} catch (error) {
		console.error('Error fetching projects:', error);
		return [];
	}
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
	try {
		const record = await pb.collection('projects').getFirstListItem<Project>(
			`slug="${slug}"`
		);
		return record;
	} catch (error) {
		console.error('Error fetching project:', error);
		return null;
	}
}

/**
 * Fetch projects filtered by category
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
	try {
		if (category === 'All' || !category) {
			return await getProjects();
		}
		
		const records = await pb.collection('projects').getFullList<Project>({
			filter: `category="${category}"`,
			sort: '-year,-created',
		});
		return records;
	} catch (error) {
		console.error('Error fetching projects by category:', error);
		return [];
	}
}

/**
 * Get the full URL for an image stored in PocketBase
 */
export function getImageUrl(record: Project, filename: string, thumb?: string): string {
	if (!filename) return '';
	return pb.files.getUrl(record, filename, { thumb });
}

/**
 * Get the full URL for gallery images
 */
export function getGalleryUrls(record: Project): string[] {
	if (!record.gallery || record.gallery.length === 0) return [];
	return record.gallery.map(filename => pb.files.getUrl(record, filename));
}