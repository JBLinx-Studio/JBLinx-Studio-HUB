
# GitHub Pages Deployment Guide

This project supports two methods for deploying to GitHub Pages:

## Method 1: GitHub Actions (Recommended)

This method uses GitHub Actions to automatically build and deploy your site.

### Setup:
1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically run on every push to the main branch

### Manual Deployment:
- Go to the Actions tab in your repository
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow" to deploy manually

## Method 2: Deploy to gh-pages Branch

This method builds the site and pushes it to a `gh-pages` branch.

### Setup:
1. The workflow automatically creates and updates the `gh-pages` branch
2. Go to your repository on GitHub
3. Navigate to Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select `gh-pages` branch and `/ (root)` folder

### Manual Deployment:
- Go to the Actions tab in your repository
- Select "Build and Deploy to gh-pages branch" workflow
- Click "Run workflow" to deploy manually

## Environment Variables

If you need to set environment variables for production:

1. Go to Settings → Secrets and variables → Actions
2. Add your environment variables under "Repository secrets"
3. Reference them in the workflow files using `${{ secrets.YOUR_SECRET_NAME }}`

## Custom Domain

To use a custom domain:

1. Uncomment the `cname` line in `.github/workflows/gh-pages.yml`
2. Replace `your-domain.com` with your actual domain
3. Add a CNAME record in your DNS settings pointing to `username.github.io`

## Troubleshooting

- Ensure GitHub Pages is enabled in repository settings
- Check that workflows have proper permissions
- Verify that the build completes successfully in the Actions tab
- Make sure all assets are properly referenced with relative paths
