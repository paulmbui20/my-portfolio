# 🚀 Paul Mbui - Modern Portfolio Website

<div align="center">

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A stunning, interactive portfolio built with modern web technologies**

[Live Demo](#) | [Documentation](#-table-of-contents) | [Report Bug](#-support)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Pages & Routes](#-pages--routes)
- [FormSpark Integration](#-formspark-integration)
- [Dynamic Sitemap](#-dynamic-sitemap)
- [Error Handling](#-error-handling)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [SEO Optimization](#-seo-optimization)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🌟 Overview

A professional, modern portfolio website showcasing web development projects, services, and skills. Built with SvelteKit and styled with Tailwind CSS, this portfolio features smooth animations, interactive components, and a fully responsive design.

### 🎯 Key Highlights

- **⚡ Lightning Fast** - Built on SvelteKit for optimal performance
- **🎨 Modern Design** - Dark theme with glassmorphism and gradient effects
- **📱 Fully Responsive** - Perfect on all devices from mobile to 4K displays
- **♿ Accessible** - WCAG compliant with semantic HTML
- **🔍 SEO Optimized** - Dynamic sitemap, meta tags, and structured data
- **📧 Form Integration** - Working contact form with FormSpark
- **🎭 Smart Error Pages** - Custom 404 and 500 error pages
- **🚀 Production Ready** - Optimized for deployment on any platform

---

## ✨ Features

### 🏠 Homepage
- Eye-catching hero section with gradient text animations
- Skills showcase with animated progress bars
- Featured projects grid with 3D hover effects
- Services overview
- Client testimonials
- Smooth scroll navigation

### 👤 About Page
- Professional bio and story
- Interactive skills section with progress animations
- Experience timeline
- Education & certifications
- Awards & recognition
- Professional statistics

### 💼 Projects
- Filterable project gallery by category
- Individual project detail pages with:
  - Full project descriptions
  - Technologies used
  - Client information
  - Key features list
  - Challenges & solutions
  - Results & impact metrics
  - Project gallery
  - Related projects

### 🛠️ Services
- Comprehensive services showcase
- Individual service detail pages with:
  - Service overview
  - Included features
  - Step-by-step process
  - Key benefits
  - Technologies used
  - Pricing information
  - Client testimonials
  - Related services

### 📧 Contact
- Working contact form with FormSpark integration
- Real-time form validation
- Success/error modal notifications
- Auto-redirect to personalized thank you page
- Multiple contact methods
- Social media links
- Availability status

### 🙏 Thank You Page
- Personalized greeting using URL parameters
- Next steps information
- Quick navigation links
- Social media follow section

### ⚠️ Error Pages
- Automatic error type detection (404, 500, other)
- Context-specific error messages and suggestions
- Helpful quick links
- Auto-redirect countdown (10 seconds)
- Go back and go home buttons

### 🗺️ Dynamic Sitemap
- Automatically generated from projects and services data
- Updates when content changes
- SEO optimized with proper priorities
- Cached for performance

---

## 🛠️ Tech Stack

### Core Technologies
- **[SvelteKit](https://kit.svelte.dev/)** - Modern web framework
- **[Svelte 5](https://svelte.dev/)** - Reactive UI framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling

### Additional Tools
- **FormSpark** - Contact form backend
- **Svelte Transitions** - Smooth animations
- **CSS Grid & Flexbox** - Responsive layouts
- **Custom CSS Animations** - Interactive effects

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📁 Project Structure

```
my-portfolio/
│
├── src/
│   ├── routes/
│   │   ├── +page.svelte                    # Homepage
│   │   ├── +layout.svelte                  # Root layout
│   │   ├── +error.svelte                   # 404/500 error pages
│   │   │
│   │   ├── about/
│   │   │   └── +page.svelte                # About page
│   │   │
│   │   ├── contact/
│   │   │   └── +page.svelte                # Contact page with FormSpark
│   │   │
│   │   ├── projects/
│   │   │   ├── +page.svelte                # Projects list page
│   │   │   └── [slug]/
│   │   │       └── +page.svelte            # Individual project detail
│   │   │
│   │   ├── services/
│   │   │   ├── +page.svelte                # Services list page
│   │   │   └── [slug]/
│   │   │       └── +page.svelte            # Individual service detail
│   │   │
│   │   ├── thank-you/
│   │   │   └── +page.svelte                # Thank you page
│   │   │
│   │   └── sitemap.xml/
│   │       └── +server.js                  # Dynamic sitemap generator
│   │
│   ├── lib/
│   │   ├── data/
│   │   │   ├── projects.js                 # Projects data & functions
│   │   │   └── services.js                 # Services data & functions
│   │   │
│   │   └── components/                      # Reusable components (optional)
│   │       ├── ProjectCard.svelte
│   │       ├── ServiceCard.svelte
│   │       └── ...
│   │
│   ├── app.html                            # HTML template
│   ├── app.css                             # Global styles & Tailwind
│   └── hooks.server.js                     # Server hooks (optional)
│
├── static/
│   ├── robots.txt                          # Search engine robots file
│   ├── favicon.ico                         # Site favicon
│   └── og-image.jpg                        # Open Graph image (add your own)
│
├── .gitignore                              # Git ignore file
├── package.json                            # Dependencies & scripts
├── svelte.config.js                        # SvelteKit configuration
├── tailwind.config.js                      # Tailwind configuration
├── vite.config.js                          # Vite configuration
├── postcss.config.js                       # PostCSS configuration
├── jsconfig.json                           # JavaScript configuration
│
├── README.md                               # This file
└── SETUP_GUIDE.md                          # Detailed setup instructions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **pnpm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/paulmbui20/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**

Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Configuration

### 1. Personal Information

Update your personal details in these files:

**Contact Information** (`src/routes/contact/+page.svelte`):
```javascript
const contactInfo = [
  { icon: '📧', label: 'Email', value: 'your-email@domain.com', link: 'mailto:...' },
  { icon: '📱', label: 'Phone', value: '+254 XXX XXX XXX', link: 'tel:...' },
  // ... update all contact info
];
```

**Social Links** (Multiple files - search and replace):
- GitHub: `https://github.com/YOUR_USERNAME`
- LinkedIn: `https://linkedin.com/in/YOUR_USERNAME`
- Twitter: `https://twitter.com/YOUR_USERNAME`

### 2. Domain Configuration

**Sitemap** (`src/routes/sitemap.xml/+server.js`):
```javascript
const site = 'https://yourdomain.com'; // Your domain
```

**Robots.txt** (`static/robots.txt`):
```
Sitemap: https://yourdomain.com/sitemap.xml
```

### 3. FormSpark Setup

**Get FormSpark Form ID:**
1. Sign up at [FormSpark.io](https://formspark.io)
2. Create a new form
3. Copy your Form ID

**Update Contact Form** (`src/routes/contact/+page.svelte`):
```javascript
const FORMSPARK_ACTION_URL = 'https://submit-form.com/YOUR_FORM_ID';
```

### 4. Content Management

**Add/Edit Projects** (`src/lib/data/projects.js`):
```javascript
export const projects = [
  {
    slug: 'project-slug',
    title: 'Project Title',
    // ... add all project details
  }
];
```

**Add/Edit Services** (`src/lib/data/services.js`):
```javascript
export const services = [
  {
    slug: 'service-slug',
    title: 'Service Title',
    // ... add all service details
  }
];
```

> 💡 **Tip:** After adding/removing projects or services, the sitemap automatically updates!

---

## 📄 Pages & Routes

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Homepage | Hero, projects, services, testimonials |
| `/about` | About page | Bio, skills, experience, education |
| `/projects` | Projects list | Filterable project gallery |
| `/projects/[slug]` | Project detail | Full project information |
| `/services` | Services list | All available services |
| `/services/[slug]` | Service detail | Complete service information |
| `/contact` | Contact page | Working form with validation |
| `/thank-you` | Thank you page | Post-submission confirmation |
| `/sitemap.xml` | Dynamic sitemap | Auto-generated XML sitemap |
| `*` (404) | Error page | Custom 404/500 error handling |

---

## 📧 FormSpark Integration

### Features

✅ **Real-time Validation** - Client-side form validation  
✅ **Loading States** - Visual feedback during submission  
✅ **Success Modal** - Beautiful confirmation modal  
✅ **Error Handling** - Graceful error messages  
✅ **Auto-redirect** - Redirects to thank you page after 2 seconds  
✅ **Personalization** - Includes user's name in thank you page  
✅ **Form Reset** - Clears form after successful submission

### How It Works

1. User fills out contact form
2. Form submits to FormSpark API
3. Success/error modal displays
4. Auto-redirect after 2 seconds OR user clicks "Okay"
5. Redirect to `/thank-you?name=UserName`
6. User sees personalized thank you message

### Testing

1. Navigate to `/contact`
2. Fill in the form
3. Submit and watch the flow
4. Check FormSpark dashboard for submission

---

## 🗺️ Dynamic Sitemap

### Overview

The sitemap is **automatically generated** from your projects and services data.

### Features

✅ **Auto-updates** - Updates when you add/remove content  
✅ **Always current** - `lastmod` date updates automatically  
✅ **SEO optimized** - Proper priorities and change frequencies  
✅ **Cached** - 1-hour cache for performance  
✅ **Valid XML** - Follows sitemap protocol standards

### How It Works

1. Reads all projects from `projects.js`
2. Reads all services from `services.js`
3. Generates XML with all URLs
4. Serves at `/sitemap.xml`

### Priority Structure

- Homepage: `1.0` (highest priority)
- Projects/Services pages: `0.9`
- Individual services: `0.8`
- About/Contact: `0.8`
- Individual projects: `0.7`

### Testing

Visit `http://localhost:5173/sitemap.xml` to see your sitemap.

---

## ⚠️ Error Handling

### Smart Error Detection

The error page automatically detects and handles:

- **404 Errors** - Page not found
- **500 Errors** - Server errors
- **Other Errors** - Any other HTTP errors

### Features

✅ **Context-specific messages** - Different messages per error type  
✅ **Helpful suggestions** - What users can do next  
✅ **Auto-redirect** - 10-second countdown to homepage  
✅ **Quick actions** - Go Home and Go Back buttons  
✅ **Quick links** - Links to main sections  
✅ **Smooth animations** - Professional transitions

### Testing Error Pages

**Test 404:**
```
http://localhost:5173/nonexistent-page
http://localhost:5173/projects/fake-slug
http://localhost:5173/services/not-real
```

**Test 500:**
- Temporarily break server-side code
- Throw an error in `+page.server.js`

### Customize

**Change auto-redirect time** (`src/routes/+error.svelte`):
```javascript
let countdown = 10; // Change to 5, 15, etc.
```

**Disable auto-redirect:**
```javascript
// Comment out the interval in onMount
```

---

## 🎨 Customization

### Colors & Themes

**Primary colors** are defined in Tailwind config and used throughout:
- Purple: `purple-400`, `purple-500`, `purple-600`
- Pink: `pink-400`, `pink-500`, `pink-600`

**Change colors:**

1. **Update Tailwind config** (`tailwind.config.js`):
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

2. **Update gradient classes** throughout components:
```svelte
<!-- Change from purple/pink to blue/cyan -->
<div class="bg-gradient-to-r from-blue-500 to-cyan-500">
```

### Animations

**Customize animation speeds:**

Find `transition` properties and adjust durations:
```svelte
<div in:fly={{ y: 30, duration: 600 }}> <!-- Change duration -->
```

**Add new animations** (`app.css`):
```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

### Content

**Update projects:** Edit `src/lib/data/projects.js`  
**Update services:** Edit `src/lib/data/services.js`  
**Update about info:** Edit `src/routes/about/+page.svelte`  
**Update homepage:** Edit `src/routes/+page.svelte`

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Zero configuration for SvelteKit
- Automatic deployments from Git
- Free SSL certificates
- Global CDN
- Excellent performance

**Deploy Steps:**

1. Push to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects SvelteKit)

**Add Custom Domain:**
1. Project Settings → Domains
2. Add `yourdomain.com`
3. Update DNS records as instructed

### Option 2: Netlify

1. **Install adapter:**
```bash
npm install -D @sveltejs/adapter-netlify
```

2. **Update config** (`svelte.config.js`):
```javascript
import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter()
  }
};
```

3. **Deploy:**
   - Connect GitHub repo to Netlify
   - Build command: `npm run build`
   - Publish directory: `.svelte-kit/netlify`

### Option 3: Static Hosting

1. **Install static adapter:**
```bash
npm install -D @sveltejs/adapter-static
```

2. **Update config** (`svelte.config.js`):
```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter()
  }
};
```

3. **Build:**
```bash
npm run build
```

4. **Deploy** the `build` folder to:
   - GitHub Pages
   - Cloudflare Pages
   - Firebase Hosting
   - Any static host

---

## 🔍 SEO Optimization

### Built-in SEO Features

✅ **Dynamic Sitemap** - Auto-generated from content  
✅ **Robots.txt** - Properly configured  
✅ **Meta Tags** - All pages have unique meta tags  
✅ **Semantic HTML** - Proper heading hierarchy  
✅ **Fast Loading** - Optimized performance  
✅ **Mobile-friendly** - Responsive design  
✅ **Accessible** - WCAG compliant

### SEO Checklist

- [ ] Add unique titles to all pages
- [ ] Add meta descriptions (150-160 characters)
- [ ] Create Open Graph image (1200x630px)
- [ ] Add alt text to images (when you add real images)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site on Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test with Lighthouse
- [ ] Check mobile-friendliness

### Add Open Graph Image

1. Create a 1200x630px image
2. Save as `static/og-image.jpg`
3. Update meta tags in pages:

```svelte
<svelte:head>
  <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
</svelte:head>
```

### Submit to Search Engines

**Google:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://yourdomain.com`
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site
3. Submit sitemap

---

## ⚡ Performance

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimization Techniques Used

✅ **Code Splitting** - SvelteKit automatic code splitting  
✅ **Lazy Loading** - Images and components load on demand  
✅ **Minification** - CSS and JS minified in production  
✅ **Caching** - Static assets cached with proper headers  
✅ **Compression** - Gzip/Brotli compression on server  
✅ **Modern CSS** - Utility-first approach with Tailwind  
✅ **Optimized Fonts** - System fonts for instant loading

### Performance Tips

1. **Optimize images** (when you add real ones):
   - Use WebP format
   - Compress with tools like TinyPNG
   - Use appropriate dimensions

2. **Minimize dependencies:**
   - Only install what you need
   - Check bundle size regularly

3. **Use CDN:**
   - Vercel/Netlify provide CDN automatically
   - Or use Cloudflare

---

## 🌐 Browser Support

### Supported Browsers

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome)

### Progressive Enhancement

The site works on older browsers but uses modern features when available:
- CSS Grid & Flexbox (fallbacks included)
- CSS Custom Properties
- Modern JavaScript (transpiled for older browsers)

---

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome!

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 Design enhancements
- ♿ Accessibility improvements
- 🌐 Translations (if adding i18n)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What this means:

✅ You can use this code for personal projects  
✅ You can use it for commercial projects  
✅ You can modify it  
✅ You can distribute it  

**Just:**
- Include the original license
- Don't hold me liable

---

## 💬 Support

### Get Help

- 📧 **Email:** hello@paulmbui.co.ke
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/paulmbui20/my-portfolio/issues)
- 💡 **Feature Requests:** [GitHub Issues](https://github.com/paulmbui20/my-portfolio/issues)
- 📖 **Documentation:** [SETUP_GUIDE.md](SETUP_GUIDE.md)

### Useful Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [FormSpark Documentation](https://formspark.io/docs)

---

## 🎉 Acknowledgments

- **SvelteKit Team** - For an amazing framework
- **Tailwind CSS Team** - For the utility-first CSS framework
- **FormSpark** - For the contact form backend
- **Vercel** - For hosting and deployment
- **Design Inspiration** - Dribbble, Behance communities

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/paulmbui20/my-portfolio)
![GitHub stars](https://img.shields.io/github/stars/paulmbui20/my-portfolio)
![GitHub forks](https://img.shields.io/github/forks/paulmbui20/my-portfolio)
![GitHub issues](https://img.shields.io/github/issues/paulmbui20/my-portfolio)

---

<div align="center">

Made with ❤️ by [Paul Mbui](https://paulmbui.co.ke)

⭐ Star this repo if you find it helpful!

[Back to Top](#-paul-mbui---modern-portfolio-website)

</div>