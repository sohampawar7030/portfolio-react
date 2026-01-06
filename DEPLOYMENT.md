# Deployment Guide

This guide covers multiple ways to deploy your React portfolio website.

## 🚀 Option 1: Vercel (Recommended - Easiest & Free)

Vercel is the easiest way to deploy React apps with automatic HTTPS and global CDN.

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio-react
   vercel --prod
   ```

4. **Done!** Your site is live at `https://your-project.vercel.app`

### Using Vercel Dashboard (No CLI needed):

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import your repository or drag-and-drop the `build` folder
5. Deploy!

---

## 🌐 Option 2: Netlify (Also Easy & Free)

### Method 1: Drag and Drop

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://www.netlify.com/)
3. Sign up or log in
4. Drag and drop your `build` folder to Netlify
5. Done!

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd portfolio-react
   npm run build
   netlify deploy --prod --dir=build
   ```

---

## 📘 Option 3: GitHub Pages (Free)

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Add homepage and deploy scripts:
   ```json
   {
     "name": "samruddhi-portfolio",
     "version": "1.0.0",
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: `gh-pages` branch
   - Save

6. Visit `https://yourusername.github.io/portfolio`

---

## ☁️ Option 4: AWS S3 + CloudFront

For those who want to use AWS:

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create bucket (e.g., `my-portfolio-website`)
   - Enable static website hosting
   - Make bucket public

3. **Upload Files**
   - Upload all files from `build` folder to S3
   - Set permissions to public read

4. **Configure CloudFront (Optional for HTTPS)**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Add SSL certificate

5. **Update DNS**
   - Point your domain to CloudFront distribution

---

## 🐳 Option 5: Docker + Any Cloud Platform

### Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run:

```bash
# Build Docker image
docker build -t portfolio-app .

# Run container
docker run -p 80:80 portfolio-app
```

### Deploy to:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform
- Heroku Container Registry

---

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images are in `public/images/` folder
- [ ] Resume PDF is in `public/assets/` folder
- [ ] EmailJS credentials are configured (if using contact form)
- [ ] All personal information is updated
- [ ] All links are working
- [ ] Website tested on mobile and desktop
- [ ] No console errors in browser
- [ ] Project builds successfully (`npm run build`)
- [ ] meta tags updated in `public/index.html`

---

## 📊 Post-Deployment Steps

### 1. Test Your Website
- Check all pages and sections
- Test contact form
- Test all links
- Check on different devices
- Test in different browsers

### 2. Add Analytics (Optional)

**Google Analytics:**
1. Create GA account
2. Get tracking ID
3. Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Custom Domain (Optional)

Most platforms support custom domains:

**Vercel:**
- Go to Project Settings > Domains
- Add your domain
- Update DNS records

**Netlify:**
- Go to Site Settings > Domain Management
- Add custom domain
- Follow DNS instructions

**GitHub Pages:**
- Add `CNAME` file to `public` folder with your domain
- Update DNS records with GitHub IPs

---

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install and Build
      run: |
        npm install
        npm run build
        
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@4.1.5
      with:
        branch: gh-pages
        folder: build
```

---

## 🆘 Troubleshooting

### Build Fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for errors in code

### Images Not Loading
- Ensure images are in `public/images/`
- Check file names and extensions
- Verify paths in components

### 404 Errors on Refresh
- Configure redirects for SPA routing
- For Netlify: Create `public/_redirects`:
  ```
  /* /index.html 200
  ```
- For Vercel: Create `vercel.json`:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/" }
    ]
  }
  ```

### Contact Form Not Working
- Verify EmailJS credentials
- Check browser console for errors
- Test EmailJS account settings

---

## 📈 Performance Optimization

After deployment:

1. **Test Performance**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Use [GTmetrix](https://gtmetrix.com/)

2. **Optimize Images**
   - Compress images before uploading
   - Use WebP format if possible
   - Lazy load images

3. **Enable Caching**
   - Most platforms do this automatically
   - Configure cache headers if self-hosting

---

## 🎉 You're Done!

Your portfolio is now live! Share your link on:
- LinkedIn
- Resume/CV
- Email signature
- Social media

---

**Need more help?** Check the main README.md or create an issue on GitHub.
