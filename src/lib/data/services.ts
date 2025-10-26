export const services = [
	{
		slug: 'web-development',
		title: 'Web Development',
		shortDescription: 'Custom websites and web applications built with modern technologies',
		description:
			'I create responsive, high-performance websites and web applications tailored to your business needs. Using cutting-edge technologies like SvelteKit, React, and Node.js, I build scalable solutions that grow with your business.',
		icon: '💻',
		gradient: 'from-blue-500 to-cyan-500',
		features: [
			'Responsive design for all devices',
			'Fast loading speeds and performance optimization',
			'SEO-friendly architecture',
			'Modern UI/UX design',
			'Cross-browser compatibility',
			'Progressive Web Apps (PWA)',
			'API integration',
			'Database design and management'
		],
		technologies: ['SvelteKit', 'Django', 'FastAPI', 'TailwindCSS', 'MySQL', 'PostgreSQL', 'Redis'],
		pricing: {
			starting: 'KSh 15,000',
			timeline: '1-4 weeks'
		},
		process: [
			{ step: 'Discovery', description: 'Understanding your requirements and goals' },
			{ step: 'Planning', description: 'Creating wireframes and technical specifications' },
			{ step: 'Development', description: 'Building your solution with regular updates' },
			{ step: 'Testing', description: 'Rigorous testing across devices and browsers' },
			{ step: 'Launch', description: 'Deployment and post-launch support' }
		],
		benefits: [
			'Increased online visibility and reach',
			'Better user engagement and conversion',
			'Scalable architecture for future growth',
			'Improved brand credibility',
			'Mobile-first approach'
		],
		testimonials: [
			{
				name: 'Jane Doe',
				role: 'CEO, TechStart',
				text: 'Paul delivered an outstanding website that exceeded our expectations. Professional and reliable!'
			}
		]
	},
	{
		slug: 'ecommerce-solutions',
		title: 'E-Commerce Solutions',
		shortDescription: 'Complete online store setup with payment integration',
		description:
			'Launch your online business with a fully-featured e-commerce platform. I build custom online stores with secure payment processing, inventory management, and powerful admin dashboards.',
		icon: '🛒',
		gradient: 'from-purple-500 to-pink-500',
		features: [
			'Custom store design',
			'Shopping cart and checkout',
			'Payment gateway integration (M-Pesa, Stripe)',
			'Inventory management system',
			'Order tracking and management',
			'Customer accounts and wishlists',
			'Product reviews and ratings',
			'Email notifications',
			'Analytics and reporting'
		],
		technologies: ['Shopify', 'WooCommerce', 'SvelteKit', 'Stripe', 'M-Pesa API'],
		pricing: {
			starting: 'KSh 30,000',
			timeline: '2-6 weeks'
		},
		process: [
			{ step: 'Consultation', description: 'Understanding your products and target market' },
			{ step: 'Design', description: 'Creating an engaging store design' },
			{ step: 'Setup', description: 'Configuring platform and integrations' },
			{ step: 'Testing', description: 'Testing checkout flow and payments' },
			{ step: 'Training', description: 'Teaching you to manage your store' }
		],
		benefits: [
			'Reach customers 24/7',
			'Automated order processing',
			'Secure payment handling',
			'Lower operational costs',
			'Data-driven insights'
		],
		testimonials: [
			{
				name: 'Mike Chen',
				role: 'Owner, Fashion Store',
				text: 'Our online sales tripled within 3 months of launching. Highly recommend!'
			}
		]
	},
	{
		slug: 'cms-development',
		title: 'CMS Development',
		shortDescription: 'Custom content management systems for easy website updates',
		description:
			'Get a powerful content management system that makes updating your website a breeze. Whether you need WordPress customization or a custom-built CMS, I create solutions that empower you to manage your content without technical knowledge.',
		icon: '📝',
		gradient: 'from-green-500 to-emerald-500',
		features: [
			'Intuitive admin interface',
			'Custom post types and fields',
			'Media library management',
			'User role management',
			'SEO tools built-in',
			'Backup and security',
			'Mobile-friendly admin',
			'Plugin/module integration'
		],
		technologies: ['WordPress', 'Custom CMS', 'PHP', 'MySQL', 'REST API'],
		pricing: {
			starting: 'KSh 40,000',
			timeline: '2-8 weeks'
		},
		process: [
			{ step: 'Requirements', description: 'Defining content types and workflows' },
			{ step: 'Architecture', description: 'Designing the CMS structure' },
			{ step: 'Development', description: 'Building custom features' },
			{ step: 'Training', description: 'Comprehensive training sessions' },
			{ step: 'Support', description: 'Ongoing maintenance and updates' }
		],
		benefits: [
			'Update content without coding',
			'Multiple user management',
			'Scheduled publishing',
			'Content versioning',
			'Workflow automation'
		],
		testimonials: [
			{
				name: 'Sarah Johnson',
				role: 'Content Manager',
				text: 'The CMS is so easy to use. We can now update our site daily without any hassle.'
			}
		]
	},
	{
		slug: 'seo-optimization',
		title: 'SEO Optimization',
		shortDescription: 'Improve your search engine rankings and drive organic traffic',
		description:
			'Boost your online visibility with comprehensive SEO services. I analyze your website, identify opportunities, and implement strategies to improve your search engine rankings and drive targeted organic traffic.',
		icon: '🚀',
		gradient: 'from-orange-500 to-red-500',
		features: [
			'Technical SEO audit',
			'Keyword research and strategy',
			'On-page optimization',
			'Content optimization',
			'Link building strategy',
			'Local SEO setup',
			'Performance monitoring',
			'Monthly reporting'
		],
		technologies: ['Google Analytics', 'Search Console', 'SEO Tools', 'Schema Markup'],
		pricing: {
			starting: 'KSh 10,000/month',
			timeline: 'Ongoing'
		},
		process: [
			{ step: 'Audit', description: 'Comprehensive website analysis' },
			{ step: 'Strategy', description: 'Creating custom SEO roadmap' },
			{ step: 'Implementation', description: 'On-page and technical fixes' },
			{ step: 'Content', description: 'Optimizing existing and new content' },
			{ step: 'Monitoring', description: 'Tracking rankings and adjusting' }
		],
		benefits: [
			'Increased organic traffic',
			'Better conversion rates',
			'Long-term sustainable growth',
			'Improved brand authority',
			'Higher ROI than paid ads'
		],
		testimonials: [
			{
				name: 'David Kimani',
				role: 'Business Owner',
				text: 'Our organic traffic increased by 200% in 6 months. Excellent work!'
			}
		]
	},
	{
		slug: 'maintenance-support',
		title: 'Website Maintenance & Support',
		shortDescription: 'Keep your website running smoothly with ongoing support',
		description:
			'Ensure your website stays secure, fast, and up-to-date with my comprehensive maintenance services. I handle updates, backups, security monitoring, and provide technical support whenever you need it.',
		icon: '🔧',
		gradient: 'from-yellow-500 to-orange-500',
		features: [
			'Regular updates and patches',
			'Daily automated backups',
			'Security monitoring',
			'Performance optimization',
			'Uptime monitoring',
			'Bug fixes and troubleshooting',
			'Content updates',
			'Priority support'
		],
		technologies: ['Monitoring Tools', 'Backup Solutions', 'Security Plugins', 'CDN'],
		pricing: {
			starting: 'KSh 10,000/month',
			timeline: 'Monthly subscription'
		},
		process: [
			{ step: 'Setup', description: 'Configuring monitoring and backups' },
			{ step: 'Monitoring', description: 'Continuous site health checks' },
			{ step: 'Updates', description: 'Regular software updates' },
			{ step: 'Optimization', description: 'Monthly performance tuning' },
			{ step: 'Reporting', description: 'Monthly status reports' }
		],
		benefits: [
			'Peace of mind',
			'Prevent downtime',
			'Stay secure from threats',
			'Maintain peak performance',
			'Focus on your business'
		],
		testimonials: [
			{
				name: 'Grace Wanjiru',
				role: 'Marketing Director',
				text: "We haven't had a single issue since Paul started maintaining our site. Excellent service!"
			}
		]
	},
	{
		slug: 'consulting',
		title: 'Technical Consulting',
		shortDescription: 'Expert advice on technology strategy and implementation',
		description:
			'Get expert guidance on your technology decisions. Whether you need help choosing the right tech stack, improving your existing systems, or planning a digital transformation, I provide strategic consulting to help you make informed decisions.',
		icon: '💡',
		gradient: 'from-cyan-500 to-blue-500',
		features: [
			'Technology stack recommendations',
			'Architecture review and planning',
			'Code review and best practices',
			'Performance audits',
			'Security assessments',
			'Scalability planning',
			'Team training and mentoring',
			'Project rescue and recovery'
		],
		technologies: ['Various based on needs'],
		pricing: {
			starting: 'KSh 1,000/hour',
			timeline: 'Flexible'
		},
		process: [
			{ step: 'Assessment', description: 'Understanding current situation' },
			{ step: 'Analysis', description: 'Identifying issues and opportunities' },
			{ step: 'Recommendations', description: 'Providing actionable advice' },
			{ step: 'Implementation', description: 'Optional hands-on assistance' },
			{ step: 'Follow-up', description: 'Ongoing support as needed' }
		],
		benefits: [
			'Avoid costly mistakes',
			'Accelerate development',
			'Improve code quality',
			'Reduce technical debt',
			'Make informed decisions'
		],
		testimonials: [
			{
				name: 'John Mwangi',
				role: 'CTO, StartupCo',
				text: "Paul's consulting saved us months of development time. His insights were invaluable!"
			}
		]
	}
];

interface Process {
	step: string;
	description: string;
}

interface Testimonial {
	name: string;
	role: string;
	text: string;
}

interface Pricing {
	starting: string;
	timeline: string;
}

interface Service {
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	icon: string;
	gradient: string;
	features: string[];
	technologies: string[];
	pricing: Pricing;
	process: Process[];
	benefits: string[];
	testimonials: Testimonial[];
}

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((service) => service.slug === slug);
}

export const serviceCategories = services.map((s) => s.title);
