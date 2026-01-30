# 🚀 Quick Start Guide

## Get Up and Running in 3 Minutes!

### Step 1: Install Dependencies
```bash
cd nextjs-portfolio
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Visit: **http://localhost:3000**

That's it! Your portfolio is now running! 🎉

---

## 📝 Quick Customization Checklist

### Essential Updates (Do These First!)

1. **Personal Info in Hero** → `components/Hero.jsx`
   - [ ] Change name from "Ahmed Khan" to your name
   - [ ] Update social media links (LinkedIn, Instagram, GitHub)
   - [ ] Modify the description text

2. **About Section** → `components/About.jsx`
   - [ ] Rewrite bio with your background
   - [ ] Update university/education details
   - [ ] Change location and highlights

3. **Contact Info** → `components/SectionComponents.jsx`
   - [ ] Update email address
   - [ ] Update all social media links

4. **Projects** → `components/Projects.jsx`
   - [ ] Replace sample projects with your real projects
   - [ ] Add GitHub/demo links
   - [ ] Update project descriptions

5. **Skills** → `components/Skills.jsx`
   - [ ] Add/remove skills based on your expertise

6. **Experience** → `components/SectionComponents.jsx`
   - [ ] Update work experience
   - [ ] Add more positions if needed

---

## 🎨 Component Files Reference

| Component | Location | What It Does |
|-----------|----------|--------------|
| Hero | `components/Hero.jsx` | Landing section with name & intro |
| About | `components/About.jsx` | About me section |
| Skills | `components/Skills.jsx` | Skills showcase |
| Projects | `components/Projects.jsx` | Project portfolio |
| Experience | `components/SectionComponents.jsx` | Work experience |
| Education | `components/SectionComponents.jsx` | Education background |
| Contact | `components/SectionComponents.jsx` | Contact information |
| Navbar | `components/Navbar.jsx` | Navigation menu |

---

## 🚢 Deploy to Vercel (Free!)

### Option 1: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Using Vercel Website
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your portfolio will be live in under 1 minute!

---

## 💡 Pro Tips

### Add More Projects
Go to `components/Projects.jsx` and duplicate an existing project object in the array. Example:

```jsx
{
  id: 'my-new-project',
  category: 'web',
  title: 'My Amazing Project',
  description: 'What it does...',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/you/project',
  demo: 'https://myproject.com'
}
```

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'accent-primary': '#ff6b35', // Change this!
  'accent-secondary': '#a855f7', // And this!
}
```

### Disable Entrance Animation
In `pages/index.js`, change:
```jsx
const [loading, setLoading] = useState(false); // Changed from true
```

---

## 🆘 Common Issues

**Port 3000 is already in use?**
```bash
npm run dev -- -p 3001
```

**Styles not loading?**
```bash
npm run dev
# Press Ctrl+C to stop
# Then start again
```

**Need help?**
Check the full README.md for detailed documentation!

---

Made with ❤️ for Ahmed Khan
