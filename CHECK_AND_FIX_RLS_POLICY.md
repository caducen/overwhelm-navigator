# 🔍 Check and Fix RLS Policy - Step by Step

You're in the right place! Let's check what policies exist, then fix them properly.

---

## Step 1: Check What Policies Currently Exist

Before creating a new policy, let's see what's already there:

1. **In the SQL Editor**, clear the current query (or create a new one)

2. **Copy and paste this SQL** to check existing policies:

```sql
-- Check what policies exist on waitlist_signups table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'waitlist_signups';
```

3. **Click "Run"**

4. **Look at the Results:**
   - Do you see any policies?
   - What are their names?
   - What do the `roles` and `cmd` columns say?

**This tells us what policies currently exist.**

---

## Step 2: Fix the Policy (Drop Old + Create New)

Now let's fix it properly. **Replace the SQL in your editor** with this:

```sql
-- Drop old policies if they exist (this prevents conflicts)
DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist_signups;
DROP POLICY IF EXISTS "Allow public inserts" ON waitlist_signups;

-- Create the correct policy that allows anonymous inserts
CREATE POLICY "Allow public inserts" ON waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

3. **Click "Run"**

4. **You should see:** "Success. No rows returned" (or similar success message)

---

## Step 3: Verify the Policy Was Created Correctly

1. **Run the check query again** (from Step 1) to verify:

```sql
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'waitlist_signups';
```

2. **You should see:**
   - **policyname:** "Allow public inserts"
   - **roles:** `{anon}` (this is the important part!)
   - **cmd:** `INSERT`

**If `roles` shows `{anon}`, you're good! ✅**

---

## Step 4: Alternative - Check in Table Editor

You can also verify in the Table Editor:

1. **Go to Table Editor** (left sidebar)
2. **Click on `waitlist_signups` table**
3. **Click the "Policies" tab** (at the top)
4. **You should see:**
   - Policy name: "Allow public inserts"
   - Target roles: `anon` (or `anonymous`)
   - Operation: INSERT

---

## Step 5: Test Your Site

After fixing the policy:

1. **Go to:** https://osccad.com
2. **Clear browser cache:**
   - **Mac:** `Cmd + Shift + R` (multiple times)
   - **Windows:** `Ctrl + Shift + R`
   - **Or use Incognito/Private mode** (bypasses all cache)
3. **Try to sign up** with an email
4. **It should work now!** ✅

---

## Why This Might Have Happened

Looking at your migration files, there are two different migrations:

1. **Old migration** (20260104173419): Created policy "Anyone can join waitlist" WITHOUT `TO anon`
2. **New migration** (20260105): Creates policy "Allow public inserts" WITH `TO anon`

If both were run, or if the old one exists, it might not work properly. The policy MUST have `TO anon` to allow anonymous users to insert.

---

## If You Still Get 401 After This

1. **Check browser console (F12 → Console tab):**
   - What exact error do you see?
   - Is it still 401, or different?

2. **Check Network tab (F12 → Network tab):**
   - Try signing up
   - Find the request to `supabase.co`
   - What's the status code?
   - What's the response message?

3. **Double-check the policy:**
   - Run the check query (Step 1) again
   - Make sure `roles` shows `{anon}`

---

**Let me know:**
1. What policies did you find in Step 1?
2. Did the fix SQL run successfully?
3. Does signup work now?
