// src/lib/pocketbase.ts
import PocketBase from 'pocketbase';

import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

// Disable auto cancellation for SSR compatibility
pb.autoCancellation(false);

export interface Project {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	title: string;
	slug: string;
	shortDescription: string;
	description: string;
	image: string;
	category: string;
	client: string;
	duration: string;
	year: number;
	liveUrl: string;
	githubUrl: string;
	tech: string[];
	features: string[];
	challenges: string[];
	results: string[];
	gallery: string[];
}

export interface ProjectsResponse {
	items: Project[];
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
}