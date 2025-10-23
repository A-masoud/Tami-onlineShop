import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductImage } from "./ProductImage";
import { ProductTitleAndPopularity } from "./ProductTitleAndPopularity";
import { SizeSelector } from "./SizeSelector";
import { ColorAndQuantitySelector } from "./ColorAndQuantitySelector";
import { ProductDescription } from "./ProductDescription";
import { PriceAndAddToCart } from "./PriceAndAddToCart";

export function ProductDetail() {
  const { id } = useParams(); // گرفتن آیدی از URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        console.log(res.data)

        setProduct(res.data);

        // ست کردن مقادیر پیش‌فرض سایز و رنگ
        if (res.data.sizes && res.data.sizes.length > 0)
          setSelectedSize(res.data.sizes[0]);
        if (res.data.colors && res.data.colors.length > 0)
          setSelectedColor(res.data.colors[0]);
      } catch (err) {
        console.error("خطا در دریافت محصول:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-white text-center mt-10">در حال بارگذاری...</p>;

  return (
    <div className="text-white md:max-h-[700px] flex flex-col md:flex-row items-center justify-center p-4">
      <div className="max-w w-full bg-black rounded-2xl p-6 md:flex-row-reverse shadow-lg md:flex md:gap-6">
        
        {/* تصویر محصول */}
        <div className="md:w-1/3 flex justify-center">
          <ProductImage src={product.image_url ? `http://localhost:5000${product.image_url}` : "/placeholder.png"} alt={product.name} />
        </div>

        {/* جزئیات محصول */}
        <div className="md:w-2/3 h-full">
          {/* عنوان و محبوبیت */}
          <ProductTitleAndPopularity
            title={product.name}
            category={product.category}
            popularity={product.popularity || "0%"}
          />

          {/* Size, Color, Quantity, Description */}
          <div className="flex h-52 mt-3.5 gap-2">
            <SizeSelector
              sizes={product.sizes || []}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            <ColorAndQuantitySelector
              colors={product.colors || []}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              quantity={quantity}
              setQuantity={setQuantity}
            />

            <ProductDescription
              description={product.description || "توضیحی برای این محصول موجود نیست."}
            />
          </div>

          {/* قیمت و افزودن به سبد خرید */}
          <PriceAndAddToCart 
            price={product.price}
            productData={{
              id: product._id,
              title: product.name,
              image: product.image_url ? `http://localhost:5000${product.image_url}` : "/placeholder.png",
              selectedColor,
              selectedSize,
              quantity,
              warranty: product.warranty || false
            }}
          />
        </div>
      </div>
    </div>
  );
}
