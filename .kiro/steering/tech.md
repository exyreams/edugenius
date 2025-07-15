# Technology Stack & Build System

## Framework & Core Technologies

- **Next.js 15.1.5**: React framework with App Router, API routes, and server-side rendering
- **React 19**: UI library with modern hooks and concurrent features
- **TypeScript 5**: Static typing with strict mode enabled
- **Tailwind CSS 3.4.1**: Utility-first CSS framework with custom design system

## Key Libraries & Dependencies

### UI & Styling
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon collection
- **Framer Motion**: Animation and motion library
- **next-themes**: Theme switching (light/dark/system)
- **Tailwind Scrollbar**: Custom scrollbar styling

### AI & Backend Integration
- **Google Generative AI (@google/generative-ai)**: Gemini API integration for problem solving and quiz generation
- **NextAuth.js**: Authentication with GitHub and Discord providers
- **Zod**: TypeScript-first schema validation

### Mathematical & Educational Features
- **React KaTeX**: LaTeX math rendering
- **Chart.js + React-ChartJS-2**: Data visualization and charts
- **jsPDF**: PDF generation for solution exports
- **html2canvas**: Screenshot capture for image exports
- **JSZip**: File compression and archive creation

### UI Enhancement
- **Sonner**: Toast notifications
- **Canvas Confetti**: Celebration animations
- **React Timer Hook**: Timer functionality for quizzes
- **React Use**: Collection of essential React hooks
- **TSParticles**: Particle effects and animations

## Build System & Development

### Package Manager
- **npm** with `--legacy-peer-deps` flag for dependency resolution

### Common Commands
```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

### Code Quality & Formatting
- **ESLint**: Linting with Next.js, TypeScript, Standard, and Tailwind CSS rules
- **Prettier**: Code formatting with ESLint integration
- **TypeScript**: Strict mode with path aliases (`@/*` for root imports)

## Environment Configuration

Required environment variables:
- `GEMINI_API_KEY`: Google Generative AI API key
- `GITHUB_ID` & `GITHUB_SECRET`: GitHub OAuth credentials
- `DISCORD_CLIENT_ID` & `DISCORD_CLIENT_SECRET`: Discord OAuth credentials
- `NEXTAUTH_SECRET`: NextAuth.js encryption secret
- `NEXTAUTH_URL`: Application URL for NextAuth callbacks

## Development Guidelines

- Use TypeScript strict mode for all new code
- Follow ESLint and Prettier configurations
- Implement responsive design with Tailwind CSS
- Use Next.js App Router for routing and API routes
- Leverage server components where possible for performance
- Implement proper error handling with try-catch blocks
- Use Zod for API input validation