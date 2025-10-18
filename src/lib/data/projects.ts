export const projects = [
	{
		slug: 'ecommerce-platform',
		title: 'E-Commerce Platform',
		shortDescription: 'Full-stack e-commerce solution with payment integration',
		description:
			'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of transactions daily and provides seamless shopping experience across all devices.',
		image: '🛍️',
		gradient: 'from-purple-500 to-pink-500',
		tech: ['SvelteKit', 'Node.js', 'MySQL', 'Stripe', 'Redis'],
		category: 'Web Development',
		client: 'RetailCo Kenya',
		duration: '4 months',
		year: '2024',
		liveUrl: 'https://example.com',
		githubUrl: 'https://github.com/paulmbui20/ecommerce',
		features: [
			'Secure payment integration with Stripe and M-Pesa',
			'Real-time inventory tracking and management',
			'Advanced product filtering and search',
			'Customer review and rating system',
			'Responsive admin dashboard',
			'Email notifications and order tracking'
		],
		challenges: [
			'Implemented complex inventory synchronization across multiple warehouses',
			'Optimized database queries to handle high traffic during flash sales',
			'Integrated local payment methods for the Kenyan market'
		],
		results: [
			'300% increase in online sales within first quarter',
			'Average page load time reduced to under 2 seconds',
			'95% customer satisfaction rate'
		],
		gallery: ['🖼️', '📱', '💳', '📊']
	},
	{
		slug: 'portfolio-cms',
		title: 'Portfolio CMS',
		shortDescription: 'Custom content management system for creative portfolios',
		description:
			'A powerful yet intuitive CMS specifically designed for creative professionals. Features drag-and-drop portfolio building, dynamic theme customization, and built-in SEO optimization. Perfect for photographers, designers, and artists who want full control over their online presence.',
		image: '📱',
		gradient: 'from-blue-500 to-cyan-500',
		tech: ['PHP', 'WordPress', 'JavaScript', 'REST API', 'MySQL'],
		category: 'CMS Development',
		client: 'Creative Studios',
		duration: '3 months',
		year: '2023',
		liveUrl: 'https://example.com',
		githubUrl: 'https://github.com/paulmbui20/portfolio-cms',
		features: [
			'Drag-and-drop portfolio builder',
			'Multiple pre-built themes with customization',
			'Built-in contact form and lead management',
			'SEO optimization tools',
			'Social media integration',
			'Analytics dashboard'
		],
		challenges: [
			'Created flexible theme system supporting unlimited customization',
			'Developed custom WordPress blocks for enhanced functionality',
			'Implemented efficient image optimization pipeline'
		],
		results: [
			'Used by 500+ creative professionals',
			'Average site speed score of 95/100',
			'40% increase in client inquiries for users'
		],
		gallery: ['🎨', '✏️', '🖼️', '📈']
	},
	{
		slug: 'analytics-dashboard',
		title: 'Analytics Dashboard',
		shortDescription: 'Real-time data visualization dashboard',
		description:
			'An advanced analytics dashboard that transforms complex data into actionable insights. Features real-time data processing, interactive charts, customizable reports, and predictive analytics. Designed for businesses that need to make data-driven decisions quickly.',
		image: '📊',
		gradient: 'from-orange-500 to-red-500',
		tech: ['Python', 'JavaScript', 'Tailwind', 'Chart.js', 'PostgreSQL'],
		category: 'Data Analytics',
		client: 'TechCorp Analytics',
		duration: '5 months',
		year: '2023',
		liveUrl: 'https://example.com',
		githubUrl: 'https://github.com/paulmbui20/analytics',
		features: [
			'Real-time data processing and visualization',
			'Interactive charts and graphs',
			'Custom report builder',
			'Predictive analytics with ML models',
			'Multi-user access with role-based permissions',
			'Export to PDF, Excel, and CSV'
		],
		challenges: [
			'Optimized real-time data processing for 10M+ data points',
			'Implemented WebSocket connections for live updates',
			'Created custom ML models for trend prediction'
		],
		results: [
			'70% reduction in report generation time',
			'Handles 10 million data points in real-time',
			'99.9% uptime over 12 months'
		],
		gallery: ['📈', '📉', '🎯', '💹']
	},
	{
		slug: 'seo-optimizer',
		title: 'SEO Optimizer Tool',
		shortDescription: 'Automated SEO analysis and optimization toolkit',
		description:
			'A comprehensive SEO toolkit that automates website analysis, keyword research, competitor tracking, and provides actionable recommendations. Helps businesses improve their search engine rankings and drive organic traffic.',
		image: '🚀',
		gradient: 'from-green-500 to-emerald-500',
		tech: ['Python', 'Shopify', 'APIs', 'Bootstrap', 'MongoDB'],
		category: 'SEO Tools',
		client: 'Digital Marketing Agency',
		duration: '3 months',
		year: '2024',
		liveUrl: 'https://example.com',
		githubUrl: 'https://github.com/paulmbui20/seo-tool',
		features: [
			'Automated website SEO audit',
			'Keyword research and tracking',
			'Competitor analysis',
			'Backlink monitoring',
			'Site speed optimization tips',
			'Content optimization suggestions'
		],
		challenges: [
			'Integrated multiple SEO APIs for comprehensive analysis',
			'Developed intelligent recommendation engine',
			'Created automated reporting system'
		],
		results: [
			'Clients saw average 150% increase in organic traffic',
			'Reduced manual SEO audit time by 80%',
			'Tracked over 50,000 keywords across 200+ websites'
		],
		gallery: ['🔍', '📊', '⚡', '🎯']
	},
	{
		slug: 'restaurant-booking',
		title: 'Restaurant Booking System',
		shortDescription: 'Modern reservation platform for restaurants',
		description:
			'A sleek reservation system that streamlines restaurant bookings, table management, and customer relationships. Features real-time availability, automated confirmations, and integration with POS systems.',
		image: '🍽️',
		gradient: 'from-yellow-500 to-orange-500',
		tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Twilio'],
		category: 'Web Application',
		client: 'Nairobi Restaurants Group',
		duration: '4 months',
		year: '2023',
		liveUrl: 'https://example.com',
		githubUrl: 'https://github.com/paulmbui20/restaurant',
		features: [
			'Real-time table availability',
			'SMS and email confirmations',
			'Customer database and preferences',
			'Waitlist management',
			'Integration with POS systems',
			'Analytics and reporting'
		],
		challenges: [
			'Implemented real-time seat allocation algorithm',
			'Created efficient waitlist and queueing system',
			'Integrated SMS notifications via Twilio'
		],
		results: [
			'60% reduction in no-shows',
			'45% increase in table turnover',
			'Used by 15 restaurants in Nairobi'
		],
		gallery: ['📅', '🍴', '📱', '💼']
	},
	{
		slug: 'fitness-tracker',
		title: 'Fitness Tracker App',
		shortDescription: 'Comprehensive fitness and wellness application',
		description:
			'A full-featured fitness tracking application that helps users monitor workouts, nutrition, and progress. Includes workout plans, meal tracking, progress photos, and community features.',
		image: '💪',
		gradient: 'from-red-500 to-pink-500',
		tech: ['React Native', 'Firebase', 'Node.js', 'TensorFlow', 'Stripe'],
		category: 'Mobile App',
		client: 'FitLife Kenya',
		duration: '6 months',
		year: '2024',
		liveUrl: 'https://example.com',
		githubUrl: 'https://github.com/paulmbui20/fitness',
		features: [
			'Custom workout plan generator',
			'Nutrition tracking with barcode scanner',
			'Progress photos and measurements',
			'Social community features',
			'Video exercise library',
			'AI-powered form correction'
		],
		challenges: [
			'Implemented ML models for exercise form analysis',
			'Optimized app for offline functionality',
			'Created engaging social features'
		],
		results: [
			'10,000+ active users in first 3 months',
			'4.8/5 star rating on app stores',
			'85% user retention rate'
		],
		gallery: ['🏃', '🥗', '📸', '📊']
	}
];

interface Project {
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	image: string;
	gradient: string;
	tech: string[];
	category: string;
	client: string;
	duration: string;
	year: string;
	liveUrl: string;
	githubUrl: string;
	features: string[];
	challenges: string[];
	results: string[];
	gallery: string[];
}

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string | undefined): Project[] {
	if (!category) return projects;
	return projects.filter((project) => project.category === category);
}

export const categories = [
	'All',
	'Web Development',
	'CMS Development',
	'Data Analytics',
	'SEO Tools',
	'Web Application',
	'Mobile App'
];
