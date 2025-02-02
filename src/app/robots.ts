import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/profile"], // Block private pages
      },
    ],
    sitemap: "https://codefount.vercel.app/sitemap.xml",
  };
}
