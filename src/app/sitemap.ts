import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://codefount.vercel.app/",
            lastModified: new Date().toISOString(),
            priority: 1.0,
            changeFrequency: "daily",
        },
        {
            url: "https://codefount.vercel.app/web-editor",
            lastModified: new Date().toISOString(),
            priority: 0.9,
            changeFrequency: "daily",
        },
        {
            url: "https://codefount.vercel.app/pricing",
            lastModified: new Date().toISOString(),
            priority: 0.9,
            changeFrequency: "daily",
        },
        {
            url: "https://codefount.vercel.app/snippets",
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "daily",
        },
        {
            url: "https://codefount.vercel.app/support",
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "daily",
        },
        {
            url: "https://codefount.vercel.app/profile",
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "daily",
        },
        {
            url: "https://codefount.vercel.app/privacy",
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "daily",
        },
        {
            url: "https://codefount.vercel.app/terms",
            lastModified: new Date().toISOString(),
            priority: 0.8,
            changeFrequency: "daily",
        },
  ];
}
