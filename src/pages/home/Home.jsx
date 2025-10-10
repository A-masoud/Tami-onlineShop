import React from "react";
import { HeroBanner } from "./HeroBanner";
import { CategorySlider } from "./CategorySlider";
import { FeaturedProducts } from "./FeaturedProducts";
import { BlogSection } from "./BlogSection";
import { StoreFeatures } from "./StoreFeatures";
import backgraund from "../../assets/27915050_psdd_03_06_2022_85.png";

export function Home() {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-black bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgraund})` }}
    >
      <div className="relative z-20 w-full backdrop-blur-xs">
        <HeroBanner />
        <CategorySlider />
        <FeaturedProducts />
        <BlogSection />
        <StoreFeatures />
      </div>
    </div>
  );
}

