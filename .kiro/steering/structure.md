# Project Structure & Organization

## Root Directory Structure

```
edugenius/
├── app/                    # Next.js App Router directory
├── components/             # Reusable React components
├── lib/                    # Utility libraries and configurations
├── public/                 # Static assets
├── .kiro/                  # Kiro AI assistant configuration
├── .next/                  # Next.js build output
├── node_modules/           # Dependencies
└── [config files]          # Various configuration files
```

## App Directory (`app/`)

Following Next.js 13+ App Router conventions:

```
app/
├── api/                    # API routes (serverless functions)
│   ├── auth/              # NextAuth.js authentication
│   └── gemini/            # AI integration endpoints
│       ├── mathematics/   # Math-specific AI endpoints
│       └── physics/       # Physics-specific AI endpoints
├── mathematics/           # Mathematics learning modules
│   └── concepts/         # Mathematical concept pages
│       ├── foundational/ # Basic math topics
│       └── intermediate-advanced/ # Advanced topics
├── physics/              # Physics learning modules
│   └── concepts/         # Physics concept pages
├── chemistry/            # Chemistry modules (placeholder)
├── auth/                 # Authentication pages
├── quiz/                 # Quiz functionality pages
├── solve/                # Problem solver pages
├── globals.css           # Global styles
├── layout.tsx            # Root layout component
└── page.tsx              # Home page
```

## Components Directory (`components/`)

Organized by functionality and reusability:

```
components/
├── quiz/                 # Quiz-specific components
├── Breadcrumb.tsx        # Navigation breadcrumbs
├── ColorToggle.tsx       # Theme toggle component
├── Footer.tsx            # Application footer
├── Loader.tsx            # Loading indicators
├── Navbar.tsx            # Main navigation
├── Results.tsx           # Quiz/solution results
├── SessionProvider.tsx   # NextAuth session context
└── ThemeProvider.tsx     # Theme context provider
```

## API Routes Structure

RESTful API organization by subject and functionality:

```
/api/auth/[...nextauth]/   # Authentication endpoints
/api/gemini/mathematics/   # Math AI endpoints
├── challenges/           # Generate math challenges
├── formulas/            # Generate formula quizzes
├── from-files/          # Generate quizzes from files
└── solve/               # Solve math problems
/api/gemini/physics/      # Physics AI endpoints
├── challenges/          # Generate physics challenges
├── from-files/          # Generate quizzes from files
└── solve/               # Solve physics problems
```

## File Naming Conventions

- **Pages**: Use `page.tsx` for route pages
- **Layouts**: Use `layout.tsx` for layout components
- **Components**: PascalCase (e.g., `Navbar.tsx`, `ThemeProvider.tsx`)
- **API Routes**: Use `route.ts` for API endpoints
- **Utilities**: camelCase (e.g., `auth.ts`)
- **Types**: Use `.d.ts` or inline types in TypeScript files

## Import Path Conventions

- Use `@/` alias for root-level imports
- Relative imports for same-directory files
- Absolute imports for cross-directory references

```typescript
// Root imports
import Navbar from '@/components/Navbar'
import { authOptions } from '@/lib/auth'

// Relative imports
import './globals.css'
```

## Styling Organization

- **Global styles**: `app/globals.css`
- **Component styles**: Tailwind CSS classes inline
- **Theme configuration**: `tailwind.config.ts`
- **Custom animations**: Defined in Tailwind config

## Asset Organization

```
public/
├── logo.png              # Application logo
└── [other static assets] # Images, icons, etc.
```

## Configuration Files

- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `eslint.config.mjs`: ESLint configuration
- `postcss.config.mjs`: PostCSS configuration
- `package.json`: Dependencies and scripts

## Development Patterns

- **Server Components**: Default for pages and layouts
- **Client Components**: Use `"use client"` directive for interactive components
- **API Routes**: Implement in `route.ts` files with proper HTTP methods
- **Error Handling**: Use try-catch blocks and appropriate HTTP status codes
- **Type Safety**: Define interfaces and use Zod for validation