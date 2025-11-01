import { pb, type Project } from '$lib/pocketbase';
import { getCache, setCache } from '$lib/utils/cache';

export const categories = ['All', 'Web Development', 'SEO', 'Web Application'];

/**
 * Fetch all projects from PocketBase (cached)
 */
export async function getProjects(): Promise<Project[]> {
	const cacheKey = 'allProjects';
	const cached = getCache<Project[]>(cacheKey);
	if (cached) return cached;

	try {
		const records = await pb.collection('projects').getFullList<Project>({
			sort: '-year,-created',
		});
		setCache(cacheKey, records, 600); // cache 10 mins
		return records;
	} catch (error) {
		console.error('Error fetching projects:', error);
		return [];
	}
}

/**
 * Fetch a single project by slug (cached)
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
	const cacheKey = `project_${slug}`;
	const cached = getCache<Project>(cacheKey);
	if (cached) return cached;

	try {
		const record = await pb.collection('projects').getFirstListItem<Project>(
			`slug="${slug}"`
		);
		setCache(cacheKey, record, 600);
		return record;
	} catch (error) {
		console.error('Error fetching project:', error);
		return null;
	}
}

/**
 * Fetch projects filtered by category (cached)
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
	if (category === 'All' || !category) return await getProjects();

	const cacheKey = `projectsCategory_${category}`;
	const cached = getCache<Project[]>(cacheKey);
	if (cached) return cached;

	try {
		const records = await pb.collection('projects').getFullList<Project>({
			filter: `category="${category}"`,
			sort: '-year,-created',
		});
		setCache(cacheKey, records, 600);
		return records;
	} catch (error) {
		console.error('Error fetching projects by category:', error);
		return [];
	}
}

/**
 * Helper: Get full image URL from PocketBase
 */
export function getImageUrl(record: Project, filename: string, thumb?: string): string {
	if (!filename) return '';
	return pb.files.getUrl(record, filename, { thumb });
}

/**
 * Helper: Get gallery image URLs
 */
export function getGalleryUrls(record: Project): string[] {
	if (!record.gallery || record.gallery.length === 0) return [];
	return record.gallery.map((filename) => pb.files.getUrl(record, filename));
}
