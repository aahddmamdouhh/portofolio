# Deployment Guide

This guide will help you deploy your portfolio website to Vercel and connect it to GitHub.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git installed on your computer

## Step 1: Push to GitHub

1. **Initialize Git** (if not already done)
   ```bash
   git init
   ```

2. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio` or any name you prefer
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Add and commit your files**
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

4. **Connect to GitHub and push**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your GitHub username.

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import your project**
   - Click "Add New..." → "Project"
   - Find your repository and click "Import"

3. **Configure your project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## Step 3: Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

2. **DNS Configuration**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to Vercel's IP
   - Wait for DNS propagation (can take up to 48 hours)

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the `main` branch to production
- Create preview deployments for pull requests
- Show deployment status in GitHub

## Environment Variables

If you add environment variables later:

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add your variables
5. Redeploy for changes to take effect

## Continuous Updates

To update your live site:

1. Make changes locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   ```
3. Push to GitHub:
   ```bash
   git push
   ```
4. Vercel will automatically deploy the changes

## Troubleshooting

### Build Fails

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Make sure Node.js version is compatible (18.x+)

### Images Not Loading

- Check image URLs
- Ensure domain is added to `next.config.js` under `images.domains`

### Slow Performance

- Enable Vercel Analytics
- Check bundle size
- Optimize images using Next.js Image component

## Useful Commands

```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove [deployment-url]

# Link local project to Vercel
vercel link
```

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions for CI/CD](https://github.com/features/actions)

---

Happy deploying! 🚀

