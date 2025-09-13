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
  const sizes = ["S", "M", "L", "XL", "2xl"];
  const [selectedSize, setSelectedSize] = useState("M");
  const colors = ["طوسی", "مشکی", "سفید"];
  const [selectedColor, setSelectedColor] = useState("طوسی");

  return (
    <div className="text-white border flex-col md:flex-row items-center justify-center p-4">
      <div className="max-w w-full bg-black rounded-2xl p-6 md:flex-row-reverse shadow-lg md:flex md:gap-6">
        
        {/* تصویر محصول */}
        <div className="md:w-1/3 flex justify-center items-center">
           <ProductImage src={hoodie} alt="هودی مشکی" className="w-full " />
        </div>

        {/* جزئیات محصول */}
        <div className="md:w-2/3 h-full">
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
          <PriceAndAddToCart 
            price={180.0} 
            productData={{
              id: 1,
              title: "هودی مشکی",
              image: hoodie,
              selectedColor,
              selectedSize,
              quantity,
              warranty: true
            }}
          />
        </div>
      </div>
    </div>
  );
}
