import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/academy/admin/", "/academy/login/", "/academy/admin", "/academy/login"],
      },
    ],
    sitemap: "https://www.temahux.com/sitemap.xml",
    host: "https://www.temahux.com",
  };
}
