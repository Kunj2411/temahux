# Temahux Platform - Usage Guide

## 🚀 Quick Start

### Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your changes.

### Production Build
```bash
npm run build
npm start
```

---

## 📄 Page Overview

### Homepage (`/`)
**Purpose**: First impression - clearly communicate three verticals

**Key Sections**:
1. **Hero Pillars**: Three large vertical sections (Services, Products, Academy)
2. **What Brings You Here?**: Three interactive cards directing users to their path
3. **Operating Model**: Philosophy and approach explanation

**User Journey**:
- Visitor lands → Sees three pillars → Clicks relevant vertical OR
- Visitor scrolls → Sees "What brings you here?" → Chooses path

---

### Services Page (`/services`)
**Purpose**: Convert business owners into clients

**Key Sections**:
1. **Hero**: Strategic positioning
2. **Services Grid**: 5 services with pricing and features (hover to see details)
3. **Website Packages**: 3 pricing tiers (Starter, Business, E-Commerce)
4. **Portfolio Showcase**: Recent work examples
5. **Target Customers**: Who we work with
6. **Process**: How we work
7. **Consultation Form**: Lead capture

**Conversion Points**:
- "View Details" on each service card
- "Start My Project" on package cards
- "Free Consultation" in quick links
- Floating CTA button (appears on scroll)

---

### Products Page (`/products`)
**Purpose**: Generate early access signups for SaaS products

**Key Sections**:
1. **Hero**: Clear "Coming Soon" status
2. **Product Cards**: University OS, Paper Checking AI, T-Learn LMS
3. **Early Access CTA**: Waitlist signup

**Status**: All products marked "Launching Soon"

---

### Academy Page (`/academy`)
**Purpose**: Build waitlist for educational programs

**Key Sections**:
1. **Hero**: Clear "Coming Soon" status
2. **Program Cards**: AI Systems Engineer, SaaS Product Builder, Growth Architect
3. **Waitlist CTA**: Join founding cohort

**Status**: All programs marked "Launching Soon"

---

## 🎨 Component Usage

### VerticalCard
Use for large, prominent choices (like homepage verticals)

```tsx
<VerticalCard
  icon="🚀"
  title="Your Title"
  description="Your description"
  ctaText="Button Text"
  href="/your-link"
  delay={0.2}
/>
```

### EnhancedServiceCard
Use for services with pricing and features

```tsx
<EnhancedServiceCard
  title="Service Name"
  description="Brief description"
  startingPrice="₹3,000+"
  features={[
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]}
  href="/service-link"
  delay={0.1}
/>
```

### PackageCard
Use for pricing tiers

```tsx
<PackageCard
  name="Package Name"
  price="₹6,000"
  features={[
    "Feature 1",
    "Feature 2"
  ]}
  href="/contact"
  featured={true}  // Highlights this package
  delay={0.2}
/>
```

### FloatingCTA
Already added globally in `layout.tsx`. Appears after scrolling 300px.

To customize:
```tsx
// Edit src/components/ui/FloatingCTA.tsx
// Change scroll threshold, text, or link
```

### StickyCTA
Optional sticky bottom bar. To use:

```tsx
import StickyCTA from "@/components/ui/StickyCTA";

// Add to any page
<StickyCTA />
```

---

## 🎯 Conversion Optimization

### Primary CTAs
1. **Floating Button**: "Free Consultation" (appears on scroll)
2. **Navbar Button**: "Pilot Briefing"
3. **Package Cards**: "Start My Project"
4. **Service Cards**: "View Details"
5. **Early Access**: "Join Early Access" / "Join Waitlist"

### CTA Hierarchy
- **Primary**: Consultation/Contact (purple background)
- **Secondary**: Learn More/View Details (outlined)
- **Tertiary**: Navigation links (text only)

### Tracking Recommendations
Add analytics to these key actions:
- Service card clicks
- Package selection
- Form submissions
- Floating CTA clicks
- Early access signups

---

## 🎨 Customization Guide

### Colors
Edit `src/app/globals.css`:
```css
--color-primary: #440CE3;  /* Purple */
--color-accent: #DEC178;   /* Gold */
--color-trust: #246885;    /* Blue */
```

### Typography
Edit `src/app/layout.tsx`:
```tsx
// Change fonts
import { YourFont } from "next/font/google";
```

### Animations
Edit individual components:
```tsx
// Adjust delays
delay={0.2}  // Increase for slower stagger

// Adjust durations
transition={{ duration: 0.5 }}  // Increase for slower animation
```

### Pricing
Edit `src/app/services/page.tsx`:
```tsx
// Update prices in EnhancedServiceCard and PackageCard components
startingPrice="₹3,000+"
```

---

## 📱 Responsive Behavior

### Breakpoints
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

### Mobile Optimizations
- Navbar collapses (implement hamburger menu if needed)
- Cards stack vertically
- Text sizes scale down
- Touch-friendly button sizes (min 44px)

---

## 🔧 Common Modifications

### Add a New Service
1. Open `src/app/services/page.tsx`
2. Add new `<EnhancedServiceCard>` to the grid
3. Create detail page at `src/app/services/your-service/page.tsx`

### Add a New Package
1. Open `src/app/services/page.tsx`
2. Add new `<PackageCard>` to the packages section
3. Update features and pricing

### Change CTA Links
1. **Floating CTA**: Edit `src/components/ui/FloatingCTA.tsx`
2. **Navbar CTA**: Edit `src/components/layout/Navbar.tsx`
3. **Package CTAs**: Edit `src/components/services/PackageCard.tsx`

### Update "Coming Soon" Status
When products/academy launch:
1. Remove "Coming Soon" badges
2. Change CTAs from "Join Waitlist" to "Get Started"
3. Add actual content/enrollment flows

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Animation Issues
- Check Framer Motion is installed: `npm install framer-motion`
- Ensure components are marked "use client"

### Styling Issues
- Verify Tailwind classes are correct
- Check `tailwind.config.js` for custom colors
- Clear browser cache

### Link Issues
- Use Next.js `<Link>` component, not `<a>`
- Ensure all hrefs start with `/`
- Check routes exist in `src/app/`

---

## 📊 Performance Tips

### Image Optimization
When adding images:
```tsx
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // For above-fold images
/>
```

### Code Splitting
- Keep components small and focused
- Use dynamic imports for heavy components
- Lazy load below-fold content

### SEO Optimization
Update metadata in each page:
```tsx
export const metadata = {
  title: "Your Page Title | Temahux",
  description: "Your page description",
};
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
# Upload .next folder and package.json
# Run: npm start
```

---

## 📞 Support

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

### Common Questions

**Q: How do I add a new page?**
A: Create a new folder in `src/app/` with a `page.tsx` file.

**Q: How do I change the logo?**
A: Edit the Navbar component in `src/components/layout/Navbar.tsx`.

**Q: How do I connect forms to email?**
A: Forms currently use Web3Forms. Update the access key in form components.

**Q: Can I disable the floating CTA?**
A: Yes, remove `<FloatingCTA />` from `src/app/layout.tsx`.

---

## ✅ Launch Checklist

Before going live:
- [ ] Update all placeholder content
- [ ] Add real project images to portfolio
- [ ] Test all forms and CTAs
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Add Google Analytics
- [ ] Set up form notifications
- [ ] Update meta descriptions for SEO
- [ ] Add favicon and social share images
- [ ] Test page load speed
- [ ] Verify accessibility (WCAG)
- [ ] Set up error monitoring

---

**Status**: ✅ Platform ready for launch!
