import { useState } from "react";
import hoodie from "../../assets/SB004a-copy-removebg.png";

// Import کامپوننت‌هایی که قبلاً ساختیم
import { ProductImage } from "./ProductImage";
import { ProductTitleAndPopularity } from "./ProductTitleAndPopularity";
import { SizeSelector } from "./SizeSelector";
import { ColorAndQuantitySelector } from "./ColorAndQuantitySelector";
import { ProductDescription } from "./ProductDescription";
import { PriceAndAddToCart } from "./PriceAndAddToCart";

export function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "L", "XL","2xl"];
  const [selectedSize, setSelectedSize] = useState("M");
  const colors = ["طوسی", "مشکی", "سفید"];
  const [selectedColor, setSelectedColor] = useState("طوسی");

  return (
    <div className="text-white border  flex items-center justify-center p-4">
      <div className="max-w-sm w-full  bg-black rounded-2xl p-6 shadow-lg">

        {/* تصویر محصول */}
        <ProductImage src={hoodie} alt="هودی مشکی" />

        {/* عنوان و محبوبیت */}
        <ProductTitleAndPopularity
          title="هودی مشکی"
          category="پوشاک مردانه"
          popularity="88.8%"
        />

        {/* Size, Color, Quantity, Description */}
        <div className="flex h-52 mt-3.5 gap-2">
          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          <ColorAndQuantitySelector
            colors={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            quantity={quantity}
            setQuantity={setQuantity}
          />

          <ProductDescription
            description="هودی مشکی با طراحی مدرن و راحت، مناسب استفاده روزمره و ورزش. پارچه نرم و گرم برای روزهای سرد."
          />
        </div>

        {/* قیمت و افزودن به سبد خرید */}
        <PriceAndAddToCart price={180.0} />

      </div>
    </div>
  );
}
