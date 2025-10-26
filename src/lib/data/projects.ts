export const projects = [
	{
		slug: 'nasha-technologies',
		title: 'Nasha Technologies business website',
		shortDescription: 'IT and cybersecurity firm website',
		description: 'IT and cybersecurity firm with a focus based in Tanzania.',
		image: '/images/nashatech.co.tz-screenshot-responsive-mockup.webp',
		gradient: 'from-blue-500 to-cyan-500',
		tech: ['SvelteKit', 'Node.js', 'TailwindCSS', 'FormSpark'],
		category: 'Web Development',
		client: 'Nasha Technologies',
		duration: '1 week',
		year: '2025',
		liveUrl: 'https://nashatech.co.tz',
		// githubUrl: 'https://github.com/paulmbui20/nashatech',
		features: [
			'Modern responsive design',
			'Modern animations',
			'Contact form integration',
			'Service showcase',
			'SEO optimized',
			'Fast loading performance'
		],
		challenges: [
			'Created clean and professional design',
			'Implemented secure contact form',
			'Optimized for performance',
			'Added interactivity through animations'
		],
		results: [
			'Professional online presence established',
			'Increased client inquiries',
			'Fast page load times'
		],
		gallery: ['🖼️', '📱', '💼', '📊']
	},
	{
		slug: 'bii-edwin-hypnotherapist',
		title: 'Bii Edwin Hypno Therapist website',
		shortDescription: 'Mind Shifting Coach and Hypnotherapist website',
		description: 'A certified Mind Shifting Coach and Advanced Conversational Hypnotherapist',
		image: '/images/biiedwin-website-screenshot-responsive-mockup.webp',
		gradient: 'from-purple-500 to-pink-500',
		tech: ['WordPress', 'PHP', 'MySQL', 'Zoho'],
		category: 'Web Development',
		client: 'Bii Edwin',
		duration: '2 months',
		year: '2024',
		liveUrl: 'https://biiedwin.com',
		// githubUrl: 'https://github.com/paulmbui20/biiedwin',
		features: [
			'Custom WordPress theme',
			'Appointment booking system',
			'Blog and resources section',
			'Client testimonials',
			'Email marketing integration'
		],
		challenges: [
			'Developed custom booking functionality',
			'Integrated Zoho CRM',
			'Created calming, professional design'
		],
		results: [
			'Streamlined appointment process',
			'Increased client bookings',
			'Professional brand presence'
		],
		gallery: ['🎨', '✏️', '🖼️', '📈']
	},
	{
		slug: 'acerschoolapp',
		title: 'AcerSchoolApp School Management System',
		shortDescription: 'Comprehensive school management platform',
		description:
			'A school management system that allows teachers, students, admins and parents to manage their school activities and learning easily.',
		image: '/images/acerschoolapp-screenshot-responsive-mockup.webp',
		gradient: 'from-green-500 to-emerald-500',
		tech: ['Python', 'Django', 'PostgreSQL', 'TailwindCSS', 'Docker'],
		category: 'Web Application',
		client: 'Educational Institutions',
		duration: '6 months',
		year: '2023',
		liveUrl: 'https://acerschoolapp.co.ke',
		// githubUrl: 'https://github.com/paulmbui20/acerschoolapp',
		features: [
			'Student and teacher management',
			'Grade and attendance tracking',
			'Parent portal access',
			'Timetable management',
			'Communication tools',
			'Report generation'
		],
		challenges: [
			'Built scalable multi-tenant architecture',
			'Implemented role-based access control',
			'Created comprehensive reporting system'
		],
		results: [
			'Used by multiple schools in Kenya',
			'Streamlined administrative tasks',
			'Improved parent-teacher communication'
		],
		gallery: ['📚', '📊', '👨‍🏫', '📱']
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
	githubUrl?: string;
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

export const categories = ['All', 'Web Development', 'SEO', 'Web Application'];
