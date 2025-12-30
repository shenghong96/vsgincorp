# 🎨 Logo Setup Guide - Contentful Integration

## Quick Setup (3 Steps)

### Step 1: Copy the `.env.local` File

1. Open File Explorer
2. Navigate to: `C:\Users\User\Downloads\vsg-secretary-corporate-website`
3. Find the file named `.env.local`
4. **Copy it** (Right-click → Copy, or press Ctrl+C)
5. Navigate to: `C:\Users\User\Downloads\vsg-secretary---professional-sdn-bhd-conversion-landing-page (1)`
6. **Paste it** (Right-click → Paste, or press Ctrl+V)

### Step 2: Restart the Dev Server

In your terminal:
```bash
npm run dev
```

### Step 3: Verify Logo Loads

1. Open your browser to: http://localhost:3000
2. You should now see your VSG Secretary logo in the header and footer!

---

## Alternative: Manual Token Setup

If you can't copy the file, create a new file named `.env.local` in the landing page folder with this content:

```env
VITE_CONTENTFUL_SPACE_ID=uwwxzch580v2
VITE_CONTENTFUL_ACCESS_TOKEN=your_token_from_contentful_here
VITE_CONTENTFUL_ENVIRONMENT=master
```

**To get your token:**
1. Go to: https://app.contentful.com/spaces/uwwxzch580v2/api/keys
2. Copy the "Content Delivery API - access token"
3. Paste it in the `.env.local` file

---

## Troubleshooting

**Logo not showing?**
- Make sure the `.env.local` file is in the root folder (same level as `package.json`)
- Restart the dev server after creating the file
- Check browser console for any errors

**Still using fallback logo?**
- The text-based "VSG Secretary" logo is the fallback
- Once Contentful is configured, it will automatically switch to your image logo
