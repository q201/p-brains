# Programming Brains - Next.js Blog Platform

## Overview

Programming Brains is a modern blog platform built with Next.js 15, focused on programming tutorials and educational content. The application features a public-facing blog with tutorials and articles, along with a complete admin dashboard for content and user management. The platform is designed to help developers learn React, TypeScript, Next.js, and other web development technologies through structured content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with App Router
- Uses React Server Components for improved performance
- Implements file-based routing with app directory structure
- Server-side rendering (SSR) for SEO optimization
- Static site generation (SSG) for blog posts using `generateStaticParams`

**Styling**: Tailwind CSS v4
- Utility-first CSS framework for rapid UI development
- Custom CSS variables for theming (light/dark mode support)
- Responsive design with mobile-first approach
- Uses PostCSS for processing

**UI Components**:
- Client components for interactive features (forms, navigation, authentication)
- Server components for static content rendering
- Reusable component library (Header, Footer, Admin components)
- Image optimization through Next.js Image component with Unsplash integration

**Key Design Patterns**:
- Separation of concerns between client and server components
- Loading states, error boundaries, and not-found pages for better UX
- Template and layout patterns for consistent page structure

### Backend Architecture

**Database**: Prisma ORM
- Type-safe database access layer
- Schema-first approach with migrations
- Supports multiple database providers (currently configured for relational databases)
- Singleton pattern for Prisma Client to prevent connection exhaustion in development

**Authentication & Authorization**:
- JWT-based authentication system
- HTTP-only cookies for token storage (secure against XSS)
- bcryptjs for password hashing (12 rounds)
- Role-based access control (USER, ADMIN roles)
- Custom `withAuth` middleware for protecting API routes
- Token expiration: 7 days

**API Architecture**:
- RESTful API design using Next.js Route Handlers
- Authentication endpoints: `/api/auth/login`, `/api/auth/register`, `/api/auth/logout`, `/api/auth/me`
- Admin endpoints: `/api/admin/users`, `/api/admin/blogs`, `/api/admin/stats`
- Public endpoints: `/api/blogs/[slug]`
- Consistent error handling with appropriate HTTP status codes
- JSON request/response format

**Data Models**:
- User model: email, password (hashed), name, role, timestamps
- Post/Blog model: title, slug, content, published status, author relationship
- Database seeding script for development environment

**Security Measures**:
- Password hashing with bcryptjs
- JWT token validation
- Role-based authorization checks
- Environment variable protection for secrets
- Production safeguards (seed script disabled in production)

### Application Structure

**Page Routes**:
- `/` - Home page with featured tutorials and blog posts
- `/about` - About page with mission and team information
- `/contact` - Contact page with form
- `/blog/[slug]` - Individual blog post pages (SSG)
- `/login` - User login page
- `/register` - User registration page
- `/admin` - Admin dashboard (protected)
- `/admin/users` - User management (protected)
- `/admin/blogs` - Blog management (protected)
- `/admin/blogs/new` - Create new blog (protected)
- `/admin/blogs/edit/[slug]` - Edit existing blog (protected)
- `/latest` - Latest updates section with custom layouts

**SEO Optimization**:
- Comprehensive metadata configuration
- Open Graph tags for social media sharing
- Twitter card support
- Robots.txt configuration
- Sitemap generation
- Structured data preparation

## External Dependencies

### Core Technologies
- **Next.js 15.5.3** - React framework for production
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type safety and developer experience
- **Tailwind CSS 4.x** - Utility-first CSS framework

### Database & ORM
- **Prisma 6.16.2** - Database ORM and migration tool
- **@prisma/client** - Type-safe database client

### Authentication
- **jsonwebtoken 9.0.2** - JWT token generation and verification
- **bcryptjs 3.0.2** - Password hashing library

### Development Tools
- **ESLint 9.x** - Code linting with Next.js configuration
- **tsx 4.19.2** - TypeScript execution for scripts (database seeding)

### Image Hosting
- **Unsplash** - External image CDN for blog post images and hero sections
  - Configured in `next.config.ts` under `remotePatterns`

### Deployment Considerations
- Configured for Replit deployment with custom host/port settings
- Development server runs on port 5000
- Allowed dev origins for Replit environment
- Vercel Platform ready for production deployment

### Environment Variables Required
- `JWT_SECRET` - Secret key for JWT token signing
- `DATABASE_URL` - Database connection string
- `ADMIN_PASSWORD` - Default admin password for seeding
- `USER_PASSWORD` - Default user password for seeding
- `NODE_ENV` - Environment indicator (development/production)