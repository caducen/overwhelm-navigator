# 📝 How to Find and Edit Your .env File

The `.env` file exists but is hidden on Mac. Here are several ways to access it:

---

## Method 1: Using Terminal (Easiest)

1. **Open Terminal** (search "Terminal" in Spotlight, or go to Applications → Utilities → Terminal)

2. **Navigate to your project:**
   ```bash
   cd /Users/oscarcaducen/Projects/overwhelm-navigator
   ```

3. **View the file contents:**
   ```bash
   cat .env
   ```
   (This will show you what's currently in the file)

4. **Edit the file:**
   ```bash
   nano .env
   ```
   - This opens a simple text editor
   - Edit the lines
   - Press `Ctrl + X` to exit
   - Press `Y` to confirm save
   - Press `Enter` to confirm filename

---

## Method 2: Show Hidden Files in Finder

1. **Open Finder**
2. **Press these keys together:** `Cmd + Shift + .` (Command + Shift + Period)
   - This toggles showing hidden files
3. **Navigate to:** `/Users/oscarcaducen/Projects/overwhelm-navigator`
4. **You should now see the `.env` file** (it might appear grayed out)
5. **Double-click to open it** in your default text editor

---

## Method 3: Use VS Code (if you have it)

1. **Open VS Code**
2. **Open the folder:** File → Open Folder → Select `overwhelm-navigator`
3. **The `.env` file should appear** in the file list (even if hidden)
4. **Click on it to edit**

---

## What Should Be In Your .env File

Your `.env` file should contain exactly these two lines (replace with YOUR actual values):

```env
VITE_SUPABASE_URL=https://vqrytiqaqonsotissdgw.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_FuHFpxoUIO5PT7HR-IhLvQ_bNqbieFj
```

**Important Notes:**
- No spaces around the `=` sign
- No quotes around the values
- Each value on its own line
- Make sure there are no extra spaces or characters

---

## If You Need to Get Your Supabase Credentials

If the values above are incorrect or you need to verify them:

1. **Go to:** https://supabase.com/dashboard
2. **Log in** to your account
3. **Click on your project** ("Overwhelm Navigator" or project ID: `vqrytiqaqonsotissdgw`)
4. **Click Settings** (gear icon) → **API**
5. **Copy these values:**
   - **Project URL** → Use for `VITE_SUPABASE_URL`
   - **anon/public key** → Use for `VITE_SUPABASE_PUBLISHABLE_KEY`
   - ⚠️ Make sure you use the **anon/public** key, NOT the service_role key!

6. **Update your `.env` file** with the correct values

---

## After Editing

Once you've verified/updated your `.env` file:

1. **Save the file**
2. **Come back here** and we'll rebuild your site
3. **Then re-upload to GoDaddy**

---

**Which method would you like to use? I recommend Method 1 (Terminal with `nano`) as it's the simplest!** 🚀
