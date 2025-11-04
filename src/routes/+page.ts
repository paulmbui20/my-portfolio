// src/routes/+page.ts
import { getFaqs } from '$lib/data/faqs';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const faqs = await getFaqs();
	return {
		faqs
	};
};