# Overwhelm Navigator - Context Report for Claude
**Date:** January 5, 2025  
**Project Path:** `/Users/oscarcaducen/Projects/overwhelm-navigator`  
**Status:** Development server running at `http://localhost:8080`

---

## Executive Summary

This is a **fully independent** React/Vite landing page project for **Overwhelm Navigator** - a product that helps people manage cognitive overload. The project has been downloaded from Lovable and is now completely under user control. All code, Supabase setup, and deployment are independent of Lovable.

---

## Part 1: Project Identity

### Product Name
**Overwhelm Navigator** (consistent across all files)

### Project Details
- **Package Name:** `overwhelm-navigator`
- **Folder Name:** `overwhelm-navigator`
- **Type:** Landing page with waitlist signup
- **Purpose:** Pre-launch landing page to collect email signups

### Branding Consistency
✅ All references use "Overwhelm Navigator" (not "Overloaded" or "Clear Mind Missions")
- Email templates
- Package.json
- README.md
- All user-facing text

---

## Part 2: Current Project Status

### ✅ Completed
1. **Rebranding Complete**
   - Package name updated to `overwhelm-navigator`
   - Folder renamed from `clear-mind-missions` to `overwhelm-navigator`
   - All email content uses "Overwhelm Navigator"
   - README.md rewritten (no Lovable references)

2. **Security - Partial**
   - ✅ `.gitignore` updated to protect `.env` files
   - ✅ `.env` removed from Git tracking
   - ⚠️ **Still need:** Security fixes for Edge Function, EmailCapture component, and environment validation

3. **Development Setup**
   - ✅ Dependencies installed
   - ✅ Development server working at `http://localhost:8080`
   - ✅ Hot reload enabled

### ⚠️ Pending Security Fixes (CRITICAL - Before Deployment)
1. **Supabase Edge Function** (`supabase/functions/send-waitlist-confirmation/index.ts`)
   - Needs: Input validation, CORS restrictions, rate limiting, remove email logging
   
2. **EmailCapture Component** (`src/components/landing/EmailCapture.tsx`)
   - Needs: Source parameter validation, rate limiting on resend, remove production console logs
   
3. **Supabase Client** (`src/integrations/supabase/client.ts`)
   - Needs: Environment variable validation

4. **Optional Cleanup**
   - Remove `lovable-tagger` dependency (devDependency only, doesn't affect production)

---

## Part 3: Project Structure

### Key Directories
```
overwhelm-navigator/
├── src/
│   ├── components/
│   │   ├── landing/          # Landing page sections (11 components)
│   │   │   ├── EmailCapture.tsx    # ⚠️ Needs security fixes
│   │   │   ├── Hero.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── IsThisYou.tsx
│   │   │   ├── WhyOverloaded.tsx    # Note: Name is about problem, not product
│   │   │   ├── HowItHelps.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   └── ui/               # shadcn/ui components (don't modify)
│   ├── pages/
│   │   ├── Index.tsx         # Main landing page (assembles all sections)
│   │   └── NotFound.tsx      # 404 page
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts     # ⚠️ Needs env validation
│   │       └── types.ts       # Auto-generated, don't modify
│   └── lib/
│       └── utils.ts          # Utility functions
├── supabase/
│   ├── functions/
│   │   └── send-waitlist-confirmation/
│   │       └── index.ts       # ⚠️ CRITICAL - Needs security fixes
│   ├── migrations/
│   │   └── 20260104173419_*.sql  # Database schema (RLS enabled)
│   └── config.toml           # Supabase config
├── public/                   # Static assets
├── package.json              # ✅ Updated to "overwhelm-navigator"
├── README.md                  # ✅ Updated, no Lovable refs
├── vite.config.ts            # ⚠️ Has lovable-tagger import (optional to remove)
├── .gitignore                # ✅ Updated to protect .env files
└── .env                       # ⚠️ Local file, NOT in Git (protected)
```

### Landing Page Sections (in order)
1. **Header** - Navigation bar
2. **Hero** - Main headline + email capture
3. **SocialProof** - Social validation
4. **IsThisYou** - Problem identification
5. **WhyOverloaded** - Explains the problem (name is intentional)
6. **HowItHelps** - Solution benefits
7. **HowItWorks** - Process explanation
8. **Pricing** - Founding Crew Program
9. **FAQ** - Common questions
10. **FinalCTA** - Final call-to-action
11. **Footer** - Footer links

---

## Part 4: Technology Stack

### Frontend
- **React 18** + **TypeScript**
- **Vite 7.3.0** (build tool)
- **shadcn/ui** (component library)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **React Router** (routing)

### Backend
- **Supabase** (Database + Edge Functions)
  - Project ID: `rlcwotrlkcdklcazmmnb`
  - Database: `waitlist_signups` table
  - Edge Function: `send-waitlist-confirmation`
  - RLS: Enabled (INSERT only, secure)

### Email Service
- **Resend API** (via Supabase Edge Function)

### Development
- **Node.js** + **npm**
- Development server: `http://localhost:8080`
- Hot reload: Enabled

---

## Part 5: Environment Variables

### Required for Local Development (`.env` file)
```env
VITE_SUPABASE_URL=https://rlcwotrlkcdklcazmmnb.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
```

### Required for Supabase Edge Function (set in Supabase Dashboard)
- `RESEND_API_KEY=your_resend_api_key`

### Important Notes
- ✅ `.env` is in `.gitignore` (protected)
- ✅ `.env` removed from Git tracking
- ⚠️ Environment variables NOT validated yet (needs fix)

---

## Part 6: Lovable Independence Status

### ✅ COMPLETELY INDEPENDENT

**What this means:**
- User owns 100% of the code
- Supabase is user's independent project
- No Lovable runtime dependencies
- Can deploy anywhere
- Can use any IDE

### Remaining Lovable References (Optional to Remove)
1. **`lovable-tagger`** in `package.json` (devDependency only)
   - Only used in development mode
   - Adds metadata tags for Lovable's editor
   - **Does NOT affect production builds**
   - Can be safely removed

2. **Import in `vite.config.ts`**
   - `import { componentTagger } from "lovable-tagger"`
   - Only active in development mode
   - Can be removed if desired

### Action Required: None
User is already independent. Removing `lovable-tagger` is optional cleanup only.

---

## Part 7: Security Status

### ✅ Completed
- `.gitignore` protects environment files
- `.env` removed from Git tracking
- Database RLS enabled (INSERT only, no SELECT)

### ⚠️ CRITICAL - Must Fix Before Deployment

1. **Supabase Edge Function** (`supabase/functions/send-waitlist-confirmation/index.ts`)
   - **Current Issues:**
     - No server-side input validation
     - CORS allows all origins (`*`)
     - No rate limiting (vulnerable to spam)
     - Logs email addresses (privacy risk)
     - No error sanitization
   - **Needs:**
     - Email validation on server
     - CORS restricted to user's domains
     - Rate limiting (3 requests/minute per email)
     - Remove email logging
     - Proper error handling

2. **EmailCapture Component** (`src/components/landing/EmailCapture.tsx`)
   - **Current Issues:**
     - Source parameter can be manipulated
     - No rate limiting on resend button
     - Console logs in production
   - **Needs:**
     - Source parameter validation/whitelist
     - Resend cooldown (1 minute)
     - Remove production console logs

3. **Supabase Client** (`src/integrations/supabase/client.ts`)
   - **Current Issues:**
     - No environment variable validation
     - App may fail silently
   - **Needs:**
     - Validate env vars exist on startup
     - Throw clear errors if missing

---

## Part 8: Development Workflow

### Starting Development Server
```bash
cd /Users/oscarcaducen/Projects/overwhelm-navigator
npm run dev
```
Server runs at: `http://localhost:8080`

### Making Changes
- Edit files in `src/components/landing/` for landing page changes
- Changes auto-reload in browser (hot reload)
- Keep terminal open while developing

### Building for Production
```bash
npm run build
```
Output: `dist/` folder

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

---

## Part 9: Key Files for Landing Page Edits

### Main Landing Page
- **`src/pages/Index.tsx`** - Assembles all sections in order

### Individual Sections (Edit These)
- `src/components/landing/Hero.tsx` - Main headline and CTA
- `src/components/landing/EmailCapture.tsx` - Email signup form
- `src/components/landing/Pricing.tsx` - Pricing section
- `src/components/landing/FAQ.tsx` - FAQ content
- `src/components/landing/Header.tsx` - Navigation
- `src/components/landing/Footer.tsx` - Footer

### Styling
- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - Global styles
- Individual components use Tailwind classes

### SEO/Meta Tags
- `src/pages/Index.tsx` - Contains Helmet with meta tags
- `index.html` - Base HTML template

---

## Part 10: Important Notes for Claude

### Naming Conventions
- ✅ Always use "Overwhelm Navigator" (not "Overloaded")
- ✅ Component `WhyOverloaded` is intentional (describes the problem, not product)
- ✅ Package name: `overwhelm-navigator` (kebab-case)

### What NOT to Change
- ❌ Don't modify `src/integrations/supabase/types.ts` (auto-generated)
- ❌ Don't modify `src/components/ui/*` (shadcn/ui components)
- ❌ Don't commit `.env` file (already protected)

### What CAN Be Changed
- ✅ All landing page components in `src/components/landing/`
- ✅ Content, copy, styling
- ✅ Add new sections
- ✅ Modify existing sections

### Security Reminders
- ⚠️ Before deployment: Apply all security fixes
- ⚠️ Never commit `.env` file
- ⚠️ Validate all user input
- ⚠️ Add rate limiting

### Supabase Notes
- Database: `waitlist_signups` table
- RLS: Only INSERT allowed (secure)
- Edge Function: Needs security fixes before production
- Project ID: `rlcwotrlkcdklcazmmnb`

### Development Notes
- Server runs on port 8080
- Hot reload enabled
- TypeScript strict mode
- ESLint configured

---

## Part 11: Common Tasks

### Adding a New Section
1. Create component in `src/components/landing/NewSection.tsx`
2. Import and add to `src/pages/Index.tsx`
3. Follow existing component patterns

### Changing Email Content
- Edit: `supabase/functions/send-waitlist-confirmation/index.ts`
- Update HTML template in the function

### Updating Pricing
- Edit: `src/components/landing/Pricing.tsx`

### Modifying FAQ
- Edit: `src/components/landing/FAQ.tsx`
- Update the `faqItems` array

### Changing Colors/Styles
- Edit: `tailwind.config.ts` for theme colors
- Edit component files for specific styles

---

## Part 12: Deployment Checklist (When Ready)

### Before Deployment
- [ ] Apply all security fixes
- [ ] Remove `lovable-tagger` (optional)
- [ ] Test email signup flow
- [ ] Test build: `npm run build`
- [ ] Verify all environment variables set

### Deployment Steps
- [ ] Choose hosting platform (Vercel/Netlify/Cloudflare)
- [ ] Set environment variables in platform
- [ ] Configure custom domain
- [ ] Update CORS in Edge Function
- [ ] Deploy and test

---

## Part 13: Current State Summary

### Working
- ✅ Development server running
- ✅ Landing page displays correctly
- ✅ All sections visible
- ✅ Hot reload functional
- ✅ Dependencies installed

### Needs Attention
- ⚠️ Security fixes (before deployment)
- ⚠️ Environment variable validation
- ⚠️ Optional: Remove Lovable dependency

### Ready For
- ✅ Development and editing
- ✅ Design changes
- ✅ Content updates
- ✅ Testing locally
- ⚠️ Deployment (after security fixes)

---

## Part 14: Quick Reference

### Project Identity
- **Name:** Overwhelm Navigator
- **Type:** Landing page with waitlist
- **Status:** Pre-launch

### Key URLs
- **Local Dev:** `http://localhost:8080`
- **Supabase Project:** `rlcwotrlkcdklcazmmnb`

### Key Commands
- Start dev: `npm run dev`
- Build: `npm run build`
- Stop server: `Ctrl+C`

### Key Files
- Main page: `src/pages/Index.tsx`
- Email form: `src/components/landing/EmailCapture.tsx`
- Email function: `supabase/functions/send-waitlist-confirmation/index.ts`

---

## Final Notes for Claude

1. **User is independent** - No Lovable dependency needed
2. **Security is critical** - Fixes must be applied before deployment
3. **Development is active** - Server running, ready for changes
4. **Branding is consistent** - Always use "Overwhelm Navigator"
5. **Structure is clear** - Landing page components in `src/components/landing/`

**When making changes:**
- Focus on landing page components
- Maintain branding consistency
- Consider security implications
- Test changes in browser (hot reload)
- Keep security fixes in mind for deployment

---

**Report Generated:** January 5, 2025  
**Status:** Development active, security fixes pending  
**Next Steps:** Continue development, apply security fixes before deployment

