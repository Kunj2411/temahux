import { MetadataRoute } from 'next'
import { extendedServices, insights } from '@services/lib/extended-content'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.temahux.com/services'

    const routes = [
        '',
        '/vision', '/about', '/industries', '/portfolio', '/insights',
        '/privacy-policy', '/terms-and-conditions', '/vision', '/architecture',
        '/services',
        '/services/build',
        '/services/grow',
        '/services/automate',
        '/services/operate',
        '/services/pricing',
        '/services/process',
        '/services/web-development',
        '/services/branding-design',
        '/services/digital-marketing',
        '/services/social-media-management',
        '/services/ai-automation',
        ...extendedServices.map(({ slug }) => `/services/${slug}`),
        ...insights.map(({ slug }) => `/insights/${slug}`),
        '/services/contact-consultation',
        '/products',
        '/products/university-os',
        '/products/paper-checking-ai',
        '/products/lms',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
