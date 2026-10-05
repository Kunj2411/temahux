# SEO-MANUAL-TASKS.md

Manual actions that must be performed by the TEMAHUX website owner.
These cannot be automated from the codebase.

---

## 1. Google Search Console — Domain Verification

1. Go to https://search.google.com/search-console/
2. Click **Add property** → choose **Domain** (not URL prefix)
3. Enter: `temahux.com`
4. Follow the DNS TXT record verification instructions from your domain registrar
5. Verify ownership

---

## 2. Submit Sitemap

1. In Google Search Console, go to **Sitemaps**
2. Submit: `https://www.temahux.com/sitemap.xml`
3. Confirm it shows as **Success** and lists the expected number of URLs

---

## 3. Request Indexing of Priority URLs

After verifying, use the **URL Inspection** tool to request indexing for:

- `https://www.temahux.com/`
- `https://www.temahux.com/what-is-temahux`
- `https://www.temahux.com/services`
- `https://www.temahux.com/academy`
- `https://www.temahux.com/services/products`
- `https://www.temahux.com/services/about`

---

## 4. Monitor Indexing Coverage

- Check **Coverage** report weekly for the first month
- Fix any **Excluded** or **Error** URLs
- Ensure `/academy/admin/` and `/academy/login/` remain excluded (they are disallowed in robots.txt)

---

## 5. Monitor Search Queries

- Check **Performance → Search results** weekly
- Look for branded queries: `temahux`, `temahux academy`, `temahux services`
- Note which pages rank for which queries
- If Google is associating "Temahux" with "Termux", monitor the **Queries** tab for impressions on branded terms

---

## 6. Fix Coverage / Indexing Issues

- If pages show as **Discovered — currently not indexed**, request indexing manually
- If pages show as **Crawled — currently not indexed**, review content quality
- Never redirect all 404s to the homepage

---

## 7. Monitor Core Web Vitals

- Check **Experience → Core Web Vitals** monthly
- Target: LCP < 2.5s, INP < 200ms, CLS < 0.1
- The 3D WebGL homepage may have higher LCP on low-end devices — the static fallback mitigates this

---

## 8. Create / Claim Legitimate Social Profiles

Create official profiles on platforms where TEMAHUX will be genuinely active:

- LinkedIn company page for TEMAHUX
- Twitter/X account for TEMAHUX
- Instagram for TEMAHUX (if relevant to audience)
- YouTube channel for TEMAHUX Academy (if video content is planned)

**Important:** Only create profiles you will actively maintain. Do not create profiles and abandon them.

Once created, add the profile URLs to `lib/services/site.ts` in the `social` array and to the `Organization` schema `sameAs` array in `app/layout.tsx`.

---

## 9. Add Website URL to Official Profiles

On every social profile and directory listing, ensure:

- Website URL: `https://www.temahux.com`
- Brand name: **TEMAHUX** (consistent capitalisation)
- Description matches the website description

---

## 10. Obtain Legitimate Backlinks

Pursue only genuine, editorially earned links:

- Submit TEMAHUX to legitimate Indian tech startup directories
- List TEMAHUX Academy on education directories relevant to India
- Reach out to Gandhinagar / Gujarat tech community blogs
- Contribute guest articles to relevant technology publications (only if you have genuine expertise to share)
- List products on relevant SaaS directories (e.g., Product Hunt, if appropriate)

**Do not:** buy links, use link farms, or participate in link exchanges.

---

## 11. Ask Real Partners / Clients to Mention TEMAHUX

- Ask satisfied clients to mention TEMAHUX in their own content (blog posts, case studies, social posts)
- If a client publishes a case study, ask them to link to `https://www.temahux.com`
- Ensure any mention uses the correct brand name: **TEMAHUX**

---

## 12. Publish Real Announcements / News

When TEMAHUX has genuine news to share:

- New product launches
- New Academy programs
- New partnerships (only real, verifiable ones)
- Team milestones

Publish these on the TEMAHUX blog (once the blog is built) and share on social profiles.

---

## 13. Build Genuine Brand Mentions

- Participate in relevant online communities (LinkedIn, Reddit r/india, tech forums) as TEMAHUX
- Answer questions related to TEMAHUX's genuine expertise: web development, AI automation, technology education
- Do not spam communities with promotional content

---

## 14. Google Business Profile (Optional)

If TEMAHUX has a physical office in Gandhinagar:

1. Go to https://business.google.com/
2. Create a Google Business Profile for TEMAHUX
3. Verify the address
4. Add website: `https://www.temahux.com`
5. Add correct phone and email

---

## 15. Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters/
2. Add and verify `https://www.temahux.com`
3. Submit sitemap: `https://www.temahux.com/sitemap.xml`

---

## 16. Structured Data Validation

After deployment, validate all JSON-LD using:

- https://search.google.com/test/rich-results
- https://validator.schema.org/

Test these URLs:
- `https://www.temahux.com/` (WebSite + Organization)
- `https://www.temahux.com/what-is-temahux` (FAQPage)
- `https://www.temahux.com/academy/faq` (FAQPage)
- `https://www.temahux.com/academy` (EducationalOrganization)

---

## 17. OG Image

Currently no `og:image` is defined. To improve social sharing previews:

1. Create a 1200×630px branded image for TEMAHUX (dark background, TEMAHUX wordmark)
2. Save it to `/public/og-image.png`
3. Add to `app/layout.tsx` metadata:
   ```ts
   openGraph: {
     images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TEMAHUX" }],
     ...
   }
   ```
4. Create page-specific OG images for `/what-is-temahux` and `/academy` if possible

---

## 18. Statistics in Chapters.tsx — Verification Required

The homepage animated experience (`components/overlay/Chapters.tsx`) currently displays:

- **20+ Client projects**
- **15+ Industries served**
- **98% Client satisfaction**

These statistics must be verified before the site is indexed. If they cannot be verified:

- Remove them from `Chapters.tsx` and `StaticExperience.tsx`
- Replace with factual, verifiable statements

Unverifiable statistics are a trust and E-E-A-T risk.
