# Quick Customization Guide

Fast-track guide to personalizing your portfolio in under 30 minutes.

## ⚡ 5-Minute Quick Start

### 1. Install & Run (2 minutes)
```bash
cd ai-portfolio
npm install
npm run dev
```
Visit `http://localhost:5173`

### 2. Update Basic Info (3 minutes)

**In Hero Section** → `src/components/Hero.jsx`:
- Line 33: Change name
- Line 42: Change title/role
- Line 50: Change tagline

**Quick Find & Replace:**
- Find: "Niladri Podder" → Replace with your name
- Find: "niladri@example.com" → Replace with your email

## 🎯 15-Minute Customization

### Profile Content

**1. Update Data Files** (10 minutes)

All content lives in `src/data/`:

| File | What to Update | Priority |
|------|---------------|----------|
| `metrics.js` | Your impact numbers | ⭐⭐⭐ |
| `projects.js` | Your key projects | ⭐⭐⭐ |
| `stories.js` | Customer success stories | ⭐⭐ |
| `timeline.js` | Career history | ⭐⭐ |
| `techstack.js` | Technologies & proficiency | ⭐⭐ |

**2. Update Social Links** (2 minutes)

**File**: `src/components/Contact.jsx` (Lines 26-40)
**File**: `src/components/Footer.jsx` (Lines 27-30)

Replace placeholder URLs with your actual profiles:
- LinkedIn
- GitHub  
- Email

**3. Add Profile Image** (3 minutes)

Option A: Add your photo to `public/profile.jpg` (400x400px)

Option B: Keep the initial placeholder and customize colors in Hero component

## 🎨 30-Minute Full Personalization

### Content Customization

#### 1. About Section (5 minutes)

**File**: `src/components/About.jsx` (Lines 55-77)

Update:
- Your professional story
- Core expertise list
- Leadership highlights

#### 2. Projects (10 minutes)

**File**: `src/data/projects.js`

For each project, update:
```javascript
{
  title: "Your Project Name",
  category: "SAP AI | GenAI | Automation | Knowledge Systems",
  description: "Brief description",
  detailedDescription: "Longer overview",
  problem: "The challenge",
  solution: "Your approach",
  technologies: ["Tech1", "Tech2", "Tech3"],
  outcomes: ["Result 1", "Result 2"],
  tags: ["tag1", "tag2"],
}
```

**Pro tip**: Start with 3-5 featured projects, add more later.

#### 3. Metrics (2 minutes)

**File**: `src/data/metrics.js`

Update the 4 key metrics showcasing your impact:
```javascript
{
  value: 45,          // The number
  suffix: "+",        // +, %, or empty
  label: "Your achievement",
  description: "Context"
}
```

#### 4. Tech Stack (5 minutes)

**File**: `src/data/techstack.js`

Update proficiency levels (0-100) for each technology.

Add new technologies:
```javascript
{ name: "Your Tech", proficiency: 90 }
```

Remove technologies you don't use by deleting lines.

#### 5. Timeline (8 minutes)

**File**: `src/data/timeline.js`

Update each role:
```javascript
{
  period: "2023 - Present",
  role: "Your Title",
  company: "Company Name",
  location: "City, Country",
  description: "What you did",
  highlights: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech1", "Tech2"]
}
```

### Visual Customization

#### Change Color Scheme (5 minutes)

**File**: `tailwind.config.js` (Lines 11-16)

```javascript
accent: {
  cyan: '#06b6d4',    // Primary accent
  purple: '#a855f7',  // Secondary accent  
  indigo: '#6366f1',  // Tertiary accent
}
```

Try these combinations:

**Ocean Blue:**
```javascript
cyan: '#0891b2'
purple: '#3b82f6'
indigo: '#6366f1'
```

**Emerald Green:**
```javascript
cyan: '#10b981'
purple: '#059669'
indigo: '#14b8a6'
```

**Sunset Orange:**
```javascript
cyan: '#f97316'
purple: '#ea580c'
indigo: '#dc2626'
```

#### Modify Sections (Optional)

**File**: `src/App.jsx`

To hide a section, comment it out:
```javascript
// <CustomerStories />  // Hidden
```

To reorder sections, move the component lines:
```javascript
<Projects />
<TechStack />  // Swapped order
```

## 📋 Customization Checklist

### Content (Priority)
- [ ] Name and title in Hero
- [ ] Email and social links
- [ ] About Me story and expertise
- [ ] 3-5 key projects
- [ ] Impact metrics (4 stats)
- [ ] Career timeline (recent roles)
- [ ] Tech stack proficiencies

### Visual (Optional)  
- [ ] Profile image or keep placeholder
- [ ] Color scheme (or keep default)
- [ ] Favicon (optional)

### Deployment
- [ ] Update base path in vite.config.js
- [ ] Test locally
- [ ] Deploy to GitHub Pages

## 🚀 Ready to Deploy?

Once customized:

```bash
# 1. Test your changes
npm run dev

# 2. Build for production
npm run build

# 3. Preview the build
npm run preview

# 4. Deploy to GitHub Pages
npm run deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 💡 Pro Tips

### Incremental Updates
1. Start with data files only
2. Deploy and verify
3. Then customize visuals
4. Deploy again

### Version Control
```bash
# Commit after each major change
git add .
git commit -m "Updated projects and timeline"
git push
```

### Content Writing Tips
- **Projects**: Focus on business impact, not just tech
- **Metrics**: Use real numbers; round up if needed
- **Descriptions**: Use action verbs (Built, Designed, Led)
- **Outcomes**: Quantify results with percentages/time saved

### Keep It Updated
- Add new projects as you complete them
- Update metrics periodically
- Refresh timeline when changing roles
- Keep tech stack current

## 🎓 Learning Resources

**React**: https://react.dev/learn  
**Tailwind**: https://tailwindcss.com/docs  
**Framer Motion**: https://www.framer.com/motion/  

## 🆘 Quick Fixes

**Colors not changing?**
→ Clear browser cache and restart dev server

**Animations not smooth?**
→ Check browser compatibility (use Chrome/Edge/Safari)

**Image not showing?**
→ Ensure it's in `public/` folder and named correctly

**Deployment 404?**
→ Check base path in `vite.config.js`

---

**Questions?** Check [README.md](./README.md) for more details.

**Ready to shine?** 🌟 Your portfolio awaits!
