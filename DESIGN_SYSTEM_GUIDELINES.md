# Temahux Design System Guidelines

## Maintaining Production-Level Quality

This document provides guidelines for maintaining the design system and adding new components while preserving the production-ready quality.

---

## 🎨 Design Tokens

### Colors

```typescript
// Primary Colors
primary: '#440CE3'      // Purple - Main brand color
accent: '#DEC178'       // Gold - Accent highlights
trust: '#246885'        // Blue - Trust elements
lavender: '#8773C9'     // Purple variant

// Surface Colors
surface-dark: '#151022' // Main background
surface-base: '#392F2F' // Card backgrounds
surface-light: '#F8F9FA' // Light mode (if needed)

// Text Colors
text-white: '#FFFFFF'   // Primary text
text-muted: '#9CA3AF'   // Secondary text (icons default)
text-slate-400: '#94A3B8' // Tertiary text
text-slate-500: '#64748B' // Labels
```

### Usage Rules

```tsx
// ✅ CORRECT
<div className="bg-[#151022] text-white">

// ✅ CORRECT (using Tailwind)
<div className="bg-surface-dark text-white">

// ❌ WRONG (custom colors without design token)
<div className="bg-[#123456] text-[#abcdef]">
```

---

## 📐 Spacing System

### Standard Spacing Scale

```typescript
// Card Padding
p-6  // 24px - Standard card padding

// Section Spacing
py-24 // 96px - Vertical section spacing
px-6  // 24px - Horizontal page padding

// Grid Gaps
gap-8 // 32px - Standard grid gap

// Text Margins
mb-4  // 16px - Small margin
mb-6  // 24px - Medium margin
mb-12 // 48px - Large margin
mb-16 // 64px - Extra large margin
```

### Spacing Rules

```tsx
// ✅ CORRECT - Consistent spacing
<div className="p-6 space-y-6">
  <h3 className="mb-4">Title</h3>
  <p className="mb-4">Content</p>
</div>

// ❌ WRONG - Inconsistent spacing
<div className="p-3 space-y-2">
  <h3 className="mb-1">Title</h3>
  <p className="mb-2">Content</p>
</div>
```

---

## 🔤 Typography System

### Font Families

```css
/* Display Font (Headings) */
font-family: 'Manrope', sans-serif;

/* Body Font (Text) */
font-family: 'Inter', sans-serif;
```

### Size Hierarchy

```tsx
// Hero Titles
<h1 className="text-5xl md:text-8xl font-black">

// Section Titles
<h2 className="text-3xl md:text-5xl font-black">

// Card Titles
<h3 className="text-xl font-black">

// Body Text
<p className="text-sm text-slate-400">
<p className="text-base text-slate-400">

// Labels
<span className="text-xs uppercase tracking-widest text-slate-500">
```

### Typography Rules

```tsx
// ✅ CORRECT - Clear hierarchy
<div>
  <h2 className="text-3xl md:text-5xl font-black mb-6">Section Title</h2>
  <p className="text-base text-slate-400 leading-relaxed">Body text</p>
</div>

// ❌ WRONG - Inconsistent sizes
<div>
  <h2 className="text-2xl font-bold mb-2">Section Title</h2>
  <p className="text-lg text-gray-400">Body text</p>
</div>
```

---

## 🎴 Card Component System

### Standard Card Style

```tsx
// Base Card Structure
<div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300">
  {/* Card content */}
</div>
```

### Card Variants

#### 1. Service Card
```tsx
<div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300 group">
  {/* Icon */}
  <div className="mb-4">
    <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
      <Icon size={24} className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" strokeWidth={2} />
    </div>
  </div>
  
  {/* Title */}
  <h3 className="text-xl font-black mb-4">Title</h3>
  
  {/* Content */}
  <p className="text-sm text-slate-400 leading-relaxed">Description</p>
</div>
```

#### 2. Feature Card
```tsx
<div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300">
  <div className="space-y-6">
    {/* Icon + Title + Description */}
  </div>
</div>
```

#### 3. Featured Card (with highlight)
```tsx
<div className="p-6 bg-primary/10 border-2 border-primary rounded-2xl shadow-2xl shadow-primary/20 scale-105">
  {/* Featured content */}
</div>
```

---

## 🎯 Icon System

### Icon Library
**Use**: Lucide React (https://lucide.dev)

### Icon Specifications

```tsx
import { IconName } from 'lucide-react';

// Standard Icon Usage
<IconName 
  size={24}                    // 20px or 24px only
  className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors"
  strokeWidth={2}              // Consistent stroke width
/>
```

### Icon Container Pattern

```tsx
// ✅ CORRECT - Icon in container
<div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
  <Icon size={24} className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" strokeWidth={2} />
</div>

// ❌ WRONG - Naked icon
<Icon size={32} className="text-blue-500" />
```

### Icon Mapping Reference

```typescript
// Service Icons
"Web Development" → Code
"Branding & Design" → PenTool
"Social Media Management" → Megaphone
"AI Automation" → Bot
"Digital Marketing" → BarChart3

// Feature Icons
"Landing Pages" → Zap
"Business Websites" → Building2
"E-Commerce" → ShoppingCart

// Model Icons
"System-Driven" → Network
"Intelligence-First" → Brain
"Build for Scale" → TrendingUp
```

---

## 🎬 Animation Guidelines

### Framer Motion Patterns

#### 1. Fade In Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  {/* Content */}
</motion.div>
```

#### 2. Staggered Animations
```tsx
// First item: delay={0.1}
// Second item: delay={0.2}
// Third item: delay={0.3}
// Increment by 0.1 for each item
```

#### 3. Hover Animations
```tsx
// Use CSS transitions, not Framer Motion
<div className="transition-all duration-300 hover:border-purple-500">
```

### Animation Rules

```tsx
// ✅ CORRECT - Subtle, professional
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>

// ❌ WRONG - Too aggressive
<motion.div
  initial={{ opacity: 0, scale: 0, rotate: -180 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 2, type: "spring" }}
>
```

---

## 🔘 Button System

### Button Variants

#### 1. Primary Button
```tsx
<button className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all">
  Button Text
</button>
```

#### 2. Secondary Button
```tsx
<button className="px-10 py-5 bg-white/5 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all border border-white/10">
  Button Text
</button>
```

#### 3. Outline Button
```tsx
<button className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-button text-xs font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all">
  Button Text
</button>
```

### Button Rules

```tsx
// ✅ CORRECT - Consistent sizing and styling
<div className="flex gap-4">
  <button className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all">
    Primary
  </button>
  <button className="px-10 py-5 bg-white/5 text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-white hover:text-surface-dark transition-all border border-white/10">
    Secondary
  </button>
</div>

// ❌ WRONG - Inconsistent styling
<div className="flex gap-2">
  <button className="px-4 py-2 bg-blue-500 text-white rounded">Primary</button>
  <button className="px-6 py-3 bg-gray-200 text-black">Secondary</button>
</div>
```

---

## 📋 Form Elements

### Input Fields

```tsx
<div>
  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
    Label
  </label>
  <input
    type="text"
    className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
  />
</div>
```

### Select Fields

```tsx
<select className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors">
  <option value="">Select option</option>
  <option value="1">Option 1</option>
</select>
```

### Textarea

```tsx
<textarea
  rows={5}
  className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors resize-none"
  placeholder="Placeholder text..."
/>
```

---

## 🔗 Navigation Patterns

### Section Navigation (Smooth Scroll)

```tsx
// Navigation Bar
<div className="flex gap-4">
  <a href="#pricing" className="px-6 py-3 bg-white/5 text-white text-sm font-bold rounded-button hover:bg-primary hover:text-white transition-all border border-white/10">
    Pricing
  </a>
  <a href="#portfolio" className="px-6 py-3 bg-white/5 text-white text-sm font-bold rounded-button hover:bg-primary hover:text-white transition-all border border-white/10">
    Portfolio
  </a>
</div>

// Target Sections
<section id="pricing" className="py-24 px-6 scroll-mt-32">
  {/* Content */}
</section>

// Global CSS
html {
  scroll-behavior: smooth;
}
```

---

## 📱 Responsive Design

### Breakpoint System

```tsx
// Mobile First Approach
<div className="text-base md:text-lg lg:text-xl">
  // Default: Mobile
  // md: Tablet (768px+)
  // lg: Desktop (1024px+)
</div>
```

### Grid Layouts

```tsx
// ✅ CORRECT - Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>

// ❌ WRONG - Fixed grid
<div className="grid grid-cols-3 gap-4">
  {/* Cards */}
</div>
```

---

## ✅ Component Checklist

When creating a new component, ensure:

- [ ] Uses consistent color tokens
- [ ] Follows spacing system (p-6, gap-8, etc.)
- [ ] Implements proper typography hierarchy
- [ ] Includes Lucide React icons (if needed)
- [ ] Has hover states with transitions
- [ ] Uses Framer Motion for entrance animations
- [ ] Follows card design pattern
- [ ] Is responsive (mobile, tablet, desktop)
- [ ] Has proper TypeScript types
- [ ] Includes proper accessibility attributes

---

## 🚫 Common Mistakes to Avoid

### 1. Inconsistent Spacing
```tsx
// ❌ WRONG
<div className="p-3 mb-2 gap-4">

// ✅ CORRECT
<div className="p-6 mb-4 gap-8">
```

### 2. Custom Colors
```tsx
// ❌ WRONG
<div className="bg-[#123456] text-[#abcdef]">

// ✅ CORRECT
<div className="bg-[#151022] text-white">
```

### 3. Emoji Icons
```tsx
// ❌ WRONG
<div>🚀 Feature</div>

// ✅ CORRECT
<Rocket size={24} className="text-[#9CA3AF]" />
```

### 4. Inconsistent Card Styles
```tsx
// ❌ WRONG
<div className="p-4 bg-gray-800 rounded-lg border border-gray-700">

// ✅ CORRECT
<div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300">
```

### 5. Hidden Content
```tsx
// ❌ WRONG - Features only visible on hover
<div className="opacity-0 group-hover:opacity-100">
  <ul>Features</ul>
</div>

// ✅ CORRECT - Features always visible
<ul className="space-y-3">
  <li>Feature 1</li>
  <li>Feature 2</li>
</ul>
```

---

## 📚 Component Library Reference

### Available Components

1. **EnhancedServiceCard** - Service offerings with features
2. **ServiceCard** - Basic service display
3. **PackageCard** - Pricing packages
4. **PortfolioShowcase** - Project showcase
5. **TargetCustomerCard** - Customer segments
6. **ProcessStep** - Process steps
7. **ModelCard** - Operating model cards
8. **VerticalCard** - Homepage vertical cards
9. **FeatureCard** - Feature highlights
10. **CTASection** - Call-to-action sections

### Usage Example

```tsx
import EnhancedServiceCard from "@/components/services/EnhancedServiceCard";

<EnhancedServiceCard
  title="Web Development"
  description="Professional websites..."
  startingPrice="₹3,000+"
  features={[
    "Business websites",
    "Landing pages",
    "Mobile responsive design"
  ]}
  href="/services/web-development"
  delay={0.1}
/>
```

---

## 🎯 Quality Standards

### Before Committing Code

1. **Visual Check**: Does it match existing design?
2. **Spacing Check**: Is spacing consistent?
3. **Icon Check**: Are icons professional (Lucide)?
4. **Typography Check**: Is hierarchy clear?
5. **Responsive Check**: Works on mobile/tablet/desktop?
6. **Animation Check**: Smooth and subtle?
7. **Accessibility Check**: Proper semantic HTML?
8. **Performance Check**: No unnecessary re-renders?

---

## 📖 Additional Resources

- **Lucide Icons**: https://lucide.dev
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org

---

**Remember**: Consistency is key to maintaining production-level quality. When in doubt, reference existing components and follow these guidelines.
