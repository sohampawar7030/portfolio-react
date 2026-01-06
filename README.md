# Samruddhi Kangude Portfolio - React Website

A modern, responsive portfolio website built with React.js showcasing projects, skills, education, and certifications.

## Features

- **Responsive Design**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: ScrollReveal animations and typing effects
- **Contact Form**: Integrated with EmailJS for form submissions
- **Modern UI**: Clean and professional design with smooth transitions
- **Easy Navigation**: Smooth scrolling and active section highlighting

## Technologies Used

- React.js 18.2.0
- EmailJS for contact form
- ScrollReveal for animations
- React Type Animation for typing effects
- CSS3 with modern features
- Boxicons for icons

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run Locally

1. **Extract the ZIP file**
   ```bash
   unzip portfolio-react.zip
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images**
   - Place your images in the `public/images/` folder:
     - profile.png (your profile picture)
     - about.png (about section image)
     - port1.jpg to port5.jpg (project images)
     - cert1.jpeg to cert6.jpeg (certificate images)
     - mile1.jpeg to mile6.jpeg (milestone images)
   
4. **Add your resume**
   - Place your resume PDF in `public/assets/` folder as `Portfolio_Resume.pdf`

5. **Configure EmailJS (Optional)**
   - If you want to use the contact form, update the EmailJS credentials in `src/components/Contact.js`:
     - Replace `JgjOoPJRt1GC66cme` with your EmailJS User ID
     - Replace `service_i35ds6z` with your EmailJS Service ID
     - Replace `template_pemlzkb` with your EmailJS Template ID
   - Visit [EmailJS](https://www.emailjs.com/) to create a free account

6. **Start the development server**
   ```bash
   npm start
   ```
   The website will open at `http://localhost:3000`

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `build` folder with optimized static files ready for deployment.

## Deployment

You can deploy the `build` folder to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Follow GitHub Pages deployment guide
- **AWS S3**: Upload the `build` folder to an S3 bucket

## Customization

### Update Personal Information

1. **Header**: Edit `src/components/Header.js`
2. **Home Section**: Edit `src/components/Home.js`
3. **About Section**: Edit `src/components/About.js`
4. **Education**: Edit `src/components/Education.js`
5. **Skills**: Edit `src/components/Services.js`
6. **Projects**: Edit `src/components/Portfolio.js`
7. **Certificates**: Edit `src/components/Certificates.js`
8. **Contact**: Edit `src/components/Contact.js`
9. **Footer**: Edit `src/components/Footer.js`

### Update Styles

- Main styles are in `src/assets/css/styles.css`
- Colors are defined in CSS variables in the `:root` selector

## Project Structure

```
portfolio-react/
├── public/
│   ├── index.html
│   ├── images/           # Add your images here
│   └── assets/           # Add your resume here
├── src/
│   ├── components/       # React components
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   ├── Certificates.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── assets/
│   │   └── css/
│   │       └── styles.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Features Breakdown

### Header
- Fixed navigation bar
- Mobile-responsive hamburger menu
- Active section highlighting on scroll
- Smooth scroll to sections

### Home Section
- Animated typing effect for job titles
- Social media links
- Download resume button
- Profile image

### About Section
- Professional description
- Role highlights

### Education Section
- Educational background in table format
- Degrees, institutions, years, and grades

### Skills Section
- Service boxes highlighting key expertise
- Categorized skill icons (Frontend, Backend, Languages, Databases, DevOps, OS, AWS)
- Interactive hover effects

### Portfolio Section
- Project showcase with images
- Project descriptions and links
- Hover overlay effects

### Certificates Section
- Certificate gallery
- Milestones section
- Achievement highlights

### Contact Section
- Working contact form with EmailJS integration
- Social media links
- Form validation
- Success/error messages

### Footer
- Copyright information
- Social media links
- Scroll to top button

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available for personal use.

## Contact

For any questions or issues:
- Email: samruddhikangude20@gmail.com
- LinkedIn: [Samruddhi Kangude](https://www.linkedin.com/in/samruddhi-kangude7030)
- GitHub: [SamruddhiKangude](https://github.com/SamruddhiKangude)

---

Built with ❤️ using React.js
