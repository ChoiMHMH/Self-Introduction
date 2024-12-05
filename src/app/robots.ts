// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://self-introduction-umber-six.vercel.app/sitemap.xml",
    host: "https://self-introduction-umber-six.vercel.app",
  };
}
