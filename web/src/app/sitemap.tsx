import { MetadataRoute } from "next";
import getCategories from "@/actions/Categories/getCategories";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

  const categories = await getCategories();
  const categoryRoutes = categories.map((category: string[]) => {
    return {
      url: `https://zabui.vercel.app/categories/${category}`,
      lastModified: new Date(),
    }
  });
  return [
    {
      url: "https://zabui.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://zabui.vercel.app/component",
      lastModified: new Date(),
    },
    ...categoryRoutes

  ]
}