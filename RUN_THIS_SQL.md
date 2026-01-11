# ✅ Run This SQL in Supabase

Your SQL looks mostly correct, but if you still have an old policy, it might conflict. 

**Replace everything in your SQL Editor with this simplified version:**

---

## Simple Fix - Just the Policy

**Copy and paste this into your SQL Editor:**

```sql
-- Drop old policies if they exist (prevents conflicts)
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist_signups;

-- Create the correct policy that allows anonymous inserts
CREATE POLICY "Allow public inserts" ON public.waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

**Then click "Run"**

---

## Why This Version?

1. **Drops old policies first** - Removes any conflicting policies
2. **Simple WITH CHECK (true)** - Allows all inserts (email validation happens in your code anyway)
3. **Has `TO anon`** - This is the critical part that allows anonymous users

---

## After Running

1. **You should see:** "Success. No rows returned" (or similar success message)

2. **Verify it worked:**
   - Go to **Table Editor** → **`waitlist_signups`** → **Policies** tab
   - You should see "Allow public inserts" with `anon` role

3. **Test your site:**
   - Go to: https://osccad.com
   - **Clear cache** (Cmd+Shift+R on Mac, or use Incognito mode)
   - Try signing up - it should work now! ✅

---

## Your Current SQL vs This Version

**What's different:**
- Your version: Has table creation, extensions, etc. (which is fine if table doesn't exist)
- This version: Only fixes the policy (what we need right now)

**What's the same:**
- Both have `TO anon` ✅ (the important part!)
- Both allow INSERT operations ✅

**Why use this version:**
- Simpler - just fixes the policy
- Drops old policies first (prevents conflicts)
- Uses `WITH CHECK (true)` (simpler, and your code already validates email)

---

**Run this SQL and let me know if signup works!** 🚀
