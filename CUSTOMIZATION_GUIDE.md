# 🎨 Portfolio Customization Guide

## 📧 Contact Information - Update Your Details

### 1. Email Address
**File:** `/src/components/Home.js`
**Line:** ~530

**Find this:**
```javascript
onClick={() => window.open('mailto:akshaj@example.com?subject=Collaboration Opportunity&body=Hi Akshaj, I would like to discuss...', '_blank')}
```

**Replace with:**
```javascript
onClick={() => window.open('mailto:YOUR_EMAIL@example.com?subject=Collaboration Opportunity&body=Hi Akshaj, I would like to discuss...', '_blank')}
```

**Also update the contact card:**
```javascript
<p className="text-[rgb(218,218,218)]">YOUR_EMAIL@example.com</p>
```

### 2. LinkedIn Profile
**Find this:**
```javascript
onClick={() => window.open('https://linkedin.com/in/your-linkedin-username', '_blank')}
```

**Replace with:**
```javascript
onClick={() => window.open('https://linkedin.com/in/YOUR_LINKEDIN_USERNAME', '_blank')}
```

### 3. GitHub Profile
**Find this:**
```javascript
onClick={() => window.open('https://github.com/your-github-username', '_blank')}
```

**Replace with:**
```javascript
onClick={() => window.open('https://github.com/YOUR_GITHUB_USERNAME', '_blank')}
```

### 4. Phone Number
**Find this:**
```javascript
onClick={() => window.open('tel:+1-555-123-4567', '_blank')}
```

**Replace with:**
```javascript
onClick={() => window.open('tel:+1-YOUR-PHONE-NUMBER', '_blank')}
```

**And update the display text:**
```javascript
+1 (555) 123-4567
```
to:
```javascript
+1 (YOUR) PHONE-NUMBER
```

### 5. Personal Website
**Find this:**
```javascript
onClick={() => window.open('https://your-website.com', '_blank')}
```

**Replace with:**
```javascript
onClick={() => window.open('https://YOUR_WEBSITE.com', '_blank')}
```

---

## 📸 How to Upload Your Professional Photo

### Option 1: Quick Upload (Temporary)
1. **Click on the camera icon** in the About section
2. **Select your image** from your computer
3. **Note:** This only shows a preview - for permanent display, use Option 2

### Option 2: Permanent Image (Recommended)

#### Step 1: Upload to Image Hosting
Upload your professional photo to one of these free services:
- **GitHub:** Upload to your repository and get the raw URL
- **Imgur:** Upload and copy direct link
- **Cloudinary:** Free tier available
- **Your own hosting:** If you have a website

#### Step 2: Update the Code
**File:** `/src/components/Home.js`
**Find the image placeholder section around line ~280:**

```javascript
<div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-3xl border-2 border-[rgb(218,255,1)]/30 flex items-center justify-center">
```

**Replace with:**
```javascript
<div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] rounded-3xl border-2 border-[rgb(218,255,1)]/30 overflow-hidden hover:border-[rgb(218,255,1)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/20">
  <img 
    src="YOUR_IMAGE_URL_HERE" 
    alt="Akshaj Shivara Madhusudhan - Cybersecurity Professional"
    className="w-full h-full object-cover"
  />
</div>
```

#### Step 3: GitHub Raw URL Example
If using GitHub:
1. Upload image to your repository
2. Click on the image
3. Click "Raw" button
4. Copy the URL (looks like: `https://raw.githubusercontent.com/username/repo/main/image.jpg`)

---

## 🎨 Additional Customization Options

### Change Your Location
**Find:** `Buffalo, NY`
**Replace with:** Your actual location

### Update Response Time
**Find:** `Within 24 hours`
**Replace with:** Your preferred response time

### Modify Work Hours
**Find:** `9 AM - 6 PM EST`
**Replace with:** Your preferred contact hours

### Personal Bio
The bio text is pulled from your backend data, but you can also update it directly in the fallback:
**Find:** The long bio text in the About section
**Replace with:** Your personal story

---

## 🚀 After Making Changes

### 1. Test Locally
```bash
cd /app/frontend
yarn start
```
Visit `http://localhost:3000` and test all buttons

### 2. Push to GitHub
```bash
git add .
git commit -m "Update: Personal contact information and photo"
git push origin main
```

### 3. Vercel Auto-Deploy
Vercel will automatically redeploy your updated portfolio!

---

## 📱 Testing Your Contact Buttons

After updating, test each button:
- ✅ **Email:** Should open your email client
- ✅ **LinkedIn:** Should open your LinkedIn profile
- ✅ **GitHub:** Should open your GitHub profile  
- ✅ **Phone:** Should offer to call your number
- ✅ **Website:** Should open your personal website

---

## 💡 Pro Tips

### Image Optimization
- **Size:** 400x400px for best results
- **Format:** JPG, PNG, or WebP
- **Quality:** High quality but under 500KB
- **Style:** Professional headshot with good lighting

### Contact Strategy
- **Professional Email:** Use a professional email address
- **LinkedIn:** Make sure your LinkedIn is up-to-date
- **GitHub:** Pin your best repositories
- **Consistency:** Use the same profile photo across platforms

### Backup Plan
Keep a copy of your original files before making changes, so you can revert if needed!

---

🎯 **Your portfolio will be fully personalized and professional once you update these details!**