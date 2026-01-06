# Deploy Edge Function to Supabase
**Function:** `send-waitlist-confirmation`  
**Date:** January 5, 2026

---

## Step 1: Open Supabase Dashboard

1. Go to: https://supabase.com/dashboard
2. Sign in to your account
3. Select your project: **Overwhelm Navigator** (Project ID: `rlcwotrlkcdklcazmmnb`)

---

## Step 2: Navigate to Edge Functions

1. In the left sidebar, click **"Edge Functions"**
2. You should see a list of functions (or it might be empty if none are deployed yet)
3. Look for `send-waitlist-confirmation` function

---

## Step 3: Deploy the Function

### Option A: If the function already exists
1. Click on `send-waitlist-confirmation`
2. Click **"Edit Function"** or **"Deploy"**
3. Copy the entire contents of your local file:
   - File: `supabase/functions/send-waitlist-confirmation/index.ts`
4. Paste it into the editor
5. Click **"Deploy"** or **"Save"**

### Option B: If the function doesn't exist
1. Click **"Create a new function"** or **"New Function"**
2. Name it: `send-waitlist-confirmation`
3. Copy the entire contents of your local file:
   - File: `supabase/functions/send-waitlist-confirmation/index.ts`
4. Paste it into the editor
5. Click **"Deploy"** or **"Create"**

---

## Step 4: Set the RESEND_API_KEY Secret (CRITICAL)

**This is required for the function to work!**

1. In the Edge Functions section, look for **"Secrets"** or **"Environment Variables"**
2. Click **"Add Secret"** or **"Manage Secrets"**
3. Add:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (from your Resend account)
4. Click **"Save"** or **"Add"**

**Where to find your Resend API key:**
- Go to: https://resend.com/api-keys
- Copy your API key
- Paste it into Supabase secrets

---

## Step 5: Verify Deployment

1. After deploying, you should see a success message
2. The function should show as **"Active"** or **"Deployed"**
3. You can test it by clicking **"Invoke"** or **"Test"** (optional)

---

## Step 6: Test the Function (Optional)

1. In the Edge Functions page, click on `send-waitlist-confirmation`
2. Click **"Invoke"** or **"Test"**
3. Enter test data:
   ```json
   {
     "email": "test@example.com"
   }
   ```
4. Click **"Invoke"**
5. Check if it returns success (you should see a response)

---

## Troubleshooting

### "Function not found"
- Make sure you're in the correct Supabase project
- Check that the function name is exactly: `send-waitlist-confirmation`

### "RESEND_API_KEY not found"
- Make sure you set the secret in Step 4
- The secret name must be exactly: `RESEND_API_KEY`

### "CORS error"
- This is normal if testing from the dashboard
- The CORS restrictions will work correctly when called from your website

---

## What Happens After Deployment

✅ Your Edge Function is now live on Supabase  
✅ It has all the security fixes (CORS, validation, rate limiting)  
✅ It's ready to receive requests from your website  
✅ It will send emails via Resend when users sign up  

---

## Next Steps

After deploying the Edge Function:
1. ✅ Edge Function deployed
2. ⏭️ Upload files to GoDaddy
3. ⏭️ Configure environment variables
4. ⏭️ Test the full signup flow

---

**Ready to deploy?** Follow the steps above! 🚀

