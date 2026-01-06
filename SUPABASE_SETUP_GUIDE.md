# Supabase Setup Guide - New Project
**Date:** January 5, 2026  
**Project:** Overwhelm Navigator

---

## Step 1: Get Your Project Credentials

1. In Supabase Dashboard, click **Settings** (gear icon) → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

**Save these - we'll use them in Step 4!**

---

## Step 2: Create Database Table

### Option A: Using SQL Editor (Recommended)

1. Click **SQL Editor** in the left sidebar
2. Click **"New query"**
3. Copy and paste this SQL:

```sql
-- Create waitlist_signups table
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for signups)
CREATE POLICY "Allow public inserts" ON waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_email ON waitlist_signups(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_created_at ON waitlist_signups(created_at DESC);
```

4. Click **"Run"** (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

### Option B: Using Table Editor (Manual)

1. Click **Table Editor** → **New Table**
2. Name: `waitlist_signups`
3. Add columns:
   - `id`: uuid, Primary Key, Default: `gen_random_uuid()`
   - `email`: text, Unique, Not Null
   - `source`: text, Nullable
   - `created_at`: timestamptz, Default: `now()`
4. Click **Save**
5. Go to **Policies** tab
6. Enable RLS
7. Create policy: "Allow public inserts" for INSERT to `anon`

---

## Step 3: Deploy Edge Function

1. Click **Edge Functions** in the left sidebar
2. Click **"Create a new function"**
3. Name: `send-waitlist-confirmation`
4. Copy the entire contents of: `supabase/functions/send-waitlist-confirmation/index.ts`
5. Paste into the editor
6. Click **"Deploy"**

---

## Step 4: Set RESEND_API_KEY Secret

1. In Edge Functions, click **"Secrets"** or **"Manage Secrets"**
2. Click **"Add Secret"**
3. Name: `RESEND_API_KEY`
4. Value: Your Resend API key (from https://resend.com/api-keys)
5. Click **"Save"**

---

## Step 5: Update Your .env File

1. Open `.env` file in your project
2. Replace with your new project credentials:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_ANON_KEY_HERE
```

**Where to find these:**
- Settings → API → Project URL
- Settings → API → anon/public key

---

## Step 6: Verify Everything Works

1. Start your dev server: `npm run dev`
2. Try signing up with a test email
3. Check Supabase Table Editor - you should see the email appear
4. Check your email inbox - you should receive a confirmation email

---

## Troubleshooting

### "Table doesn't exist"
- Make sure you ran the SQL in Step 2
- Check Table Editor to see if `waitlist_signups` exists

### "Function not found"
- Make sure you deployed the Edge Function in Step 3
- Check Edge Functions list

### "RESEND_API_KEY not found"
- Make sure you set the secret in Step 4
- The name must be exactly: `RESEND_API_KEY`

### "CORS error"
- This is normal in development
- The CORS will work when deployed to your domain

---

## What's Next?

After completing all steps:
1. ✅ Database table created
2. ✅ Edge Function deployed
3. ✅ Secrets configured
4. ✅ .env file updated
5. ⏭️ Test locally
6. ⏭️ Deploy to GoDaddy

---

**Ready? Start with Step 1!** 🚀

