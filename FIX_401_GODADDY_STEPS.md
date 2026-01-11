# 🔧 Fix 401 Error - GoDaddy Direct Upload Guide

**Problem:** Getting 401 error when signing up on osccad.com  
**Solution:** Rebuild your site with environment variables, then re-upload to GoDaddy

---

## Why This Happens

When you upload files directly to GoDaddy, the environment variables need to be **baked into the build**. If they weren't in your `.env` file when you ran `npm run build`, the built files don't have the Supabase credentials, causing the 401 error.

---

## Step 1: Create/Update Your .env File

1. **Open your project folder** on your desktop (wherever you have the `overwhelm-navigator` folder)

2. **Check if you have a `.env` file**:
   - Look for a file named `.env` (it might be hidden on Mac)
   - If you don't see it, you need to create it

3. **Create or edit the `.env` file**:
   - Open a text editor (TextEdit, VS Code, or any text editor)
   - Create a new file named `.env` (exactly that name, starting with a dot)
   - Add these two lines:
   
   ```env
   VITE_SUPABASE_URL=https://vqrytiqaqonsotissdgw.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_FuHFpxoUIO5PT7HR-IhLvQ_bNqbieFj
   ```

   **IMPORTANT:** Replace the values above with YOUR actual Supabase credentials (see Step 2)

4. **Save the file** in the same folder as your `package.json` file

---

## Step 2: Get Your Supabase Credentials

If you don't have the correct credentials, get them from Supabase:

1. **Go to Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard
   - Log in to your account

2. **Find your project:**
   - Look for project: "Overwhelm Navigator" (or project ID: `vqrytiqaqonsotissdgw`)
   - Click on it

3. **Get the credentials:**
   - Click **Settings** (gear icon in the left sidebar)
   - Click **API**
   - Find these two values:
     - **Project URL**: Copy this (should look like `https://vqrytiqaqonsotissdgw.supabase.co`)
     - **anon/public key**: Copy this (starts with `sb_publishable_...` or `eyJ...`)
   
   **⚠️ WARNING:** Use the **anon/public** key, NOT the service_role key!

4. **Update your `.env` file** with the values you just copied

---

## Step 3: Rebuild Your Site

1. **Open Terminal/Command Prompt:**
   - On Mac: Open Terminal
   - On Windows: Open Command Prompt or PowerShell

2. **Navigate to your project folder:**
   ```bash
   cd /path/to/overwhelm-navigator
   ```
   (Replace `/path/to/overwhelm-navigator` with the actual path to your project)

3. **Make sure dependencies are installed:**
   ```bash
   npm install
   ```
   (This might take a minute - only needed if you haven't done it before)

4. **Build your site:**
   ```bash
   npm run build
   ```
   (This creates a new `dist` folder with all the files ready to upload)

5. **Wait for it to finish:**
   - You should see something like "✓ built in Xs"
   - Look for a new `dist` folder in your project

---

## Step 4: Upload to GoDaddy

1. **Open the `dist` folder:**
   - In Finder (Mac) or File Explorer (Windows)
   - Navigate to your project folder
   - Open the `dist` folder
   - You should see: `index.html`, `assets` folder, and other files

2. **Log in to GoDaddy:**
   - Go to https://www.godaddy.com
   - Log in to your account

3. **Access your hosting:**
   - Go to **My Products**
   - Find **Web Hosting** (or **cPanel**)
   - Click **Manage**

4. **Upload the files:**
   - Look for **File Manager** or **FTP**
   - Navigate to your website's root folder (often `public_html` or `www`)
   - **Delete all old files** (or backup first if you want)
   - **Upload all files from the `dist` folder**:
     - Upload `index.html`
     - Upload the entire `assets` folder
     - Upload any other files in `dist` (like `robots.txt`, `favicon.png`, etc.)

5. **Make sure the file structure matches:**
   - `index.html` should be in the root
   - `assets/` folder should be in the root
   - Other files (like `favicon.png`) should be in the root

---

## Step 5: Test Your Site

1. **Wait a few minutes** (files need to propagate)

2. **Visit your website:**
   - Go to https://osccad.com
   - Clear your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

3. **Test the signup:**
   - Try to sign up with an email
   - Open browser console (F12 → Console tab)
   - Check if there are any errors

4. **What to look for:**
   - ✅ **Success:** Signup works, no 401 error
   - ❌ **Still 401 error:** Check console for specific error message
   - ❌ **Other errors:** Note what they say

---

## Troubleshooting

### "Command not found: npm"
- You need to install Node.js first
- Download from: https://nodejs.org
- Install it, then try Step 3 again

### "Cannot find module" errors
- Make sure you ran `npm install` first
- Delete `node_modules` folder and run `npm install` again

### Still getting 401 error after rebuild
1. **Double-check your `.env` file:**
   - Make sure there are no extra spaces
   - Make sure the values are correct
   - Make sure you used the **anon/public** key, not service_role

2. **Check the browser console:**
   - What exact error do you see?
   - Is it still 401, or a different error?

3. **Verify Supabase RLS Policy:**
   - Go to Supabase Dashboard → Table Editor → `waitlist_signups`
   - Click **Policies** tab
   - Make sure there's a policy allowing INSERT for `anon` role
   - If not, see "Fix RLS Policy" below

### Fix RLS Policy (if needed)

If the Supabase policy is missing:

1. Go to Supabase Dashboard → SQL Editor
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
3. Click **Run**
4. Test signup again

---

## Summary

✅ **What we're doing:**
1. Create `.env` file with Supabase credentials
2. Rebuild the site (bakes credentials into the code)
3. Upload new `dist` folder to GoDaddy
4. Test the signup

✅ **Why this works:**
- Vite (the build tool) replaces environment variables at build time
- The built files will have the actual Supabase URL and key
- GoDaddy just serves these static files (no configuration needed)

---

**Need help with any step? Let me know which step you're on and what error you're seeing!** 🚀
