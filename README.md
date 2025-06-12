
# JBLinx Studio HUB

> **Professional Technology Showcase Platform**

A modern, responsive web application serving as the central hub for JBLinx Studio's projects, services, and technological expertise. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## ✨ Features

- **🚀 Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **📱 Responsive Design**: Mobile-first approach with seamless desktop experience
- **⚡ Performance Optimized**: Fast loading times and smooth animations
- **🎨 Professional UI**: Clean, modern design with consistent branding
- **♿ Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **🔧 Developer Friendly**: Hot reloading, TypeScript support, ESLint integration

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend framework with hooks and modern patterns |
| **TypeScript** | Type safety and enhanced developer experience |
| **Vite** | Fast build tool and development server |
| **Tailwind CSS** | Utility-first CSS framework |
| **shadcn/ui** | Pre-built, accessible UI components |
| **Lucide React** | Beautiful, customizable icons |
| **React Router** | Client-side routing |
| **React Query** | Server state management |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/jblinx-studio/hub.git

# Navigate to project directory
cd jblinx-studio-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type checking
npm run type-check   # TypeScript type checking
```

## 📁 Project Structure

```
jblinx-studio-hub/
├── public/                 # Static assets
│   ├── favicon.svg        # Company favicon
│   └── favicon.png        # Fallback favicon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navigation.tsx # Header navigation
│   │   ├── HeroSection.tsx# Landing hero section
│   │   ├── ServicesSection.tsx # Services showcase
│   │   ├── ProjectsSection.tsx # Featured projects
│   │   └── Footer.tsx     # Site footer
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main landing page
│   │   └── NotFound.tsx  # 404 error page
│   ├── components/ui/    # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── index.css        # Global styles & design system
├── DOCUMENTATION.md      # Technical documentation
├── LICENSE              # MIT License
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: `#3B82F6` (Blue-500) - Brand color, CTAs, links
- **Secondary**: Gray variants for text hierarchy
- **Background**: Clean whites with subtle tints
- **Success**: Green variants for positive states
- **Warning**: Yellow variants for attention states

### Typography
- **Font**: Inter (Google Fonts) - Clean, professional typeface
- **Scale**: Responsive typography from 14px to 72px
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing & Layout
- **Grid**: CSS Grid and Flexbox for responsive layouts
- **Spacing**: 4px base unit with consistent scale
- **Breakpoints**: Mobile-first responsive design
- **Animations**: Subtle, performant transitions

## 🌟 Key Sections

### Navigation
- Fixed header with backdrop blur
- Mobile hamburger menu
- Smooth scroll navigation
- Professional branding

### Hero Section
- Compelling value proposition
- Animated elements and CTAs
- Feature highlights
- Professional imagery

### Services
- Comprehensive service offerings
- Interactive hover effects
- Technology stack information
- Clear pricing and features

### Projects
- Featured project showcase
- Live project links
- Technology tags
- Status indicators

### Footer
- Contact information
- Social media links
- Legal pages
- Company information

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder contains optimized static files ready for deployment.

### Deployment Options

| Platform | Command | Notes |
|----------|---------|-------|
| **Vercel** | `vercel` | Automatic deployments from Git |
| **Netlify** | Drag & drop `dist/` | Supports form handling |
| **GitHub Pages** | Push to `gh-pages` | Free hosting for public repos |
| **AWS S3** | Upload `dist/` | Requires CloudFront for SPA |

### Environment Variables

Create `.env.local` for local development:

```env
# Optional: Analytics tracking
VITE_GA_TRACKING_ID=your_ga_id

# Optional: Contact form endpoint
VITE_CONTACT_ENDPOINT=your_api_endpoint
```

## 🔧 Development Guidelines

### Code Style
- **ESLint**: Configured for React and TypeScript
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks

### Component Structure
```tsx
// Standard component template
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  // Component-specific props
}

const Component = ({ className, ...props }: Props) => {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {/* Component content */}
    </div>
  );
};

export default Component;
```

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINT`)
- **CSS Classes**: kebab-case (e.g., `hero-section`)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests (when available)
npm test

# Check types
npm run type-check

# Lint code
npm run lint
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized with tree-shaking

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be v18+
```

**TypeScript Errors**
```bash
# Run type checking
npm run type-check

# Update TypeScript
npm update typescript
```

**Styling Issues**
```bash
# Rebuild Tailwind CSS
npm run build:css

# Check for conflicting styles
npm run lint:css
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- **Website**: [https://jblinx.studio](https://jblinx.studio)
- **Email**: hello@jblinx.studio
- **LinkedIn**: [JBLinx Studio](https://linkedin.com/company/jblinx-studio)
- **GitHub**: [github.com/jblinx-studio](https://github.com/jblinx-studio)

---

<div align="center">
  <p><strong>Built with ❤️ by JBLinx Studio</strong></p>
  <p>Pushing the boundaries of technology, one project at a time.</p>
</div>
