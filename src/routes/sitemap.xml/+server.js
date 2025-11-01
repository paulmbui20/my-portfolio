// src/routes/sitemap.xml/+server.ts
import { getProjects } from '$lib/data/projects';
import { getServices } from '$lib/data/services';
import { PUBLIC_SITE_URL } from '$env/static/public';

export async function GET() {
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly', lastmod: undefined },
		{ url: '/about', priority: '0.8', changefreq: 'monthly', lastmod: undefined },
		{ url: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: undefined },
		{ url: '/projects', priority: '0.9', changefreq: 'weekly', lastmod: undefined },
		{ url: '/services', priority: '0.9', changefreq: 'weekly', lastmod: undefined },
		{ url: '/reviews', priority: '0.7', changefreq: 'monthly', lastmod: undefined }
	];

	// Fetch projects from PocketBase
	const projectRecords = await getProjects();
	const projectPages = projectRecords.map((project) => ({
		url: `/projects/${project.slug}`,
		priority: '0.7',
		changefreq: 'monthly',
		lastmod: project.updated
	}));

	// Fetch services from PocketBase
	const serviceRecords = await getServices();
	const servicePages = serviceRecords.map((service) => ({
		url: `/services/${service.slug}`,
		priority: '0.8',
		changefreq: 'monthly',
		lastmod: service.updated
	}));

	const allPages = [...pages, ...projectPages, ...servicePages];
	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `
  <url>
    <loc>${PUBLIC_SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod ? new Date(page.lastmod).toISOString().split('T')[0] : today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}