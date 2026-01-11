# ✅ Test Your Site After Upload

Your files are uploaded correctly! Now let's test to make sure everything works.

---

## Step 1: Clear Your Browser Cache

**Why?** Your browser might still be showing the old cached files (without the environment variables).

**How to clear cache:**
- **Mac:** Press `Cmd + Shift + R` (or `Cmd + Option + E` then reload)
- **Windows/Linux:** Press `Ctrl + Shift + R` (or `Ctrl + F5`)

**Or manually:**
- Chrome/Edge: Settings → Privacy → Clear browsing data → Cached images and files
- Safari: Develop → Empty Caches (if Develop menu is enabled)
- Firefox: Settings → Privacy → Clear Data → Cached Web Content

---

## Step 2: Visit Your Website

1. Go to: **https://osccad.com**
2. Wait for the page to fully load
3. Scroll down to find the email signup form

---

## Step 3: Test the Signup

1. **Open Browser Console:**
   - Press `F12` (or right-click → Inspect → Console tab)
   - This helps us see any errors

2. **Try to sign up:**
   - Enter a test email address
   - Click "Join Early Access" (or the signup button)

3. **What should happen:**
   - ✅ **Success:** You see a success message like "You're on the list!" or "Welcome aboard!"
   - ✅ **Email:** You should receive a confirmation email (check spam folder too)

4. **If there's an error:**
   - Check the browser console (F12 → Console tab)
   - What error message do you see?
   - Take a screenshot and let me know

---

## Step 4: Check Browser Console for Errors

1. **Open Console:** Press `F12` → Click "Console" tab
2. **Look for:**
   - ✅ **No red errors** = Good!
   - ❌ **Red errors** = Something's wrong (note what they say)

3. **Common things to check:**
   - Any 401 or 403 errors? (Should be gone now!)
   - Any network errors?
   - Any JavaScript errors?

---

## Step 5: Verify in Supabase (Optional)

To confirm signups are working:

1. Go to: https://supabase.com/dashboard
2. Log in → Select your project
3. Go to **Table Editor** → `waitlist_signups`
4. You should see test emails appear when people sign up

---

## What We Fixed

✅ **The Problem:**
- Old `dist` folder was built without environment variables
- When uploaded to GoDaddy, the site couldn't connect to Supabase
- Result: 401 Unauthorized error

✅ **The Solution:**
- Rebuilt `dist` folder WITH environment variables (baked into JavaScript)
- Uploaded new files to GoDaddy
- Environment variables are now embedded in the code

✅ **What's Different:**
- Old files: No Supabase credentials
- New files: Supabase credentials embedded in JavaScript
- `.env` file: Only needed locally (not uploaded to server)

---

## Troubleshooting

### Still Getting 401 Error?

1. **Make sure you cleared cache** (Step 1 above)
2. **Check the browser console** - what exact error do you see?
3. **Try a different browser** or **incognito/private mode**
4. **Wait 5 minutes** - sometimes DNS/hosting needs time to propagate

### Site Looks Broken?

1. **Check that all files uploaded:**
   - `index.html` ✅
   - `assets/` folder ✅ (should contain `.js` and `.css` files)
   - `favicon.png` ✅
   - Other files ✅

2. **Check file permissions:**
   - Files should be 0644
   - Folders should be 0755

### No Email Received?

1. **Check spam/junk folder**
2. **Wait a few minutes** - emails can be delayed
3. **Try the "Resend confirmation email" button** on the success page

---

## Summary

🎉 **You've successfully:**
1. ✅ Built the site with environment variables
2. ✅ Uploaded the correct files to GoDaddy
3. ✅ Files are in the right location (`public_html`)

🚀 **Next:**
- Test the signup form
- It should work now!
- The 401 error should be gone

---

**Let me know:**
- ✅ Does the signup work?
- ❌ If not, what error do you see in the console?
