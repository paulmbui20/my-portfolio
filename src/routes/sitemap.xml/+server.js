import { projects } from '$lib/data/projects';
import { services } from '$lib/data/services';
const site = 'https://paulmbui.co.ke';

export async function GET() {
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/about', priority: '0.8', changefreq: 'monthly' },
		{ url: '/contact', priority: '0.8', changefreq: 'monthly' },
		{ url: '/projects', priority: '0.9', changefreq: 'weekly' },
		{ url: '/services', priority: '0.9', changefreq: 'weekly' }
	];

	// Add all project pages
	const projectPages = projects.map((project) => ({
		url: `/projects/${project.slug}`,
		priority: '0.7',
		changefreq: 'monthly'
	}));

	// Add all service pages
	const servicePages = services.map((service) => ({
		url: `/services/${service.slug}`,
		priority: '0.8',
		changefreq: 'monthly'
	}));

	// Combine all pages
	const allPages = [...pages, ...projectPages, ...servicePages];

	// Get current date in YYYY-MM-DD format
	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `
  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
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
