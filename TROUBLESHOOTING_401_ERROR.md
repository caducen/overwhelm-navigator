# 🔧 Troubleshooting 401 Error - Step-by-Step Guide

**Problem:** Getting "401 Unauthorized" when trying to sign up on osccad.com

---

## Step 1: Identify Your Hosting Platform

**Question:** Where is your website actually hosted?

### Option A: GoDaddy Traditional Hosting (cPanel/FTP)
- You uploaded files via FTP or cPanel File Manager
- The site runs from a folder on GoDaddy's servers
- **Action:** Continue to Step 2A below

### Option B: Modern Platform (Vercel, Netlify, Cloudflare Pages)
- You connected a Git repository
- Or deployed directly through their dashboard
- **Action:** Continue to Step 2B below

### Option C: Not Sure?
1. Go to https://osccad.com
2. Right-click → "View Page Source"
3. Look at the HTML - does it look like your React site?
4. Check the browser console - what errors do you see?

---

## Step 2A: GoDaddy Traditional Hosting

**Problem:** Traditional hosting doesn't support Vite environment variables easily.

### Option 1: Use a Config File (Recommended for Static Sites)

Since your site is built as static files, you have two options:

**A. Replace environment variables in the built files**

1. Build your site locally:
   ```bash
   npm run build
   ```

2. Open `dist/index.html` and `dist/assets/index-*.js`
3. Find and replace:
   - Find: `VITE_SUPABASE_URL` or the actual URL placeholder
   - Replace with your actual Supabase URL
4. Upload the modified files via FTP/cPanel

**B. Create a config file that loads at runtime**

Create a `config.js` file that's loaded before your app:

```javascript
// public/config.js
window.APP_CONFIG = {
  SUPABASE_URL: 'https://vqrytiqaqonsotissdgw.supabase.co',
  SUPABASE_KEY: 'sb_publishable_FuHFpxoUIO5PT7HR-IhLvQ_bNqbieFj'
};
```

Then modify your Supabase client to use this config.

---

## Step 2B: Modern Platform (Vercel/Netlify/Cloudflare)

### For Vercel:
1. Go to https://vercel.com
2. Log in and find your project (osccad.com)
3. Go to **Settings** → **Environment Variables**
4. Add:
   - `VITE_SUPABASE_URL` = `https://vqrytiqaqonsotissdgw.supabase.co`
   - `VITE_SUPABASE_PUBLISHABLE_KEY` = `sb_publishable_FuHFpxoUIO5PT7HR-IhLvQ_bNqbieFj`
5. Click **Save**
6. Go to **Deployments** → Click **Redeploy** (or it will auto-deploy)

### For Netlify:
1. Go to https://app.netlify.com
2. Log in and find your site (osccad.com)
3. Go to **Site configuration** → **Environment variables**
4. Add the same variables as above
5. Click **Save**
6. Trigger a new deploy

### For Cloudflare Pages:
1. Go to https://dash.cloudflare.com
2. Find your Pages project
3. Go to **Settings** → **Environment variables**
4. Add the same variables as above
5. Redeploy

---

## Step 3: Verify Your Supabase Configuration

### Check RLS Policy:
1. Go to https://supabase.com/dashboard
2. Select project: `vqrytiqaqonsotissdgw`
3. Go to **Table Editor** → `waitlist_signups`
4. Click **Policies** tab
5. Verify there's a policy named "Allow public inserts" or "Anyone can join waitlist"
6. It should allow **INSERT** for **anon** role

### If Policy is Missing:
1. Go to **SQL Editor** in Supabase
2. Run this SQL:
   ```sql
   -- Drop old policy if it exists
   DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist_signups;
   DROP POLICY IF EXISTS "Allow public inserts" ON waitlist_signups;
   
   -- Create correct policy
   CREATE POLICY "Allow public inserts" ON waitlist_signups
     FOR INSERT
     TO anon
     WITH CHECK (true);
   ```

---

## Step 4: Get Your Supabase Credentials

1. Go to https://supabase.com/dashboard/project/vqrytiqaqonsotissdgw
2. Click **Settings** (gear icon) → **API**
3. Copy these values:
   - **Project URL**: `https://vqrytiqaqonsotissdgw.supabase.co`
   - **anon/public key**: (the key that starts with `sb_publishable_...` or `eyJ...`)

**Important:** Use the **anon/public key**, NOT the service role key!

---

## Step 5: Test After Configuration

1. Clear your browser cache
2. Visit https://osccad.com
3. Open browser console (F12)
4. Try to sign up
5. Check console for errors - you should see more detailed error messages now

---

## Still Not Working?

1. **Check browser console** - What exact error do you see?
2. **Check Network tab** - What request is failing? What's the response?
3. **Verify Supabase project** - Is it active and running?
4. **Check CORS** - The Edge Function already has osccad.com in CORS, so this should be fine

---

## Quick Questions to Answer:

1. **Where is your site hosted?** (GoDaddy cPanel, Vercel, Netlify, other?)
2. **How did you deploy it?** (FTP upload, Git push, drag-and-drop?)
3. **Do you have access to environment variables** in your hosting platform?

Once you answer these, I can give you exact step-by-step instructions! 🚀
