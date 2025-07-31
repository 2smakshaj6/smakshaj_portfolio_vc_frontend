# 📸 Image Management Guide

## 📁 Where to Put Your Images

### Directory Structure:
```
/public/images/
├── profile.jpg                 # Your professional photo
├── certifications/
│   ├── aws-cert.png            # AWS certification badge
│   ├── security-plus.png       # Security+ certification
│   ├── cissp.png              # CISSP certification
│   └── ...                    # Other certification images
├── projects/
│   ├── detection-engine.png   # Project screenshot
│   ├── llm-autosoc.jpg       # Project demo image
│   └── ...                   # Other project images
└── misc/
    ├── logo.png              # Personal logo
    └── background.jpg        # Additional backgrounds
```

---

## 🖼️ How to Add Images in Code

### 1. Profile Photo
**File:** `/src/components/Home.js`
**Location:** About section (~line 280)

**Steps:**
1. **Add your photo:** Put `profile.jpg` in `/public/images/`
2. **Update code:** Find the commented section and uncomment:

```javascript
{/* Remove the placeholder div and uncomment this: */}
<img 
  src="/images/profile.jpg" 
  alt="Akshaj Shivara Madhusudhan - Cybersecurity Professional"
  className="w-full h-full object-cover"
/>
```

### 2. Certification Images
**File:** `/src/components/Home.js`
**Location:** Certifications section (~line 650)

**Find this code:**
```javascript
{/* Certification Image Placeholder */}
<div className="w-16 h-16 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-lg border border-[rgb(218,255,1)]/30 flex items-center justify-center">
  <span className="text-xs text-[rgb(218,255,1)] font-bold">CERT</span>
</div>
```

**Replace with:**
```javascript
{/* Certification Image */}
<div className="w-16 h-16 rounded-lg overflow-hidden border border-[rgb(218,255,1)]/30">
  <img 
    src="/images/certifications/aws-cert.png" 
    alt="AWS Certification"
    className="w-full h-full object-cover"
  />
</div>
```

### 3. Project Images
**File:** `/src/components/Home.js`
**Location:** Projects section (~line 550)

**Add project images by modifying each project card:**

**Find a project like "Detection Engine" and add:**
```javascript
<Card className="...">
  {/* Add project image at the top */}
  <div className="mb-6 rounded-xl overflow-hidden">
    <img 
      src="/images/projects/detection-engine.png" 
      alt="Detection Engine Project"
      className="w-full h-48 object-cover"
    />
  </div>
  
  {/* Rest of project content */}
  <div className="flex items-center mb-4">
    {/* ... existing content ... */}
  </div>
</Card>
```

---

## 📋 Image Specifications

### Profile Photo
- **Size:** 400x400px (square)
- **Format:** JPG, PNG, WebP
- **Quality:** High quality, under 500KB
- **Style:** Professional headshot, good lighting

### Certification Badges
- **Size:** 150x150px to 200x200px
- **Format:** PNG (for transparency)
- **Quality:** High quality, under 200KB each
- **Source:** Download from certification providers

### Project Screenshots
- **Size:** 800x400px (2:1 ratio)
- **Format:** JPG, PNG
- **Quality:** High quality, under 1MB
- **Content:** Screenshots, mockups, or diagrams

---

## 🎯 Common Image Locations in Code

### 1. Hero Section Background
```javascript
// Add background image to hero section
<section 
  className="pt-24 ... relative"
  style={{
    backgroundImage: 'url("/images/hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### 2. Company Logos (Experience Section)
```javascript
<div className="flex items-center mb-4">
  <img 
    src="/images/companies/catenactio-logo.png" 
    alt="Catenactio Inc"
    className="w-8 h-8 mr-3"
  />
  <div className="text-[rgb(218,255,1)] mb-6 text-lg font-semibold">{exp.company}</div>
</div>
```

### 3. Skill Icons (Custom Icons)
```javascript
<div className="p-3 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-xl mr-4">
  <img 
    src="/images/icons/security-icon.png" 
    alt="Security"
    className="h-6 w-6"
  />
</div>
```

---

## 🔧 Quick Examples

### Example 1: Add Your Profile Photo
1. **Save your photo as:** `/public/images/profile.jpg`
2. **In Home.js, find line ~280 and uncomment:**
```javascript
<img 
  src="/images/profile.jpg" 
  alt="Akshaj Shivara Madhusudhan"
  className="w-full h-full object-cover"
/>
```

### Example 2: Add Certification Images
1. **Save certification badge as:** `/public/images/certifications/aws-cert.png`
2. **In Home.js, find the certification section and replace placeholder:**
```javascript
<img 
  src="/images/certifications/aws-cert.png" 
  alt="AWS Certification"
  className="w-full h-full object-cover"
/>
```

### Example 3: Add Project Screenshots
1. **Save project image as:** `/public/images/projects/detection-engine.png`
2. **Add to project card:**
```javascript
<div className="mb-6 rounded-xl overflow-hidden">
  <img 
    src="/images/projects/detection-engine.png" 
    alt="Detection Engine Screenshot"
    className="w-full h-48 object-cover"
  />
</div>
```

---

## 💡 Pro Tips

### Image Optimization
- **Compress images** before adding (use tools like TinyPNG)
- **Use appropriate formats:** JPG for photos, PNG for logos/badges
- **Optimize for web:** Keep file sizes reasonable

### Naming Convention
- **Use descriptive names:** `profile-photo.jpg` not `image1.jpg`
- **No spaces:** Use hyphens or underscores
- **Lowercase:** Better for web compatibility

### Responsive Images
For different screen sizes, you can use:
```javascript
<img 
  src="/images/profile.jpg"
  srcSet="/images/profile-small.jpg 400w, /images/profile-large.jpg 800w"
  sizes="(max-width: 768px) 400px, 800px"
  alt="Profile"
  className="w-full h-full object-cover"
/>
```

---

## 🚀 After Adding Images

1. **Test locally:** `yarn start` and check images load
2. **Commit changes:** 
   ```bash
   git add .
   git commit -m "Add professional photos and images"
   git push origin main
   ```
3. **Vercel auto-deploys** your updated portfolio with images!

---

**✨ Your images will be fast-loading and professional once added to the `/public/images/` directory!**