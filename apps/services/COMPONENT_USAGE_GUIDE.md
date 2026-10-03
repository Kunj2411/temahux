# Component Usage Guide

## Quick Reference for Using Updated Components

---

## 🎴 EnhancedServiceCard

### Purpose
Display service offerings with visible features and professional icons.

### Usage
```tsx
import EnhancedServiceCard from "@/components/services/EnhancedServiceCard";

<EnhancedServiceCard
  title="Web Development"
  description="Professional websites and web applications"
  startingPrice="₹3,000+"
  features={[
    "Business website",
    "Mobile responsive design",
    "Contact form",
    "Basic SEO setup",
    "Hosting assistance"
  ]}
  href="/services/web-development"
  delay={0.1}
/>
```

### Features
- ✅ Professional Lucide icon (auto-mapped by title)
- ✅ Always-visible feature list
- ✅ Hover effects
- ✅ Consistent card styling
- ✅ Animation delay support

### Icon Mapping
- "Web Development" → Code icon
- "Social Media Management" → Megaphone icon
- "Branding & Design" → PenTool icon
- "AI Automation" → Bot icon
- "Digital Marketing" → BarChart3 icon

---

## 🎴 ServiceCard

### Purpose
Basic service display card with icon and pricing.

### Usage
```tsx
import ServiceCard from "@/components/services/ServiceCard";

<ServiceCard
  title="Web Development"
  description="Professional websites built with modern technologies"
  startingPrice="₹3,000+"
  href="/services/web-development"
  delay={0.1}
/>
```

### Features
- ✅ Professional icon (auto-mapped)
- ✅ Clean layout
- ✅ Hover effects
- ✅ Link to detail page

---

## 🎴 PackageCard

### Purpose
Display pricing packages with features.

### Usage
```tsx
import PackageCard from "@/components/services/PackageCard";

<PackageCard
  name="Business Website"
  price="₹6,000"
  features={[
    "5 pages",
    "SEO setup",
    "Google Analytics",
    "Hosting assistance",
    "3 months support"
  ]}
  href="/services/contact-consultation"
  delay={0.2}
  featured={true}  // Optional: highlights the card
/>
```

### Features
- ✅ Checkmark icons for features
- ✅ Featured variant (highlighted)
- ✅ Consistent styling
- ✅ CTA button

---

## 🎴 PortfolioShowcase

### Purpose
Display portfolio projects with descriptions.

### Usage
```tsx
import PortfolioShowcase from "@/components/services/PortfolioShowcase";

<PortfolioShowcase />
```

### Features
- ✅ Icon-based project visuals
- ✅ Category labels
- ✅ Project descriptions
- ✅ Hover animations
- ✅ Link to full portfolio

### Customization
Edit the `projects` array inside the component:
```tsx
const projects = [
  { 
    title: "E-Commerce Platform", 
    category: "Web Development",
    description: "Full-stack e-commerce store...",
    icon: Code
  },
  // Add more projects
];
```

---

## 🎴 TargetCustomerCard

### Purpose
Display target customer segments with icons.

### Usage
```tsx
import TargetCustomerCard from "@/components/services/TargetCustomerCard";

<TargetCustomerCard
  title="B2B SaaS Platforms"
  description="Enterprise software companies with proven product-market fit"
  delay={0.1}
/>
```

### Features
- ✅ Professional icon (auto-mapped by title)
- ✅ Hover effects
- ✅ Consistent card styling

### Icon Mapping
- "B2B SaaS Platforms" → Building2 icon
- "High-Ticket Service Firms" → Users icon
- "Institutional Tech" → GraduationCap icon

---

## 🎴 ProcessStep

### Purpose
Display process steps in card containers.

### Usage
```tsx
import ProcessStep from "@/components/services/ProcessStep";

<ProcessStep
  step={1}
  title="Infrastructure Audit"
  description="We perform a deep-dive scan of your existing growth scaffolds"
  delay={0.1}
/>
```

### Features
- ✅ Numbered circle indicator
- ✅ Card container with hover
- ✅ Professional styling
- ✅ Animation support

---

## 🎴 ModelCard

### Purpose
Display operating model features on homepage.

### Usage
```tsx
import ModelCard from "@/components/ui/ModelCard";

<ModelCard
  title="System-Driven"
  description="Everything connects. Our services feed our products..."
  delay={0.1}
/>
```

### Features
- ✅ Professional icon (auto-mapped by title)
- ✅ Uppercase title styling
- ✅ Hover effects

### Icon Mapping
- "System-Driven" → Network icon
- "Intelligence-First" → Brain icon
- "Build for Scale" → TrendingUp icon

---

## 🎴 VerticalCard

### Purpose
Homepage vertical navigation cards.

### Usage
```tsx
import VerticalCard from "@/components/ui/VerticalCard";

<VerticalCard
  icon="🚀"  // Will be converted to Lucide icon
  title="Grow My Business Online"
  description="Websites, social media management, digital marketing..."
  ctaText="Explore Services"
  href="/services"
  delay={0.2}
/>
```

### Features
- ✅ Professional icon (auto-mapped from emoji)
- ✅ Gradient hover effects
- ✅ Animated CTA line
- ✅ Icon container

### Icon Mapping
- "🚀" → Rocket icon
- "🏛️" → Building2 icon
- "🎓" → GraduationCap icon

---

## 🎴 FeatureCard (New)

### Purpose
Display feature highlights with icons.

### Usage
```tsx
import FeatureCard from "@/components/ui/FeatureCard";
import { Zap } from "lucide-react";

<FeatureCard
  title="Landing Pages"
  description="High-converting single-page sites"
  icon={Zap}
  delay={0.3}
/>
```

### Features
- ✅ Custom icon support
- ✅ Consistent card styling
- ✅ Hover effects
- ✅ Animation delay

---

## 🎴 CTASection

### Purpose
Call-to-action sections with gradient background.

### Usage
```tsx
import CTASection from "@/components/services/CTASection";

<CTASection
  headline="Ready to Build Infrastructure?"
  subtext="Limited availability for Q3 2026"
  primaryCTA={{
    text: "View Framework",
    href: "/services/framework"
  }}
  secondaryCTA={{
    text: "Contact Us",
    href: "/contact"
  }}
/>
```

### Features
- ✅ Primary and secondary CTAs
- ✅ Gradient background effect
- ✅ Responsive layout
- ✅ Animation support

---

## 📐 Layout Patterns

### Grid Layout (3 Columns)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <EnhancedServiceCard {...props} delay={0.1} />
  <EnhancedServiceCard {...props} delay={0.2} />
  <EnhancedServiceCard {...props} delay={0.3} />
</div>
```

### Grid Layout (2 Columns)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <ProjectCard {...props} delay={0.1} />
  <ProjectCard {...props} delay={0.2} />
</div>
```

### Staggered Animation
```tsx
// Increment delay by 0.1 for each item
{items.map((item, index) => (
  <Card key={index} {...item} delay={index * 0.1} />
))}
```

---

## 🎨 Styling Patterns

### Standard Card
```tsx
<div className="p-6 bg-[#151022] border border-white/10 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all duration-300">
  {/* Content */}
</div>
```

### Icon Container
```tsx
<div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-flex group-hover:border-purple-500/50 transition-all">
  <Icon size={24} className="text-[#9CA3AF] group-hover:text-[#440CE3] transition-colors" strokeWidth={2} />
</div>
```

### Feature List
```tsx
<div className="space-y-3">
  {features.map((feature, index) => (
    <div key={index} className="flex items-start gap-3">
      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={3} />
      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
    </div>
  ))}
</div>
```

---

## 🎬 Animation Patterns

### Fade In
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

### Scale In
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  {/* Content */}
</motion.div>
```

### Slide In
```tsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  {/* Content */}
</motion.div>
```

---

## 🔗 Section Navigation

### Navigation Bar
```tsx
<section className="py-16 px-6 border-t border-white/5 bg-surface-base/10 sticky top-20 z-40">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap gap-4 justify-center">
      <a href="#pricing" className="px-6 py-3 bg-white/5 text-white text-sm font-bold rounded-button hover:bg-primary hover:text-white transition-all border border-white/10">
        Pricing
      </a>
      <a href="#portfolio" className="px-6 py-3 bg-white/5 text-white text-sm font-bold rounded-button hover:bg-primary hover:text-white transition-all border border-white/10">
        Portfolio
      </a>
    </div>
  </div>
</section>
```

### Target Sections
```tsx
<section id="pricing" className="py-24 px-6 scroll-mt-32">
  {/* Content */}
</section>

<section id="portfolio" className="py-24 px-6 scroll-mt-32">
  {/* Content */}
</section>
```

### Global CSS
```css
html {
  scroll-behavior: smooth;
}
```

---

## 🎯 Common Patterns

### Service Page Structure
```tsx
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block">
              Service Category
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
              Service <span className="text-primary italic">Name</span>
            </h1>
          </FadeIn>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EnhancedServiceCard {...props} />
          </div>
        </div>
      </section>
    </div>
  );
}
```

### Section with Cards
```tsx
<section className="py-24 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <FadeIn>
      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
        Section Label
      </h2>
      <p className="text-3xl md:text-5xl font-black tracking-tight mb-16">
        Section <span className="text-primary italic">Title</span>
      </p>
    </FadeIn>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

---

## 📱 Responsive Utilities

### Container
```tsx
<div className="max-w-7xl mx-auto px-6">
  {/* Content */}
</div>
```

### Responsive Text
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl">
<p className="text-base md:text-lg lg:text-xl">
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Responsive Flex
```tsx
<div className="flex flex-col md:flex-row gap-4">
```

---

## ✅ Quick Checklist

When using components, ensure:

- [ ] Import from correct path
- [ ] Pass all required props
- [ ] Use delay for staggered animations
- [ ] Follow icon mapping conventions
- [ ] Use consistent spacing
- [ ] Test responsive behavior
- [ ] Check hover states
- [ ] Verify TypeScript types

---

## 🚀 Example: Complete Service Section

```tsx
import EnhancedServiceCard from "@/components/services/EnhancedServiceCard";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4">
            Our Services
          </h2>
          <p className="text-3xl md:text-5xl font-black tracking-tight mb-16">
            Clear pricing. <span className="text-primary italic">Real value.</span>
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EnhancedServiceCard
            title="Web Development"
            description="Professional websites and web applications"
            startingPrice="₹3,000+"
            features={[
              "Business website",
              "Mobile responsive design",
              "Contact form",
              "Basic SEO setup",
              "Hosting assistance"
            ]}
            href="/services/web-development"
            delay={0.1}
          />
          
          <EnhancedServiceCard
            title="Social Media Management"
            description="Strategic social media presence"
            startingPrice="₹5,000/mo"
            features={[
              "20 social posts",
              "Caption writing",
              "Hashtag strategy",
              "Profile optimization",
              "Monthly analytics"
            ]}
            href="/services/social-media-management"
            delay={0.2}
          />
          
          <EnhancedServiceCard
            title="Branding & Design"
            description="Distinctive brand identities"
            startingPrice="₹8,000+"
            features={[
              "Logo design",
              "Brand identity kit",
              "Business card design",
              "Social media templates",
              "Brand guidelines"
            ]}
            href="/services/branding-design"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
```

---

**Remember**: All components follow the same design system. When in doubt, reference existing implementations and follow the patterns shown in this guide.
