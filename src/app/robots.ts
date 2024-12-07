import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://cmh-portfolio.vercel.app/sitemap.xml",
  };
}
/*
User-Agent: *
Allow: /
Disallow: /private/

Sitemap: https://cmh-portfolio.vercel.app/sitemap.xml
*/
