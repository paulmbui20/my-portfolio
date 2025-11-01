// src/lib/data/services.ts
import { pb } from '$lib/pocketbase';

export interface Pricing {
	starting: string;
	timeline: string;
}

export interface ProcessStep {
	step: string;
	description: string;
}

export interface Testimonial {
	name: string;
	role: string;
	text: string;
}

export interface Service {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	icon: string;
	features: string[];
	technologies: string[];
	pricing: Pricing;
	process: ProcessStep[];
	benefits: string[];
	testimonials: Testimonial[] | null;
	deliverables: string[];
}

/**
 * Fetch all services from PocketBase
 */
export async function getServices(): Promise<Service[]> {
	try {
		const records = await pb.collection('services').getFullList<Service>({
			sort: 'created',
		});
		return records;
	} catch (error) {
		console.error('Error fetching services:', error);
		return [];
	}
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
	try {
		const record = await pb.collection('services').getFirstListItem<Service>(
			`slug="${slug}"`
		);
		return record;
	} catch (error) {
		console.error('Error fetching service:', error);
		return null;
	}
}

/**
 * Get the full URL for a service icon stored in PocketBase
 */
export function getServiceIconUrl(record: Service, filename: string): string {
	if (!filename) return '';
	return pb.files.getUrl(record, filename);
}

/**
 * Get service categories (titles)
 */
export async function getServiceCategories(): Promise<string[]> {
	const services = await getServices();
	return services.map(s => s.title);
}

// Export for backward compatibility
export const services = getServices;
export const serviceCategories = getServiceCategories;