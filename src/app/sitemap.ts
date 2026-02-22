import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://temahux.com'

    const routes = [
        '',
        '/vision',
        '/architecture',
        '/services',
        '/services/framework',
        '/products',
        '/products/university-os',
        '/products/paper-checking-ai',
        '/products/lms',
        '/academy',
        '/academy/track-structure',
        '/academy/dashboard',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
