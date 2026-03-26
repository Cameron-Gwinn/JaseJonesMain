import type { Metadata } from "next";
import { categoryMeta } from "@/lib/data/products";
import ShopListing from "@/components/shop/ShopListing";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category] ?? categoryMeta.all;
  return {
    title: meta.label,
    description: meta.description,
  };
}

export function generateStaticParams() {
  return ["all", "furniture", "fabrics", "rugs", "lighting", "objects"].map((category) => ({
    category,
  }));
}

export default async function ShopCategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = categoryMeta[category] ?? categoryMeta.all;

  return <ShopListing category={category} meta={meta} />;
}
