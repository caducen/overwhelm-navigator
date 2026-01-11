# 🔍 Troubleshooting: 401 Error Still Happening

If you're still getting a 401 error after rebuilding and uploading, let's debug step by step.

---

## Step 1: Check Browser Console for Detailed Errors

The improved error handling should now show more details. Let's check:

1. **Visit your site:** https://osccad.com
2. **Open Browser Console:**
   - Press `F12` (or right-click → Inspect)
   - Click the **Console** tab
3. **Try to sign up** with an email
4. **Look for errors** - what exactly does it say?

**What to look for:**
- What's the error message? (should be more detailed now)
- Is it a 401? 403? Or something else?
- What URL is it trying to access?
- Any error code like "PGRST301"?

**Take a screenshot** of the console errors and share what you see.

---

## Step 2: Verify Files Are Actually Updated

The JavaScript file name changes with each build (Vite adds a hash). Let's check:

1. **Check what's on your server:**
   - In cPanel, go to `public_html/assets/`
   - What files do you see?
   - Note the file names (especially the `.js` file)

2. **Check what your index.html points to:**
   - In cPanel, open `public_html/index.html`
   - Look for `<script>` tags
   - What file name does it reference?

**Important:** The file names MUST match! If `index.html` points to `index-OLDHASH.js` but you only uploaded `index-NEWHASH.js`, the site will try to load the old file (which might not exist or have wrong credentials).

**Fix if mismatch:**
- Upload BOTH `index.html` AND the `assets` folder together
- They must be from the same build

---

## Step 3: Hard Refresh / Clear Cache Properly

Sometimes browsers cache aggressively:

1. **Hard Refresh:**
   - **Mac:** `Cmd + Shift + R` (multiple times)
   - **Windows:** `Ctrl + Shift + R` (multiple times)

2. **Clear Site Data:**
   - Chrome: F12 → Application tab → Clear storage → Clear site data
   - Firefox: F12 → Storage tab → Clear All
   - Safari: Develop → Empty Caches

3. **Try Incognito/Private Mode:**
   - This bypasses all cache
   - Chrome: `Cmd/Ctrl + Shift + N`
   - Safari: `Cmd + Shift + N`
   - Firefox: `Cmd/Ctrl + Shift + P`

4. **Try a Different Browser:**
   - If you're using Chrome, try Safari or Firefox
   - This confirms if it's a cache issue

---

## Step 4: Verify Supabase RLS Policy

The 401 error might actually be an RLS (Row Level Security) policy issue. Let's check:

1. **Go to Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard
   - Log in → Select your project (`vqrytiqaqonsotissdgw`)

2. **Check the Table:**
   - Go to **Table Editor** → `waitlist_signups`
   - Click the **Policies** tab

3. **What policies do you see?**
   - Is there a policy allowing INSERT for `anon` role?
   - What's the policy name?
   - What does it say?

**If policy is missing or wrong:**

Go to **SQL Editor** and run this:

```sql
-- Drop old policies if they exist
DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist_signups;
DROP POLICY IF EXISTS "Allow public inserts" ON waitlist_signups;

-- Create the correct policy
CREATE POLICY "Allow public inserts" ON waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

Click **Run**, then try signup again.

---

## Step 5: Verify Environment Variables Are Correct

Let's double-check your Supabase credentials are correct:

1. **Check your `.env` file** (local):
   - Should have:
     ```
     VITE_SUPABASE_URL=https://vqrytiqaqonsotissdgw.supabase.co
     VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_FuHFpxoUIO5PT7HR-IhLvQ_bNqbieFj
     ```

2. **Verify in Supabase Dashboard:**
   - Go to: Settings → API
   - Compare the values
   - **Important:** Are you using the **anon/public** key (not service_role)?

3. **Rebuild if values are wrong:**
   - Fix `.env` file
   - Run `npm run build` again
   - Upload new files

---

## Step 6: Check Network Tab

This shows exactly what's happening:

1. **Open Browser DevTools:**
   - Press `F12`
   - Click **Network** tab

2. **Clear the network log:**
   - Click the clear button (circle with line through it)

3. **Try to sign up**

4. **Look for the request:**
   - Find the request to Supabase (should contain `supabase.co` in the URL)
   - Click on it
   - Check:
     - **Status code:** What is it? (401? 403? 404?)
     - **Request URL:** What's the full URL?
     - **Request Headers:** What headers are being sent?
     - **Response:** What does the response say?

**This tells us exactly what's failing!**

---

## Common Issues and Fixes

### Issue 1: File Name Mismatch
**Symptom:** Site loads but uses old JavaScript file
**Fix:** Upload `index.html` AND `assets` folder together from same build

### Issue 2: Browser Cache
**Symptom:** Changes don't appear
**Fix:** Hard refresh, incognito mode, or clear cache completely

### Issue 3: RLS Policy Missing
**Symptom:** 401 error specifically on database insert
**Fix:** Run the SQL policy creation script (Step 4 above)

### Issue 4: Wrong API Key
**Symptom:** 401 or authentication errors
**Fix:** Verify you're using anon/public key (not service_role)

### Issue 5: Supabase Project Paused/Inactive
**Symptom:** Can't connect to Supabase at all
**Fix:** Check Supabase Dashboard - is project active?

---

## Quick Diagnostic Questions

Please answer these:

1. **What exact error do you see in the browser console?**
   - Copy/paste the error message

2. **What files are in `public_html/assets/` on your server?**
   - List the file names

3. **What does `public_html/index.html` reference in the `<script>` tags?**
   - What JavaScript file name does it point to?

4. **Have you verified the RLS policy exists in Supabase?**
   - Yes/No

5. **Did you try incognito/private mode?**
   - Yes/No - Did it work?

---

## Next Steps

Once we have the answers above, we can pinpoint the exact issue!

**Most likely causes:**
1. Browser cache (try incognito mode first!)
2. RLS policy missing/wrong (check Supabase dashboard)
3. File mismatch (index.html pointing to wrong JS file)

Let me know what you find! 🔍
