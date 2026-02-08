# Implementation Plan: Professional Portfolio Site

## Overview

This implementation plan breaks down the professional portfolio site into discrete coding tasks. The site will be built using Next.js 14+ with App Router, styled with Tailwind CSS, and configured for static export to GitHub Pages. Each task builds incrementally, with testing integrated throughout to validate correctness early.

## Tasks

- [x] 1. Initialize Next.js project with TypeScript and Tailwind CSS
  - Create Next.js project with App Router and TypeScript
  - Install and configure Tailwind CSS
  - Set up project structure (app/, components/, public/ directories)
  - Configure next.config.js for static export (output: 'export', images.unoptimized: true)
  - Create tailwind.config.js with dark theme colors
  - Set up tsconfig.json with strict mode
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1_

- [x] 2. Create root layout and global styles
  - [x] 2.1 Implement app/layout.tsx with metadata and HTML structure
    - Define metadata for SEO (title, description, Open Graph tags)
    - Set up root HTML structure with proper lang attribute
    - Import global CSS
    - _Requirements: 1.1, 14.1_
  
  - [x] 2.2 Create app/globals.css with Tailwind imports and custom styles
    - Import Tailwind base, components, and utilities
    - Define custom CSS variables for dark theme if needed
    - Set base font styles
    - _Requirements: 2.1, 2.2_

- [x] 3. Implement Hero component
  - [x] 3.1 Create components/Hero.tsx with TypeScript interface
    - Define HeroProps interface (headline, valueProposition)
    - Implement Hero component with bold headline and value proposition
    - Use Tailwind classes for dark theme, large typography, and centering
    - Make component fill viewport height on desktop (min-h-screen)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 2.3_
  
  - [ ]* 3.2 Write unit tests for Hero component
    - Test component renders headline and value proposition
    - Test bold styling is applied to headline
    - Test component uses semantic HTML
    - _Requirements: 4.1, 4.2, 4.4_
  
  - [ ]* 3.3 Write property test for semantic HTML usage
    - **Property 4: Components use semantic HTML elements**
    - **Validates: Requirements 14.1**

- [x] 4. Implement About component
  - [x] 4.1 Create components/About.tsx with TypeScript interface
    - Define AboutProps interface (content)
    - Implement About component with section heading and content
    - Use max-width for readable line length
    - Apply dark theme styling
    - _Requirements: 5.1, 5.2, 5.3_
  
  - [ ]* 4.2 Write unit tests for About component
    - Test component renders content
    - Test readable typography (max-width applied)
    - Test section appears after Hero
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 5. Implement Skills component
  - [x] 5.1 Create components/Skills.tsx with TypeScript interfaces
    - Define Skill interface (name, proficiency)
    - Define SkillCategory interface (category, skills array)
    - Define SkillsProps interface (skillCategories array)
    - Implement Skills component with grid layout
    - Display skills organized by category
    - Show proficiency levels visually
    - Use responsive grid (1 column mobile, 2-3 columns desktop)
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_
  
  - [ ]* 5.2 Write unit tests for Skills component
    - Test component renders skill categories
    - Test proficiency levels are displayed
    - Test responsive grid layout
    - _Requirements: 6.4, 6.5_

- [x] 6. Implement Experience component
  - [x] 6.1 Create components/Experience.tsx with TypeScript interfaces
    - Define ExperienceEntry interface (title, company, period, description)
    - Define ExperienceProps interface (entries array)
    - Implement Experience component with timeline/list layout
    - Sort entries in reverse chronological order
    - Display title, company, period for each entry
    - Include optional description field
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.7_
  
  - [ ]* 6.2 Write property test for reverse chronological ordering
    - **Property 1: Experience entries display in reverse chronological order**
    - **Validates: Requirements 7.2**
  
  - [ ]* 6.3 Write property test for required fields rendering
    - **Property 2: Experience entries include all required fields**
    - **Validates: Requirements 7.3, 7.4, 7.5**
  
  - [ ]* 6.4 Write unit tests for Experience component
    - Test component renders entries
    - Test optional description field renders when present
    - _Requirements: 7.1, 7.7_

- [x] 7. Implement Contact component
  - [x] 7.1 Create components/Contact.tsx with TypeScript interfaces
    - Define ContactLink interface (type, label, url)
    - Define ContactProps interface (links array)
    - Implement Contact component with links for email, LinkedIn, GitHub
    - Use accessible link styling with hover states
    - Include appropriate ARIA labels for external links
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_
  
  - [ ]* 7.2 Write property test for ARIA labels on interactive elements
    - **Property 7: Interactive elements include appropriate ARIA labels**
    - **Validates: Requirements 14.4, 8.6**
  
  - [ ]* 7.3 Write unit tests for Contact component
    - Test component renders all contact links
    - Test links have correct URLs
    - Test component appears at end of page
    - _Requirements: 8.3, 8.4, 8.5, 8.2_

- [x] 8. Create main page and wire components together
  - [x] 8.1 Implement app/page.tsx with all section components
    - Import all components (Hero, About, Skills, Experience, Contact)
    - Define site content structure (SiteContent interface)
    - Create content constants with actual data
    - Render components in correct order with proper spacing
    - Use semantic HTML (main, section elements)
    - _Requirements: 4.3, 5.2, 8.2, 9.1, 9.2, 9.3, 9.4, 9.5_
  
  - [ ]* 8.2 Write unit tests for main page
    - Test all sections render in correct order
    - Test Hero appears first, Contact appears last
    - Test excluded sections are not present (projects, testimonials, partners, blog)
    - _Requirements: 4.3, 5.2, 8.2, 9.1, 9.2, 9.3, 9.4_

- [x] 9. Checkpoint - Ensure all tests pass and site renders correctly
  - Run all tests (unit and property tests)
  - Build the site locally (npm run build)
  - Preview the static export (serve out/ directory)
  - Verify all sections display correctly
  - Test responsive behavior at different viewport sizes
  - Ask the user if questions arise

- [x] 10. Implement responsive design and accessibility features
  - [x] 10.1 Add responsive layout classes to all components
    - Ensure mobile-first approach (single column on mobile)
    - Add responsive breakpoints for tablet and desktop
    - Test layout at 320px, 768px, 1024px, and 1920px widths
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [ ]* 10.2 Write property test for touch target sizes
    - **Property 3: Interactive elements meet minimum touch target size**
    - **Validates: Requirements 3.4**
  
  - [ ]* 10.3 Write property test for color contrast
    - **Property 5: Text maintains sufficient color contrast**
    - **Validates: Requirements 14.2**
  
  - [ ]* 10.4 Write property test for keyboard navigation
    - **Property 6: Interactive elements support keyboard navigation**
    - **Validates: Requirements 14.3**
  
  - [ ]* 10.5 Write property test for font size readability
    - **Property 8: Font sizes remain readable across viewport sizes**
    - **Validates: Requirements 14.5, 3.3**
  
  - [ ]* 10.6 Write unit tests for responsive behavior
    - Test mobile viewport renders single-column layout
    - Test desktop viewport renders optimized layout
    - _Requirements: 3.1, 3.2_

- [x] 11. Configure GitHub Pages deployment
  - [x] 11.1 Create public/CNAME file with custom domain
    - Add jmclaughlin.dev to CNAME file
    - _Requirements: 10.2, 11.1_
  
  - [x] 11.2 Create public/.nojekyll file
    - Add empty .nojekyll file to disable Jekyll processing
    - _Requirements: 10.1_
  
  - [x] 11.3 Create .github/workflows/deploy.yml for automated deployment
    - Set up GitHub Actions workflow triggered on push to main
    - Add steps to checkout code, install dependencies, run tests
    - Add step to build Next.js static export (npm run build)
    - Add step to deploy to GitHub Pages
    - Configure workflow to fail on test failures
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 10.3_
  
  - [ ]* 11.4 Write unit tests for deployment configuration
    - Test CNAME file exists and contains correct domain
    - Test .nojekyll file exists
    - Test workflow file exists and contains correct steps
    - _Requirements: 10.2, 12.1, 12.3, 12.4_

- [x] 12. Optimize performance and bundle size
  - [x] 12.1 Optimize images and assets
    - Compress any images used in the site
    - Use appropriate image formats (WebP where supported)
    - Ensure images are in public/ directory
    - _Requirements: 13.2, 10.4_
  
  - [x] 12.2 Review and minimize dependencies
    - Remove any unused dependencies from package.json
    - Verify only necessary packages are included
    - _Requirements: 13.5_
  
  - [x] 12.3 Verify build output and bundle sizes
    - Run production build
    - Check bundle sizes are reasonable
    - Verify static export includes all necessary files
    - _Requirements: 13.3, 10.4_

- [x] 13. Final checkpoint - Complete testing and validation
  - Run full test suite (all unit and property tests)
  - Build production static export
  - Test static export locally
  - Verify all requirements are met
  - Verify accessibility with automated tools
  - Test responsive design at multiple breakpoints
  - Ensure all tests pass, ask the user if questions arise

- [-] 14. Deploy to GitHub Pages
  - Push code to GitHub repository
  - Verify GitHub Actions workflow runs successfully
  - Check deployment completes without errors
  - Test site loads at GitHub Pages URL
  - Verify CNAME configuration is correct
  - _Requirements: 10.5, 11.3, 12.2_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests should run minimum 100 iterations each
- All property tests must include comment tags: `// Feature: professional-portfolio-site, Property N: [description]`
- Checkpoints ensure incremental validation and provide opportunities to address issues
- Content (actual text for hero, about, skills, experience) will be provided by user during implementation
- DNS configuration for custom domain is handled outside of code (in domain registrar)
