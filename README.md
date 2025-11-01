# 🚀 Paul Mbui - Modern Portfolio Website

<div align="center">

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PocketBase](https://img.shields.io/badge/PocketBase-B8DBE4?style=for-the-badge&logo=pocketbase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A stunning, full-stack interactive portfolio with headless CMS powered by PocketBase**

[Live Demo](#) | [Documentation](#-table-of-contents) | [Report Bug](#-support)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [PocketBase Setup](#-pocketbase-setup)
- [Configuration](#-configuration)
- [Pages & Routes](#-pages--routes)
- [CMS Collections](#-cms-collections)
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

A professional, modern full-stack portfolio website with a headless CMS backend. Built with SvelteKit for the frontend and PocketBase as a lightweight, self-hosted backend for managing projects, services, and reviews. Features smooth animations, interactive components, and a fully responsive design.

### 🎯 Key Highlights

- **⚡ Lightning Fast** - Built on SvelteKit for optimal performance
- **🗄️ Headless CMS** - PocketBase backend for easy content management
- **🎨 Modern Design** - Dark theme with glassmorphism and gradient effects
- **📱 Fully Responsive** - Perfect on all devices from mobile to 4K displays
- **♿ Accessible** - WCAG compliant with semantic HTML
- **🔍 SEO Optimized** - Dynamic sitemap, meta tags, and structured data
- **📧 Form Integration** - Working contact form with FormSpark
- **🎭 Smart Error Pages** - Custom 404 and 500 error pages
- **🚀 Production Ready** - Optimized for deployment on any platform
- **📦 No Database Setup** - PocketBase provides embedded database

---

## ✨ Features

### 🏠 Homepage

- Eye-catching hero section with gradient text animations
- Skills showcase with animated progress bars
- Featured projects grid with 3D hover effects (from PocketBase)
- Services overview (from PocketBase)
- Client testimonials marquee (from PocketBase)
- Smooth scroll navigation

### 👤 About Page

- Professional bio and story
- Interactive skills section with progress animations
- Experience timeline
- Education & certifications
- Awards & recognition
- Professional statistics

### 💼 Projects (Dynamic from PocketBase)

- Filterable project gallery by category
- Individual project detail pages with:
  - Full project descriptions
  - Technologies used
  - Client information
  - Key features list
  - Challenges & solutions
  - Results & impact metrics
  - Project gallery with lightbox
  - Related projects
- Automatic image handling from PocketBase
- Real-time content updates

### 🛠️ Services (Dynamic from PocketBase)

- Comprehensive services showcase
- Individual service detail pages with:
  - Service overview
  - Included features
  - Step-by-step process
  - Key benefits
  - Technologies used
  - Pricing information
  - Client testimonials
  - Deliverables list
  - Related services
- Icon support (images or emoji)
- Easy content management

### ⭐ Reviews (Dynamic from PocketBase)

- Infinite marquee animation
- Client testimonials with organization info
- Dedicated reviews page (optional)
- Pause on hover
- Loading states
- Real-time updates

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

- Automatically generated from PocketBase collections
- Updates when content changes
- SEO optimized with proper priorities
- Cached for performance
- Includes last modified dates

---

## 🛠️ Tech Stack

### Core Technologies

- **[SvelteKit](https://kit.svelte.dev/)** - Modern web framework
- **[Svelte 5](https://svelte.dev/)** - Reactive UI framework
- **[PocketBase](https://pocketbase.io/)** - Open-source backend and database
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling

### Backend & Database

- **PocketBase** - All-in-one backend solution:
  - SQLite database (embedded)
  - RESTful API
  - Real-time subscriptions
  - File storage
  - Admin dashboard
  - Authentication (optional)

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
├── pocketbase/                             # PocketBase backend
│   ├── pb_data/                            # Database & files (auto-created)
│   ├── pb_migrations/                      # Database migrations
│   └── pocketbase                          # PocketBase executable
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
│   │   │   ├── +page.ts                    # Projects loader (PocketBase)
│   │   │   ├── +page.svelte                # Projects list page
│   │   │   └── [slug]/
│   │   │       ├── +page.ts                # Project detail loader
│   │   │       └── +page.svelte            # Individual project detail
│   │   │
│   │   ├── services/
│   │   │   ├── +page.ts                    # Services loader (PocketBase)
│   │   │   ├── +page.svelte                # Services list page
│   │   │   └── [slug]/
│   │   │       ├── +page.ts                # Service detail loader
│   │   │       └── +page.svelte            # Individual service detail
│   │   │
│   │   ├── reviews/
│   │   │   ├── +page.ts                    # Reviews loader (PocketBase)
│   │   │   └── +page.svelte                # Reviews page (optional)
│   │   │
│   │   ├── thank-you/
│   │   │   └── +page.svelte                # Thank you page
│   │   │
│   │   └── sitemap.xml/
│   │       └── +server.ts                  # Dynamic sitemap (PocketBase)
│   │
│   ├── lib/
│   │   ├── pocketbase.ts                   # PocketBase client setup
│   │   │
│   │   ├── data/
│   │   │   ├── projects.ts                 # Projects functions (PocketBase)
│   │   │   ├── services.ts                 # Services functions (PocketBase)
│   │   │   └── reviews.ts                  # Reviews functions (PocketBase)
│   │   │
│   │   └── components/                      # Reusable components
│   │       ├── Projects.svelte             # Projects component
│   │       ├── Reviews.svelte              # Reviews marquee
│   │       ├── ReviewsSection.svelte       # Reviews section
│   │       └── ...
│   │
│   ├── app.html                            # HTML template
│   ├── app.css                             # Global styles & Tailwind
│   └── hooks.server.js                     # Server hooks (optional)
│
├── static/
│   ├── robots.txt                          # Search engine robots file
│   ├── favicon.ico                         # Site favicon
│   └── og-image.jpg                        # Open Graph image
│
├── scripts/                                 # Utility scripts (optional)
│   ├── import-projects.ts                  # Import projects to PocketBase
│   ├── import-services.ts                  # Import services to PocketBase
│   └── import-reviews.ts                   # Import reviews to PocketBase
│
├── .env                                    # Environment variables
├── .gitignore                              # Git ignore file
├── package.json                            # Dependencies & scripts
├── svelte.config.js                        # SvelteKit configuration
├── tailwind.config.js                      # Tailwind configuration
├── vite.config.js                          # Vite configuration
├── postcss.config.js                       # PostCSS configuration
├── jsconfig.json                           # JavaScript configuration
│
├── README.md                               # This file
├── SETUP_GUIDE.md                          # Detailed setup instructions
└── POCKETBASE_GUIDE.md                     # PocketBase setup guide
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **pnpm** or **yarn**
- **Git**
- **PocketBase** (included in setup)

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

3. **Download PocketBase**

```bash
# For Linux/Mac
curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.0/pocketbase_0.22.0_linux_amd64.zip -o pocketbase.zip
unzip pocketbase.zip
chmod +x pocketbase

# For Windows
# Download from: https://github.com/pocketbase/pocketbase/releases
# Extract pocketbase.exe to project root
```

4. **Start PocketBase**

```bash
# Linux/Mac
./pocketbase serve

# Windows
pocketbase.exe serve
```

PocketBase will start at `http://127.0.0.1:8090`

5. **Set up PocketBase Admin**

- Visit `http://127.0.0.1:8090/_/`
- Create admin account
- Create collections (see [PocketBase Setup](#-pocketbase-setup))

6. **Configure environment variables**

Create `.env` file:

```env
PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
PUBLIC_SITE_URL=http://localhost:5173
```

7. **Start development server**

```bash
npm run dev
```

8. **Open in browser**

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

## 🗄️ PocketBase Setup

### Create Collections

Create these collections in PocketBase Admin (`http://127.0.0.1:8090/_/`):

#### 1. Projects Collection

**Collection name:** `projects`

| Field            | Type   | Required | Options                       |
| ---------------- | ------ | -------- | ----------------------------- |
| slug             | Text   | Yes      | Unique, Min: 2, Max: 100      |
| title            | Text   | Yes      | Min: 2, Max: 200              |
| shortDescription | Text   | Yes      | Min: 10, Max: 300             |
| description      | Editor | Yes      | -                             |
| image            | File   | Yes      | Single file, Max: 5MB         |
| gallery          | File   | No       | Multiple files, Max: 5MB each |
| category         | Text   | Yes      | -                             |
| client           | Text   | Yes      | -                             |
| duration         | Text   | Yes      | -                             |
| year             | Number | Yes      | Min: 2000, Max: 2100          |
| liveUrl          | URL    | No       | -                             |
| githubUrl        | URL    | No       | -                             |
| tech             | JSON   | Yes      | Array of strings              |
| features         | JSON   | Yes      | Array of strings              |
| challenges       | JSON   | Yes      | Array of strings              |
| results          | JSON   | Yes      | Array of strings              |

**API Rules:**

- List/Search: `@request.auth.id = ""` (public)
- View: `@request.auth.id = ""` (public)

#### 2. Services Collection

**Collection name:** `services`

| Field            | Type | Required | Options                      |
| ---------------- | ---- | -------- | ---------------------------- |
| slug             | Text | Yes      | Unique, Min: 2, Max: 100     |
| title            | Text | Yes      | Min: 2, Max: 150             |
| shortDescription | Text | Yes      | Min: 10, Max: 300            |
| description      | Text | Yes      | Min: 20, Max: 2000           |
| icon             | File | Yes      | Single file (png, svg)       |
| features         | JSON | Yes      | Array of strings             |
| technologies     | JSON | Yes      | Array of strings             |
| pricing          | JSON | Yes      | `{starting, timeline}`       |
| process          | JSON | Yes      | Array of step objects        |
| benefits         | JSON | Yes      | Array of strings             |
| deliverables     | JSON | No       | Array of strings             |
| testimonials     | JSON | No       | Array of testimonial objects |

**API Rules:**

- List/Search: `@request.auth.id = ""` (public)
- View: `@request.auth.id = ""` (public)

#### 3. Reviews Collection

**Collection name:** `reviews`

| Field        | Type | Required | Options            |
| ------------ | ---- | -------- | ------------------ |
| name         | Text | Yes      | Min: 2, Max: 100   |
| role         | Text | Yes      | Min: 2, Max: 100   |
| organization | Text | Yes      | Min: 2, Max: 150   |
| message      | Text | Yes      | Min: 10, Max: 1000 |

**API Rules:**

- List/Search: `@request.auth.id = ""` (public)
- View: `@request.auth.id = ""` (public)

### Import Sample Data

Use the provided import scripts or manually add data via Admin UI:

```bash
# If using scripts
npx tsx scripts/import-projects.ts
npx tsx scripts/import-services.ts
npx tsx scripts/import-reviews.ts
```

### PocketBase Admin Dashboard

Access at `http://127.0.0.1:8090/_/` to:

- Add/edit/delete content
- Manage files and images
- View API logs
- Configure settings
- Backup database

---

## ⚙️ Configuration

### 1. Environment Variables

Create `.env` file in project root:

```env
# PocketBase
PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090

# Site URL
PUBLIC_SITE_URL=http://localhost:5173

# FormSpark (optional)
PUBLIC_FORMSPARK_FORM_ID=your_form_id_here
```

### 2. Personal Information

Update your personal details in these files:

**Contact Information** (`src/routes/contact/+page.svelte`):

```javascript
const contactInfo = [
	{ icon: '📧', label: 'Email', value: 'your-email@domain.com', link: 'mailto:...' },
	{ icon: '📱', label: 'Phone', value: '+254 XXX XXX XXX', link: 'tel:...' }
	// ... update all contact info
];
```

**Social Links** (Multiple files - search and replace):

- GitHub: `https://github.com/YOUR_USERNAME`
- LinkedIn: `https://linkedin.com/in/YOUR_USERNAME`
- Twitter: `https://twitter.com/YOUR_USERNAME`

### 3. PocketBase URL

**For Development:**

```typescript
// src/lib/pocketbase.ts
export const pb = new PocketBase('http://127.0.0.1:8090');
```

**For Production:**

```typescript
// src/lib/pocketbase.ts
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
```

Then set in `.env`:

```env
PUBLIC_POCKETBASE_URL=https://your-pocketbase-domain.com
```

### 4. FormSpark Setup

**Get FormSpark Form ID:**

1. Sign up at [FormSpark.io](https://formspark.io)
2. Create a new form
3. Copy your Form ID

**Update Contact Form** (`src/routes/contact/+page.svelte`):

```javascript
const FORMSPARK_ACTION_URL = 'https://submit-form.com/YOUR_FORM_ID';
```

### 5. Content Management

All content is now managed through PocketBase Admin UI at `http://127.0.0.1:8090/_/`

**No code changes needed!** Just:

1. Log in to PocketBase Admin
2. Navigate to Collections
3. Add/Edit/Delete records
4. Changes appear instantly on your site

---

## 📄 Pages & Routes

| Route              | Description     | Data Source                    |
| ------------------ | --------------- | ------------------------------ |
| `/`                | Homepage        | PocketBase (projects, reviews) |
| `/about`           | About page      | Static content                 |
| `/projects`        | Projects list   | PocketBase `projects`          |
| `/projects/[slug]` | Project detail  | PocketBase `projects`          |
| `/services`        | Services list   | PocketBase `services`          |
| `/services/[slug]` | Service detail  | PocketBase `services`          |
| `/reviews`         | Reviews page    | PocketBase `reviews`           |
| `/contact`         | Contact page    | FormSpark integration          |
| `/thank-you`       | Thank you page  | URL parameters                 |
| `/sitemap.xml`     | Dynamic sitemap | PocketBase collections         |
| `*` (404)          | Error page      | Custom error handling          |

---

## 📦 CMS Collections

### Projects Collection

Manage all your portfolio projects:

- ✅ Project details and descriptions
- ✅ Client information
- ✅ Featured image
- ✅ Project gallery (multiple images)
- ✅ Technologies used
- ✅ Features, challenges, results
- ✅ Live and GitHub URLs

### Services Collection

Manage your service offerings:

- ✅ Service details and pricing
- ✅ Icon (image or emoji)
- ✅ Features and benefits
- ✅ Process steps
- ✅ Technologies used
- ✅ Deliverables
- ✅ Optional testimonials

### Reviews Collection

Manage client testimonials:

- ✅ Client name and role
- ✅ Organization
- ✅ Review message
- ✅ Automatic marquee display

### Advantages of PocketBase CMS

- 🚀 **No Database Setup** - Embedded SQLite database
- 🎨 **Easy Content Management** - User-friendly admin UI
- 📁 **File Storage** - Built-in file and image handling
- ⚡ **Real-time Updates** - Changes reflect immediately
- 🔒 **Secure** - Built-in authentication and API rules
- 💾 **Backups** - Easy database exports
- 🆓 **Free & Open Source** - No monthly fees
- 📦 **Self-Hosted** - Full control over your data

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

The sitemap is **automatically generated** from your PocketBase collections.

### Features

✅ **Auto-updates** - Updates when you add/remove content in PocketBase  
✅ **Always current** - Uses actual `updated` timestamps from database  
✅ **SEO optimized** - Proper priorities and change frequencies  
✅ **Cached** - 1-hour cache for performance  
✅ **Valid XML** - Follows sitemap protocol standards

### How It Works

1. Fetches all projects from PocketBase
2. Fetches all services from PocketBase
3. Generates XML with all URLs and last modified dates
4. Serves at `/sitemap.xml`

### Priority Structure

- Homepage: `1.0` (highest priority)
- Projects/Services pages: `0.9`
- Individual services: `0.8`
- About/Contact: `0.8`
- Reviews: `0.7`
- Individual projects: `0.7`

### Testing

Visit `http://localhost:5173/sitemap.xml` to see your dynamic sitemap.

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

- Stop PocketBase server
- Try to access `/projects`

---

## 🎨 Customization

### Colors & Themes

**Primary colors** are defined in Tailwind config and used throughout:

- Primary: Purple shades
- Accent: Pink/Cyan shades
- Secondary: Gray shades

**Change colors:**

1. **Update Tailwind config** (`tailwind.config.js`):

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        400: '#your-color',
        500: '#your-color',
        600: '#your-color',
      },
      // ... more colors
    }
  }
}
```

2. **Update gradient classes** throughout components

### Content Management

**All dynamic content** is managed through PocketBase:

- Projects: Add via PocketBase Admin
- Services: Add via PocketBase Admin
- Reviews: Add via PocketBase Admin

**Static content:**

- About page: Edit `src/routes/about/+page.svelte`
- Homepage hero: Edit `src/routes/+page.svelte`
- Contact info: Edit `src/routes/contact/+page.svelte`

---

## 🚀 Deployment

### PocketBase Deployment

**Deploy PocketBase first:**

#### Option 1: PocketHost (Easiest - Recommended)

1. Go to [PocketHost.io](https://pockethost.io)
2. Create account and new instance
3. Upload your `pb_data` folder
4. Get your PocketBase URL: `https://yourapp.pockethost.io`

#### Option 2: Railway

1. Install Railway CLI
2. Deploy PocketBase:

```bash
railway login
railway init
railway up
```

3. Get your Railway URL

#### Option 3: VPS (DigitalOcean, Linode, etc.)

1. SSH into your server
2. Upload PocketBase
3. Run as a service:

```bash
./pocketbase serve --http=0.0.0.0:8090
```

4. Set up reverse proxy (Nginx/Caddy)

### Frontend Deployment

#### Option 1: Vercel (Recommended)

1. **Update PocketBase URL:**

```env
# .env.production
PUBLIC_POCKETBASE_URL=https://your-pocketbase-url.com
PUBLIC_SITE_URL=https://yourdomain.com
```

2. **Push to GitHub:**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

3. **Deploy to Vercel:**

- Go to [vercel.com](https://vercel.com)
- Import GitHub repository
- Add environment variables
- Deploy

#### Option 2: Netlify

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

3. **Add environment variables to Netlify**
4. **Deploy**

### CORS Configuration

If frontend and backend are on different domains, configure CORS in PocketBase:

```bash
# Start PocketBase with CORS
./pocketbase serve --origins="https://yourdomain.com"
```

Or set in PocketBase Admin UI under Settings → Application.

---

## 🔍 SEO Optimization

### Built-in SEO Features

✅ **Dynamic Sitemap** - Auto-generated from PocketBase  
✅ **Robots.txt** - Properly configured  
✅ **Meta Tags** - All pages have unique meta tags  
✅ **Semantic HTML** - Proper heading hierarchy  
✅ **Fast Loading** - Optimized performance  
✅ **Mobile-friendly** - Responsive design  
✅ **Accessible** - WCAG compliant  
✅ **Structured Data** - Ready for schema.org markup

### SEO Checklist

- [ ] Update PocketBase URL in production
- [ ] Add unique titles to all pages
- [ ] Add meta descriptions (150-160 characters)
- [ ] Create Open Graph image (1200x630px)
- [ ] Add alt text to images in PocketBase
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site on Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test with Lighthouse
- [ ] Check mobile-friendliness

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
✅ **Caching** - Static assets and API responses cached  
✅ **Compression** - Gzip/Brotli compression on server  
✅ **Modern CSS** - Utility-first approach with Tailwind  
✅ **Optimized Fonts** - System fonts for instant loading  
✅ **Database Optimization** - PocketBase with embedded SQLite

### Performance Tips

1. **Optimize images in PocketBase:**
   - Use WebP format
   - Compress before uploading
   - Use PocketBase thumbnail generation

2. **Enable caching:**

```typescript
// Add caching to data fetching functions
let cachedData = null;
let cacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
```

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
- Fetch API (with fallbacks)

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
- 🗄️ PocketBase collection templates
- 📊 Analytics integration

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
- 📖 **Documentation:** [SETUP_GUIDE.md](SETUP_GUIDE.md) | [POCKETBASE_GUIDE.md](POCKETBASE_GUIDE.md)

### Useful Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PocketBase Documentation](https://pocketbase.io/docs)
- [FormSpark Documentation](https://formspark.io/docs)

---

## 🎯 Quick Start Guide

### For Developers

1. **Clone and install:**

```bash
git clone https://github.com/paulmbui20/my-portfolio.git
cd my-portfolio
npm install
```

2. **Start PocketBase:**

```bash
./pocketbase serve
```

3. **Setup PocketBase:**

- Visit `http://127.0.0.1:8090/_/`
- Create admin account
- Create collections (see [PocketBase Setup](#-pocketbase-setup))
- Add sample data

4. **Start dev server:**

```bash
npm run dev
```

5. **View site:**

```
http://localhost:5173
```

### For Content Managers

1. **Access PocketBase Admin:**

```
http://127.0.0.1:8090/_/
```

2. **Login with admin credentials**

3. **Manage content:**
   - **Projects:** Add/edit portfolio projects
   - **Services:** Add/edit services offered
   - **Reviews:** Add/edit client testimonials

4. **Upload images:**
   - Featured images for projects
   - Service icons
   - Gallery images

5. **Save and refresh your site** - Changes appear instantly!

---

## 📚 Documentation

### Main Guides

- **[README.md](README.md)** - This file, overview and quick start
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup instructions
- **[POCKETBASE_GUIDE.md](POCKETBASE_GUIDE.md)** - Complete PocketBase guide

### Collection Guides

Each collection has detailed setup instructions:

- **Projects Collection** - See POCKETBASE_GUIDE.md
- **Services Collection** - See POCKETBASE_GUIDE.md
- **Reviews Collection** - See POCKETBASE_GUIDE.md

### Integration Guides

- **FormSpark Integration** - See [FormSpark Integration](#-formspark-integration)
- **Dynamic Sitemap** - See [Dynamic Sitemap](#-dynamic-sitemap)
- **Error Handling** - See [Error Handling](#-error-handling)

---

## 🔧 Troubleshooting

### Common Issues

#### PocketBase Not Starting

```bash
# Check if port 8090 is already in use
lsof -i :8090

# Kill the process if needed
kill -9 <PID>

# Start PocketBase again
./pocketbase serve
```

#### CORS Errors

- Ensure PocketBase is running
- Check `PUBLIC_POCKETBASE_URL` in `.env`
- Start PocketBase with CORS enabled:

```bash
./pocketbase serve --origins="http://localhost:5173"
```

#### Images Not Loading

- Verify images are uploaded to PocketBase
- Check file field names match collection schema
- Test URL directly: `http://127.0.0.1:8090/api/files/COLLECTION/RECORD_ID/FILENAME`

#### Data Not Appearing

- Check PocketBase is running
- Verify API rules allow public list/view access
- Check browser console for errors
- Ensure collection names match exactly

#### Build Errors

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear SvelteKit cache
rm -rf .svelte-kit
npm run dev
```

---

## 🎨 Customization Examples

### Change Theme Colors

```javascript
// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			colors: {
				primary: {
					400: '#60a5fa', // blue-400
					500: '#3b82f6', // blue-500
					600: '#2563eb' // blue-600
				},
				accent: {
					400: '#34d399', // emerald-400
					500: '#10b981', // emerald-500
					600: '#059669' // emerald-600
				}
			}
		}
	}
};
```

### Add New Collection

1. **Create collection in PocketBase**
2. **Add TypeScript interface:**

```typescript
// src/lib/data/yourcollection.ts
export interface YourCollection {
	id: string;
	// ... fields
}

export async function getYourCollection() {
	return await pb.collection('yourcollection').getFullList();
}
```

3. **Create page:**

```svelte
<!-- src/routes/yourcollection/+page.svelte -->
<script lang="ts">
	import { getYourCollection } from '$lib/data/yourcollection';

	let items = [];

	onMount(async () => {
		items = await getYourCollection();
	});
</script>

{#each items as item}
	<!-- Display your items -->
{/each}
```

### Add Search Functionality

```svelte
<script>
	let searchTerm = '';

	$: filteredProjects = projects.filter(
		(p) =>
			p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<input
	bind:value={searchTerm}
	placeholder="Search projects..."
	class="rounded-lg border border-white/10 bg-black px-4 py-2"
/>

{#each filteredProjects as project}
	<!-- project card -->
{/each}
```

---

## 🚀 Production Checklist

### Before Deployment

- [ ] PocketBase deployed and accessible
- [ ] Environment variables configured
- [ ] All collections created in PocketBase
- [ ] Sample content added to PocketBase
- [ ] Images optimized and uploaded
- [ ] FormSpark form ID updated
- [ ] Contact information updated
- [ ] Social media links updated
- [ ] Domain configured
- [ ] SSL certificate enabled
- [ ] Robots.txt updated with production URL
- [ ] Sitemap tested
- [ ] All pages tested
- [ ] Mobile responsiveness verified
- [ ] Forms tested
- [ ] Error pages tested
- [ ] Analytics set up (optional)
- [ ] Performance tested (Lighthouse)

### After Deployment

- [ ] Test all pages on production
- [ ] Verify PocketBase connection
- [ ] Submit sitemap to Google Search Console
- [ ] Verify contact form works
- [ ] Check all images load
- [ ] Test on multiple devices
- [ ] Test on multiple browsers
- [ ] Monitor error logs
- [ ] Set up backups for PocketBase
- [ ] Document admin credentials securely

---

## 🔐 Security Best Practices

### PocketBase Security

1. **Admin Dashboard:**
   - Use strong admin password
   - Change default admin email
   - Enable 2FA if available
   - Limit admin access

2. **API Rules:**
   - Only allow public read access
   - Restrict create/update/delete to admins
   - Review rules regularly

3. **File Uploads:**
   - Set file size limits
   - Validate file types
   - Use PocketBase's built-in validation

4. **Backups:**

```bash
# Backup PocketBase data
cp -r pb_data pb_data_backup_$(date +%Y%m%d)

# Or use PocketBase backup command
./pocketbase backup
```

5. **Production:**
   - Use HTTPS for both frontend and PocketBase
   - Set up firewall rules
   - Keep PocketBase updated
   - Monitor access logs

### Frontend Security

- ✅ No sensitive data in frontend code
- ✅ Environment variables for API keys
- ✅ HTTPS enabled in production
- ✅ Content Security Policy headers
- ✅ XSS protection
- ✅ CSRF protection (FormSpark handles this)

---

## 📊 Analytics Integration

### Google Analytics 4

1. **Create GA4 property**
2. **Get Measurement ID**
3. **Add to layout:**

```svelte
<!-- src/routes/+layout.svelte -->
<svelte:head>
	{#if browser && !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-XXXXXXXXXX');
		</script>
	{/if}
</svelte:head>
```

### Plausible Analytics (Privacy-friendly alternative)

```svelte
<svelte:head>
	<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
</svelte:head>
```

---

## 🎉 Acknowledgments

- **SvelteKit Team** - For an amazing framework
- **PocketBase Team** - For the excellent backend solution
- **Tailwind CSS Team** - For the utility-first CSS framework
- **FormSpark** - For the contact form backend
- **Vercel** - For hosting and deployment
- **Design Inspiration** - Dribbble, Behance communities
- **Open Source Community** - For continuous inspiration

---

## 📈 Roadmap

### Planned Features

- [ ] Blog system with PocketBase
- [ ] Newsletter integration
- [ ] Dark/Light mode toggle
- [ ] Multi-language support (i18n)
- [ ] Advanced search and filtering
- [ ] Tags and categories for projects
- [ ] Client portal (PocketBase auth)
- [ ] Project case studies
- [ ] Service booking system
- [ ] Real-time chat support
- [ ] Analytics dashboard
- [ ] PDF resume download
- [ ] API documentation
- [ ] Automated testing

### Version History

**v2.0.0** - PocketBase Integration

- Added PocketBase backend
- Dynamic content management
- Image handling
- Reviews system
- Enhanced sitemap

**v1.0.0** - Initial Release

- Static portfolio site
- Project showcase
- Services pages
- Contact form
- Error handling

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/paulmbui20/my-portfolio)
![GitHub stars](https://img.shields.io/github/stars/paulmbui20/my-portfolio)
![GitHub forks](https://img.shields.io/github/forks/paulmbui20/my-portfolio)
![GitHub issues](https://img.shields.io/github/issues/paulmbui20/my-portfolio)
![GitHub license](https://img.shields.io/github/license/paulmbui20/my-portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/paulmbui20/my-portfolio)

---

## 🌟 Show Your Support

If you found this project helpful, please consider:

- ⭐ **Star this repository** on GitHub
- 🐛 **Report bugs** via GitHub Issues
- 💡 **Suggest features** via GitHub Issues
- 🤝 **Contribute** by submitting PRs
- 📢 **Share** with others who might find it useful
- ☕ **Buy me a coffee** (if you're feeling generous!)

---

## 📞 Contact

**Paul Mbui**

- 🌐 Website: [paulmbui.co.ke](https://paulmbui.co.ke)
- 📧 Email: hello@paulmbui.co.ke
- 💼 LinkedIn: [linkedin.com/in/paulmbui](https://linkedin.com/in/paulmbui)
- 🐙 GitHub: [github.com/paulmbui20](https://github.com/paulmbui20)

---

## 🙏 Thank You

Thank you for checking out this project! If you use this portfolio template, I'd love to see what you build with it. Feel free to reach out!

**Built with ❤️ using SvelteKit and PocketBase**

---

<div align="center">

### ⚡ Powered by Modern Web Technologies

**[SvelteKit](https://kit.svelte.dev/)** • **[PocketBase](https://pocketbase.io/)** • **[Tailwind CSS](https://tailwindcss.com/)**

---

Made with ❤️ by [Paul Mbui](https://paulmbui.co.ke)

⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#-paul-mbui---modern-portfolio-website)
