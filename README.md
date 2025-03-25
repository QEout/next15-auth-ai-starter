# Next.js 15 + Auth.js + Vercel AI Starter Template

[English](README.md) | [中文](README.zh-CN.md)

A full-stack application template built with [Next.js 15](https://nextjs.org/), [Auth.js](https://authjs.dev/), and [Vercel AI SDK](https://sdk.vercel.ai/docs). This template provides a modern authentication system and AI integration to help developers quickly build AI-powered web applications.

## Tech Stack

- 🚀 **Next.js 15**: Latest Next.js framework with App Router and React Server Components
- 🔐 **Auth.js**: Powerful authentication solution with multiple login options
- 🤖 **Vercel AI SDK**: Easy AI integration with streaming support
- 📦 **TypeScript**: Complete type support for better code quality
- 🎨 **Tailwind CSS**: Modern CSS framework for beautiful interfaces
- 💅 **shadcn/ui**: Beautiful React components based on Radix UI and Tailwind CSS
- 🗃️ **Drizzle ORM**: Type-safe ORM with Neon Postgres
- 🚅 **Edge Runtime**: Edge runtime support for faster response times

## Quick Start

1. Clone the project:

```bash
git clone https://github.com/QEout/next15-auth-ai-starter.git
cd next15-auth-ai-starter
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure environment variables:

Copy `.env.example` to `.env.local` and fill in the required variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Key Features

- 📝 User Authentication (Email, GitHub, Google, etc.)
- 🤖 AI Chat Interface Integration
- 💾 Database Integration and Management
- 🔒 Secure API Routes
- 🎯 Type-safe Data Operations
- 🎨 Beautiful UI Components (based on shadcn/ui):
  - Responsive Navigation Bar
  - Dark Mode Support
  - Accessible Form Controls
  - Modern Dialogs and Toasts
  - Animated Transitions

## Deployment

This project can be deployed to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FQEout%2Fnext15-auth-ai-starter)

## Environment Variables

The project requires the following environment variables:

```env
# Auth.js Configuration
AUTH_SECRET=your-auth-secret
AUTH_GITHUB_ID=your-github-id
AUTH_GITHUB_SECRET=your-github-secret

# Database Configuration
DATABASE_URL=your-database-url

# AI API Configuration
OPENAI_API_KEY=your-openai-api-key
```

## Contributing

Pull requests and issues are welcome! Before submitting, please ensure:

1. Code is formatted
2. All tests pass
3. Commit messages are clear and descriptive

## License

MIT License - see [LICENSE](LICENSE) file for details

