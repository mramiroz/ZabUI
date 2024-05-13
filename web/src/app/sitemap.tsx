import { MetadataRoute } from "next";
import getCategories from "@/actions/Categories/getCategories";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

  const categories = await getCategories();
  const categoryRoutes = categories.map((category: string[]) => {
    return {
      url: `https://compui.vercel.app/categories/${category}`,
      lastModified: new Date(),
    }
  });
  return [
    {
      url: "https://compui.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://compui.vercel.app/component",
      lastModified: new Date(),
    },
    ...categoryRoutes

  ]
}