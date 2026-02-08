# Design Document: Professional Portfolio Site

## Overview

This design document describes the architecture and implementation approach for a professional portfolio website built with Next.js and deployed to GitHub Pages. The site will feature a single-page layout with a dark theme, inspired by Matt Farley's portfolio style (mattfarley.ca), emphasizing clarity, simplicity, and professional presentation.

The site will be statically generated using Next.js App Router, styled with Tailwind CSS, and optimized for both mobile and desktop viewing. The design prioritizes fast loading, accessibility, and maintainability while showcasing professional background, skills, and experience for an engineering leadership audience.

## Architecture

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS 3+
- **Deployment**: GitHub Pages with GitHub Actions
- **Domain**: Custom domain (jmclaughlin.dev)
- **Build Output**: Static HTML/CSS/JS export

### Project Structure

```
professional-portfolio-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Hero.tsx            # Hero section component
│   ├── About.tsx           # About section component
│   ├── Skills.tsx          # Skills section component
│   ├── Experience.tsx      # Experience section component
│   └── Contact.tsx         # Contact section component
├── public/
│   ├── CNAME               # Custom domain configuration
│   └── .nojekyll           # Disable Jekyll processing
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── next.config.js          # Next.js configuration for static export
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

### Architectural Principles

1. **Static Generation**: All content is generated at build time for optimal performance
2. **Component-Based**: Each section is an isolated, reusable React component
3. **Mobile-First**: Responsive design starts with mobile layout and scales up
4. **Single Page**: All content on one page with smooth scrolling between sections
5. **Zero Runtime Dependencies**: No client-side data fetching or state management needed

## Components and Interfaces

### Root Layout (`app/layout.tsx`)

The root layout provides the HTML structure, metadata, and global styling.

```typescript
interface LayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: string
  description: string
  openGraph: {
    title: string
    description: string
    url: string
    siteName: string
    locale: string
    type: string
  }
}

function RootLayout({ children }: LayoutProps): JSX.Element
```

**Responsibilities**:
- Define page metadata for SEO
- Import global CSS and Tailwind
- Set up HTML structure with proper lang attribute
- Configure font loading (if custom fonts used)

### Main Page (`app/page.tsx`)

The main page component orchestrates all section components in order.

```typescript
function HomePage(): JSX.Element
```

**Responsibilities**:
- Render all section components in correct order
- Provide semantic HTML structure (main, sections)
- Ensure proper spacing between sections

### Hero Component (`components/Hero.tsx`)

The hero section displays the bold headline and value proposition.

```typescript
interface HeroProps {
  headline: string
  valueProposition: string
}

function Hero({ headline, valueProposition }: HeroProps): JSX.Element
```

**Responsibilities**:
- Display prominent headline with large, bold typography
- Show value proposition with supporting text
- Fill viewport height on desktop (min-h-screen)
- Center content vertically and horizontally
- Use dark background with light text

**Visual Design**:
- Headline: Large font size (text-5xl to text-7xl), bold weight
- Value proposition: Medium font size (text-xl to text-2xl), normal weight
- Centered alignment
- Generous padding and spacing

### About Component (`components/About.tsx`)

The about section presents professional background information.

```typescript
interface AboutProps {
  content: string
}

function About({ content }: AboutProps): JSX.Element
```

**Responsibilities**:
- Display professional background text
- Use readable typography (max-width for text blocks)
- Provide clear section heading
- Maintain consistent spacing with other sections

**Visual Design**:
- Section heading: Large, bold
- Content: Readable line length (max-w-2xl or max-w-3xl)
- Paragraph spacing for readability
- Dark background with light text

### Skills Component (`components/Skills.tsx`)

The skills section displays technical expertise organized by category.

```typescript
interface Skill {
  name: string
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

interface SkillsProps {
  skillCategories: SkillCategory[]
}

function Skills({ skillCategories }: SkillsProps): JSX.Element
```

**Responsibilities**:
- Display skills organized by category
- Show proficiency levels where applicable
- Use grid or flex layout for visual organization
- Provide clear section heading

**Visual Design**:
- Grid layout for skill categories (responsive: 1 column mobile, 2-3 columns desktop)
- Each skill displayed as a card or list item
- Proficiency indicated by visual element (dots, bars, or text)
- Consistent spacing and alignment

### Experience Component (`components/Experience.tsx`)

The experience section shows work history in reverse chronological order.

```typescript
interface ExperienceEntry {
  title: string
  company: string
  period: string
  description?: string
}

interface ExperienceProps {
  entries: ExperienceEntry[]
}

function Experience({ entries }: ExperienceProps): JSX.Element
```

**Responsibilities**:
- Display experience entries in reverse chronological order
- Show job title, company, and time period for each entry
- Include optional brief descriptions
- Use timeline or list layout
- Provide clear section heading

**Visual Design**:
- Vertical timeline or list layout
- Each entry clearly separated
- Title and company prominently displayed
- Period shown with subtle styling
- Description text with readable line length

### Contact Component (`components/Contact.tsx`)

The contact section provides contact information and links.

```typescript
interface ContactLink {
  type: 'email' | 'linkedin' | 'github'
  label: string
  url: string
}

interface ContactProps {
  links: ContactLink[]
}

function Contact({ links }: ContactProps): JSX.Element
```

**Responsibilities**:
- Display contact links (email, LinkedIn, GitHub)
- Use accessible link styling
- Provide clear section heading
- Include appropriate icons (optional)

**Visual Design**:
- Centered or left-aligned layout
- Links displayed as buttons or styled text
- Hover states for interactivity
- Sufficient spacing between links
- Optional: Icons for each contact method

## Data Models

### Site Content Structure

All content is defined as TypeScript constants in the page component or separate content file.

```typescript
interface SiteContent {
  hero: {
    headline: string
    valueProposition: string
  }
  about: {
    content: string
  }
  skills: {
    categories: SkillCategory[]
  }
  experience: {
    entries: ExperienceEntry[]
  }
  contact: {
    links: ContactLink[]
  }
}
```

**Content Management**:
- Content defined in TypeScript for type safety
- Easy to update by editing source file
- No CMS or external data source needed
- Content validated at build time

### Configuration Models

#### Next.js Configuration (`next.config.js`)

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '',
  trailingSlash: true
}
```

**Key Settings**:
- `output: 'export'`: Enable static export
- `images.unoptimized: true`: Disable Next.js image optimization (not supported in static export)
- `basePath: ''`: No base path for custom domain
- `trailingSlash: true`: Add trailing slashes to URLs for GitHub Pages compatibility

#### Tailwind Configuration (`tailwind.config.js`)

```javascript
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        background: '#0a0a0a',
        foreground: '#f5f5f5',
        accent: '#3b82f6'
      }
    }
  },
  plugins: []
}
```

**Theme Customization**:
- Dark background color
- Light foreground (text) color
- Accent color for links and highlights
- Responsive breakpoints (Tailwind defaults)

## Error Handling

### Build-Time Errors

**Type Errors**:
- TypeScript will catch type mismatches at build time
- Ensure all component props are correctly typed
- Validate content structure matches interfaces

**Build Failures**:
- Next.js build process will fail if components have errors
- GitHub Actions workflow will report build failures
- Check build logs for specific error messages

### Runtime Errors

Since this is a static site with no dynamic functionality, runtime errors should be minimal.

**Potential Issues**:
- Broken external links (LinkedIn, GitHub)
- Missing images or assets
- CSS not loading properly

**Mitigation**:
- Test all external links before deployment
- Verify all assets are in public directory
- Test build output locally before pushing

### Deployment Errors

**GitHub Actions Failures**:
- Workflow will fail if build fails
- Workflow will fail if deployment permissions are incorrect
- Check Actions tab in GitHub for error details

**DNS Configuration Issues**:
- CNAME file must contain correct domain
- DNS records must point to GitHub Pages
- Allow time for DNS propagation (up to 48 hours)

**Mitigation**:
- Include CNAME file in public directory
- Verify DNS settings in domain registrar
- Test deployment with GitHub Pages URL first

## Testing Strategy

This portfolio site will use a dual testing approach combining unit tests for specific functionality and property-based tests for universal correctness properties.

### Testing Framework

- **Unit Testing**: Jest with React Testing Library
- **Property-Based Testing**: fast-check (JavaScript/TypeScript property testing library)
- **Test Configuration**: Minimum 100 iterations per property test

### Unit Testing Approach

Unit tests will focus on:
- Component rendering with specific props
- Responsive layout behavior at specific breakpoints
- Accessibility features (ARIA labels, semantic HTML)
- Link functionality and external URL correctness
- Edge cases (empty content, missing optional fields)

### Property-Based Testing Approach

Property tests will verify universal properties across all valid inputs:
- Component rendering with randomly generated valid props
- Content structure preservation across different data
- Accessibility compliance across all content variations
- Layout consistency across viewport sizes

### Test Organization

Tests will be co-located with components:
```
components/
├── Hero.tsx
├── Hero.test.tsx          # Unit tests
├── Hero.property.test.tsx # Property tests
```

Each property test will include a comment tag referencing the design document:
```typescript
// Feature: professional-portfolio-site, Property 1: [property description]
```

### Testing Coverage Goals

- All components have unit tests for core functionality
- All correctness properties have corresponding property tests
- Accessibility requirements verified through automated tests
- Build process includes test execution before deployment


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Experience entries display in reverse chronological order

*For any* list of experience entries with time periods, when rendered by the Experience component, the entries should appear in reverse chronological order (most recent first).

**Validates: Requirements 7.2**

### Property 2: Experience entries include all required fields

*For any* experience entry with title, company, and period fields, when rendered by the Experience component, all three fields should be visible in the output.

**Validates: Requirements 7.3, 7.4, 7.5**

### Property 3: Interactive elements meet minimum touch target size

*For any* interactive element (link, button) in any component, the element should have a minimum touch target size of 44x44 pixels to ensure accessibility on touch devices.

**Validates: Requirements 3.4**

### Property 4: Components use semantic HTML elements

*For any* component in the portfolio site, the rendered output should use semantic HTML elements (header, main, section, article, nav, footer) rather than generic div elements for structural content.

**Validates: Requirements 14.1**

### Property 5: Text maintains sufficient color contrast

*For any* text element in any component, the color contrast ratio between text and background should meet WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text).

**Validates: Requirements 14.2**

### Property 6: Interactive elements support keyboard navigation

*For any* interactive element (link, button) in any component, the element should be keyboard accessible (focusable and activatable via keyboard).

**Validates: Requirements 14.3**

### Property 7: Interactive elements include appropriate ARIA labels

*For any* interactive element that requires additional context (icon-only buttons, external links), the element should include appropriate ARIA labels or aria-label attributes.

**Validates: Requirements 14.4, 8.6**

### Property 8: Font sizes remain readable across viewport sizes

*For any* viewport width between 320px and 1920px, all text elements should maintain a minimum font size of 16px (or 1rem) to ensure readability.

**Validates: Requirements 14.5, 3.3**
