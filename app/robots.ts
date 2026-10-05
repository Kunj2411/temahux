import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/academy/admin/",
          "/academy/admin",
          "/academy/login/",
          "/academy/login",
          "/academy/signup",
        ],
      },
    ],
    sitemap: "https://www.temahux.com/sitemap.xml",
  };
}
