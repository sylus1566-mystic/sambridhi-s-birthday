# 🎂 Happy Birthday Samu - Interactive Birthday Website

A beautiful, responsive, mobile-first birthday webpage for Sambridhi (Samu) with password protection and a secret photo gallery.

## 📁 Project Structure

```
samu/
├── index.html          # Main landing page
├── gallery.html        # Secret gallery page (password protected)
├── style.css           # All styling (mobile-first responsive)
├── script.js           # All functionality (password, animations)
├── images/             # Folder for photos
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── babyphoto.jpg
└── README.md          # This file
```

## 🎨 Features

### 🎂 Index.html (Main Page)
- **Happy Birthday Title**: Large, elegant centered greeting
- **Password Box**: Glassmorphic clickable box to unlock the gallery
- **Realistic Birthday Cake**: 3-layer CSS cake with 5 flickering candles
- **Background Animations**: Continuously falling hearts and twinkling sparkles
- **Floating Effects**: Gentle floating animation on the cake
- **Modal Password Popup**: Beautiful password entry interface

### 🔐 Password Protection
- **Password**: `2067-03-01`
- **On Correct Password**: Heart celebration effect + redirect to gallery
- **On Wrong Password**: Cute error messages with shake animation

### 🖼️ Gallery.html (Secret Page)
- **Lock Screen**: Password protected - must enter password to view
- **Floating Photos**: 4 randomly positioned memory cards with rotation
- **Center Message**: Beautiful glassmorphic card with birthday wishes
- **Baby Photo Section**: Special featured section for baby photo
- **Decorative Elements**: Floating text, hearts, and sparkles
- **Hover Effects**: Photos zoom on hover/tap
- **Back Button**: Easy navigation back to index

## 🎯 How to Use

### 1. Add Photos
Place your photos in the `/images/` folder:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `babyphoto.jpg`

The site includes placeholder images if photos aren't found.

### 2. Customize (Optional)
Edit these files to customize:
- **Change Password** in `script.js` line 3
- **Change Message** in `gallery.html` (message-card section)
- **Change Colors** in `style.css` (CSS variables at top)

### 3. Deploy
Upload all files to GitHub Pages or any web host:
- No framework needed
- No build process required
- Works directly in browser

## 📱 Responsive Design

✅ **Mobile-First** - Optimized for phones (320px+)
✅ **Tablet** - Works great on tablets (768px+)
✅ **Desktop** - Beautiful on large screens

## 🎨 Design Elements

- **Soft Pink Aesthetic**: Gradient backgrounds and pastel colors
- **Glassmorphism**: Frosted glass effect on cards
- **Smooth Animations**: Floating, pulsing, flickering effects
- **Soft Shadows**: Gentle shadows for depth
- **Rounded Corners**: Cute rounded UI elements throughout

## 🔧 JavaScript Features

- ✨ Falling hearts animation (continuous)
- ✨ Twinkling sparkles in background
- 🔐 Password validation with error messages
- 🎉 Celebration animation on successful unlock
- 📱 Fully responsive and touch-friendly
- ⚡ No dependencies - pure vanilla JavaScript

## 🎵 Colors Used

- Primary Pink: `#ff69b4`
- Light Pink: `#ffc0d9`
- Pale Pink: `#fff0f5`
- Dark Pink: `#ff1493`

## 📝 Password Format

The password is in the format: `YYYY-MM-DD`
- Default: `2067-03-01` (change in script.js)

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repo
2. Upload files to `/docs` folder
3. Enable GitHub Pages in settings
4. Share the link!

### Other Hosting
- Netlify
- Vercel
- Any static hosting service

## 🎁 Customization Tips

### Change Birthday Message
Edit in `gallery.html` → `.message-wishes` paragraph

### Change Qualities
Edit in `gallery.html` → `.qualities` section

### Change Color Scheme
Edit CSS variables in `style.css` → `:root` section

### Add More Photos
Add images to `/images/` and create new `.photo-card` divs in `gallery.html`

## ✨ Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile Browsers ✅

## 💝 Made with Love

This website is designed to be a special birthday surprise gift. Every animation, color, and detail has been crafted to create an emotional, memorable experience.

---

**Happy Birthday Samu! 🎂💗✨**
