# Temahux Component Architecture

## Component Hierarchy

```
src/
├── app/
│   ├── layout.tsx (Root Layout + FloatingCTA)
│   ├── page.tsx (Homepage)
│   │   └── Uses: Pillar, ModelCard, VerticalCard, FadeIn
│   ├── services/
│   │   └── page.tsx (Services Page)
│   │       └── Uses: EnhancedServiceCard, PackageCard, PortfolioShowcase
│   ├── products/
│   │   └── page.tsx (Products Page)
│   │       └── Uses: FadeIn, Navbar
│   └── academy/
│       └── page.tsx (Academy Page)
│           └── Uses: FadeIn, Navbar
│
└── components/
    ├── layout/
    │   └── Navbar.tsx (Global Navigation)
    │
    ├── ui/
    │   ├── Pillar.tsx (Homepage hero pillars)
    │   ├── ModelCard.tsx (Philosophy cards)
    │   ├── VerticalCard.tsx ⭐ NEW (What brings you here cards)
    │   ├── FadeIn.tsx (Animation wrapper)
    │   ├── FloatingCTA.tsx ⭐ NEW (Floating consultation button)
    │   └── StickyCTA.tsx ⭐ NEW (Sticky bottom bar - optional)
    │
    └── services/
        ├── EnhancedServiceCard.tsx ⭐ NEW (Service cards with pricing)
        ├── PackageCard.tsx ⭐ NEW (Package pricing cards)
        ├── PortfolioShowcase.tsx ⭐ NEW (Project showcase)
        ├── ServiceCard.tsx (Original - still used elsewhere)
        ├── TargetCustomerCard.tsx
        ├── ProcessStep.tsx
        ├── CTASection.tsx
        ├── PricingTable.tsx
        ├── PortfolioGrid.tsx
        └── ConsultationForm.tsx
```

## Component Purposes

### Layout Components
- **Navbar**: Global navigation with adaptive styling for academy pages
- **FloatingCTA**: Scroll-triggered floating consultation button (global)

### Homepage Components
- **Pillar**: Large vertical hero sections for three main verticals
- **VerticalCard**: Interactive cards for "What brings you here?" section
- **ModelCard**: Philosophy/operating model cards

### Services Components
- **EnhancedServiceCard**: Service cards with hover-reveal features and pricing
- **PackageCard**: Pricing package cards with featured highlighting
- **PortfolioShowcase**: Project showcase grid with category labels

### Utility Components
- **FadeIn**: Reusable animation wrapper with configurable delays and directions
- **StickyCTA**: Optional sticky bottom bar for conversion

## Design Patterns

### Animation Strategy
- All cards use Framer Motion for smooth entrance animations
- Staggered delays (0.1s increments) for sequential reveals
- Hover states with scale and color transitions
- Scroll-triggered visibility for FloatingCTA

### Responsive Design
- Mobile-first grid layouts (1 col → 2 col → 3 col)
- Flexible typography scaling (text-3xl → text-5xl → text-8xl)
- Touch-friendly button sizes (min 44px height)
- Collapsible navigation on mobile

### Color System
```css
Primary: #440CE3 (Purple)
Accent: #DEC178 (Gold)
Trust: #246885 (Blue)
Lavender: #8773C9 (Light Purple)
Surface Dark: #151022
Surface Base: #392F2F
```

### Typography Scale
```css
Hero: 5xl → 8xl (font-black)
Section Titles: 3xl → 5xl (font-black)
Card Titles: 2xl → 3xl (font-black)
Body: base → xl (regular)
Labels: xs (font-black, uppercase, tracking-widest)
```

## Interaction Patterns

### Hover Effects
1. **Cards**: Border color change + background opacity increase
2. **Buttons**: Scale transform (1.05) + shadow intensity
3. **Links**: Color transition to primary/accent
4. **Feature Lists**: Expand/collapse with height animation

### Click Targets
- All cards are wrapped in Next.js `<Link>` components
- Buttons have clear CTAs with arrow indicators
- Minimum touch target: 44x44px

### Loading States
- Framer Motion handles entrance animations
- Viewport-triggered animations (once: true)
- Staggered delays for visual hierarchy

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Section landmarks with semantic tags
- List structures for features

### Keyboard Navigation
- All interactive elements are focusable
- Tab order follows visual hierarchy
- Focus states visible with outline

### Screen Readers
- Descriptive link text (no "click here")
- Alt text for icons (emoji fallbacks)
- ARIA labels where needed

## Performance Optimizations

### Code Splitting
- Each page imports only required components
- Lazy loading for below-fold content
- Dynamic imports for heavy components

### Animation Performance
- GPU-accelerated transforms (translate, scale)
- Avoid layout thrashing
- RequestAnimationFrame for scroll events

### Bundle Size
- Shared components reduce duplication
- Tree-shaking for unused code
- Optimized Framer Motion imports

## Future Enhancements

### Potential Additions
1. **Loading Skeletons**: For async content
2. **Error Boundaries**: Graceful error handling
3. **Toast Notifications**: Form submission feedback
4. **Modal System**: For detailed service info
5. **Image Optimization**: Next.js Image component
6. **Analytics Tracking**: Event tracking on CTAs
7. **A/B Testing**: Component variants
8. **Dark/Light Toggle**: Theme switching (currently dark only)

### Scalability Considerations
- Component library structure ready for Storybook
- Consistent prop interfaces for easy extension
- Reusable animation variants
- Centralized color/spacing tokens
