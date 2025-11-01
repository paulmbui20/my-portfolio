import { getProjects } from '$lib/data/projects';
import { services } from '$lib/data/services';
import { PUBLIC_SITE_URL } from '$env/static/public';

export async function GET() {
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/about', priority: '0.8', changefreq: 'monthly' },
		{ url: '/contact', priority: '0.8', changefreq: 'monthly' },
		{ url: '/projects', priority: '0.9', changefreq: 'weekly' },
		{ url: '/services', priority: '0.9', changefreq: 'weekly' }
	];

	const projectRecords = await getProjects();
	const projectPages = projectRecords.map((project) => ({
		url: `/projects/${project.slug}`,
		priority: '0.7',
		changefreq: 'monthly'
	}));

	const servicePages = services.map((service) => ({
		url: `/services/${service.slug}`,
		priority: '0.8',
		changefreq: 'monthly'
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
