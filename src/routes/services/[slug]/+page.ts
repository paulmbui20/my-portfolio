// src/routes/services/[slug]/+page.ts
import { getServiceBySlug, getServices } from '$lib/data/services';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const service = await getServiceBySlug(params.slug);
	
	if (!service) {
		throw error(404, 'Service not found');
	}

	// Get all services for related services
	const allServices = await getServices();
	
	// Get related services (exclude current)
	const relatedServices = allServices
		.filter((s) => s.id !== service.id)
		.slice(0, 3);
	
	return {
		service,
		relatedServices
	};
};