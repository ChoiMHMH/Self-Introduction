import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cmh-portfolio.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/flawdetector`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/danchoo`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mogazoa`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rolling`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
