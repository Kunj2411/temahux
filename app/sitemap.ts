import type { MetadataRoute } from "next";
import academySitemap from "./academy/sitemap";
import servicesSitemap from "./services/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://www.temahux.com/", lastModified, changeFrequency: "monthly", priority: 1 },
    ...servicesSitemap(),
    ...academySitemap(),
  ];
}
