import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/fakeData";
import { ProductImages } from "../productDetailComponents/ProductImages";
import { ProductInfo } from "../productDetailComponents/ProductInfo";
import { PurchaseBox } from "../productDetailComponents/PurchaseBox";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(null);

  const dispatch = useDispatch();

  if (!product)
    return (
      <div className="text-center text-red-500 mt-10">محصول پیدا نشد 😢</div>
    );

  const colors =
    product.colors || ["#FF0000", "#00FF00", "#0000FF", "#000000", "#FFFFFF"];

  const handleAddToCart = (productWithOptions) => {
    // اینجا رنگ انتخاب شده رو هم به محصول اضافه می‌کنیم
    dispatch(addToCart({ ...productWithOptions, selectedColor }));
  };

  return (
    <div className="mx-auto mt-10 max-w-7xl p-3 grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl border-blue-700 text-right">
      <ProductImages product={product} />
      <ProductInfo
        product={product}
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <PurchaseBox product={product} onAddToCart={handleAddToCart} />
    </div>
  );
}
