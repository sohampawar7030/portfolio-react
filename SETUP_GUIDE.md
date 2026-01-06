# Quick Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Extract and Install
```bash
# Extract the ZIP file
unzip portfolio-react.zip
cd portfolio-react

# Install dependencies (this may take 2-3 minutes)
npm install
```

### Step 2: Add Your Content

1. **Create image folders:**
   ```bash
   mkdir -p public/images public/assets
   ```

2. **Add your images to `public/images/`:**
   - `profile.png` - Your profile picture
   - `about.png` - About section image
   - `port1.jpg` to `port5.jpg` - Project screenshots
   - `cert1.jpeg` to `cert6.jpeg` - Your certificates
   - `mile1.jpeg` to `mile6.jpeg` - Your milestone images

3. **Add your resume:**
   - Place `Portfolio_Resume.pdf` in `public/assets/`

### Step 3: Customize Content

Open these files and update with your information:

1. **`src/components/Home.js`**
   - Update name, bio, social links

2. **`src/components/About.js`**
   - Update about description

3. **`src/components/Education.js`**
   - Update education details

4. **`src/components/Services.js`**
   - Update skills and services

5. **`src/components/Portfolio.js`**
   - Update project details and links

6. **`src/components/Certificates.js`**
   - Update certificates and milestones

7. **`src/components/Contact.js`**
   - Update EmailJS credentials (see below)
   - Update email addresses and contact info

### Step 4: Configure Email (Optional)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update `src/components/Contact.js` with:
   - Your User ID (Public Key)
   - Service ID
   - Template ID

### Step 5: Run the Website

```bash
npm start
```

Visit `http://localhost:3000` to see your portfolio!

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `build/` folder.

## 🌐 Deploy

### Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop your `build` folder

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🎨 Customize Colors

Edit `src/assets/css/styles.css` and change these variables:

```css
:root {
    --bg-color: #1f242d;           /* Main background */
    --second-bg-color: #323946;    /* Secondary background */
    --text-color: #fff;            /* Text color */
    --main-color: #0ef;            /* Accent color (cyan) */
}
```

## ❓ Common Issues

### Images not showing?
- Make sure images are in `public/images/` folder
- Use correct file extensions (jpg, jpeg, png)
- File names are case-sensitive

### Contact form not working?
- Check EmailJS credentials in `src/components/Contact.js`
- Verify your EmailJS template is configured correctly
- Check browser console for error messages

### Website not starting?
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## 📱 Mobile Testing

Test on mobile:
1. Run `npm start`
2. Find your computer's IP address
3. Visit `http://YOUR_IP:3000` on your phone

## 🆘 Need Help?

Check the main README.md for detailed documentation.

---

**Congratulations! Your portfolio is ready! 🎉**
