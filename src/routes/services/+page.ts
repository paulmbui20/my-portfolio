// src/routes/services/+page.ts
import { getServices } from '$lib/data/services';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const services = await getServices();
	return {
		services
	};
};