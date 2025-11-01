import { pb } from '$lib/pocketbase';
import { getCache, setCache } from '$lib/utils/cache';

export interface Review {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	name: string;
	role: string;
	organization: string;
	message: string;
}

export async function getFeaturedReviews(limit: number = 6): Promise<Review[]> {
	const cacheKey = `featuredReviews_${limit}`;
	const cached = getCache<Review[]>(cacheKey);
	if (cached) return cached;

	try {
		const records = await pb.collection('reviews').getList<Review>(1, limit, {
			sort: '-created',
		});
		setCache(cacheKey, records.items, 300); // cache for 5 minutes
		return records.items;
	} catch (error) {
		console.error('Error fetching featured reviews:', error);
		return [];
	}
}
