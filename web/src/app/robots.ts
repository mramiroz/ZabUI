import { MetadataRoute } from "next";

export default function robost(): MetadataRoute.Robots{
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/dashboard",
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`
  }
}