# 🔧 Fix RLS Policy - This Should Fix the 401 Error

The build is correct - your credentials are in the JavaScript file. The issue is most likely the **RLS (Row Level Security) policy** in Supabase.

---

## Quick Fix: Update RLS Policy in Supabase

**This is likely the issue!** The policy needs to specifically allow the `anon` role to insert.

---

## Step-by-Step Fix

### Step 1: Go to Supabase Dashboard

1. Visit: **https://supabase.com/dashboard**
2. **Log in** to your account
3. **Select your project** (should be "Overwhelm Navigator" or project ID: `vqrytiqaqonsotissdgw`)

---

### Step 2: Check Current Policies

1. In the left sidebar, click **Table Editor**
2. Click on the **`waitlist_signups`** table
3. Click the **Policies** tab (at the top)

**What do you see?**
- Any policies listed?
- What are their names?
- Do they say "TO anon" anywhere?

**If you see a policy named "Anyone can join waitlist"** - that's the old one that might not have `TO anon` specified. We need to fix it.

---

### Step 3: Fix the Policy with SQL

1. In the left sidebar, click **SQL Editor**
2. Click **New query** (or the "+ New query" button)
3. **Copy and paste this entire SQL script:**

```sql
-- Drop old policies if they exist
DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist_signups;
DROP POLICY IF EXISTS "Allow public inserts" ON waitlist_signups;

-- Create the correct policy that allows anonymous inserts
CREATE POLICY "Allow public inserts" ON waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

4. **Click "Run"** (or press Cmd/Ctrl + Enter)
5. **You should see:** "Success. No rows returned"

---

### Step 4: Verify the Policy Was Created

1. Go back to **Table Editor** → **`waitlist_signups`** → **Policies** tab
2. **You should now see:**
   - Policy name: "Allow public inserts"
   - Operation: INSERT
   - Target roles: anon
   - With check expression: (true)

---

### Step 5: Test Your Site

1. **Go to:** https://osccad.com
2. **Clear browser cache:**
   - **Mac:** `Cmd + Shift + R` (press multiple times)
   - **Windows:** `Ctrl + Shift + R` (press multiple times)
   - Or try **Incognito/Private mode** (bypasses cache completely)
3. **Try to sign up** with an email
4. **It should work now!** ✅

---

## Why This Fixes It

The 401 error happens because:

1. ✅ Your build is correct (credentials are in the JavaScript)
2. ✅ Your files are uploaded correctly
3. ❌ But the Supabase RLS policy wasn't allowing anonymous users (`anon` role) to insert

When the RLS policy doesn't specify `TO anon`, Supabase blocks the request with a 401 Unauthorized error - even though you have the correct API key!

By creating a policy with `TO anon`, we're explicitly telling Supabase: "Allow anonymous users (people using the public API key) to insert into this table."

---

## If It Still Doesn't Work

After fixing the policy and clearing cache, if you still get errors:

1. **Check the browser console (F12 → Console tab):**
   - What exact error do you see?
   - Is it still 401, or a different error?

2. **Try in Incognito/Private mode:**
   - This completely bypasses browser cache
   - Does it work there?

3. **Check the Network tab (F12 → Network tab):**
   - Try signing up
   - Look for requests to `supabase.co`
   - Click on the request - what's the status code?
   - What's the response message?

---

## Summary

✅ **What we're fixing:**
- The RLS policy in Supabase needs `TO anon` to allow anonymous inserts

✅ **What to do:**
1. Go to Supabase Dashboard → SQL Editor
2. Run the SQL script above
3. Verify the policy was created
4. Clear browser cache
5. Test signup

✅ **Expected result:**
- Signup should work now!
- No more 401 error

---

**Try this and let me know if it works!** 🚀
