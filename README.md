# Overwhelm Navigator

A landing page for **Overwhelm Navigator** — a guided system + AI copilot that cuts through cognitive overload so you can do your best work without burning out.

## Project Overview

This is a modern, responsive landing page built with React, TypeScript, and Vite. It includes a waitlist signup system powered by Supabase and email confirmations via Resend.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Backend**: Supabase (Database + Edge Functions)
- **Email**: Resend API
- **Routing**: React Router
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- A Supabase account and project
- A Resend API key (for email confirmations)

### Installation

1. Clone the repository:
   ```sh
   git clone <YOUR_GIT_URL>
   cd overwhelm-navigator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

4. Set up Supabase Edge Function secrets:
   - Go to your Supabase Dashboard → Edge Functions → `send-waitlist-confirmation`
   - Add secret: `RESEND_API_KEY=your_resend_api_key`

5. Start the development server:
   ```sh
   npm run dev
   ```

The app will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── landing/        # Landing page components
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   ├── integrations/
│   │   └── supabase/       # Supabase client and types
│   └── lib/                # Utilities
├── supabase/
│   ├── functions/          # Edge Functions
│   └── migrations/         # Database migrations
└── public/                 # Static assets
```

## Features

- ✅ Responsive landing page with 11 sections
- ✅ Email waitlist signup with validation
- ✅ Email confirmation via Resend
- ✅ Database storage in Supabase
- ✅ Row Level Security (RLS) enabled
- ✅ SEO optimized with meta tags
- ✅ Smooth animations with Framer Motion

## Deployment

### Environment Variables

Make sure to set these environment variables in your hosting platform:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

And in Supabase Edge Function secrets:

- `RESEND_API_KEY`

### Recommended Hosting Platforms

- **Vercel** - Excellent for React/Vite projects
- **Netlify** - Great CI/CD integration
- **Cloudflare Pages** - Fast global CDN

### Build and Deploy

```sh
npm run build
```

The `dist` folder contains the production build ready to deploy.

## Custom Domain

You can connect a custom domain through your hosting provider. Common steps:

1. Add your domain in hosting platform settings
2. Update DNS records as instructed
3. Update CORS origins in Supabase Edge Function to include your domain

## License

Private project - All rights reserved.

## Support

For issues or questions, please contact the development team.
