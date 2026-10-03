import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://academy.temahux.com";

  return [
    "",
    "/about",
    "/career",
    "/classes",
    "/contact",
    "/courses",
    "/faq",
    "/how-it-works",
    "/learning",
    "/parents",
    "/practice",
    "/pricing",
    "/privacy",
    "/professionals",
    "/programs",
    "/projects",
    "/resources",
    "/roadmaps",
    "/robotics",
    "/signup",
    "/stem",
    "/students",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
