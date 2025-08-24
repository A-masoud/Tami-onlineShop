import { ColorSelector } from "./ColorSelector";

export function ProductInfo({ product, colors, selectedColor, setSelectedColor }) {
  return (
    <div className="order-2 md:order-2 flex flex-col justify-start border-r-1 border-blue-700 pr-2.5">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-600 text-lg mb-4">قیمت: {product.price.toLocaleString()} تومان</p>
      <hr className="my-3   border-blue-700" />
      <p className="text-gray-500 text-sm">
        اینجا می‌تونی توضیحاتی درباره محصول بنویسی. مثلاً ویژگی‌های خاص، کیفیت، جنس، و اطلاعات تکمیلی.
      </p>
      <hr className="mt-3  border-blue-700 mr-" />

      <ColorSelector 
        colors={colors} 
        selectedColor={selectedColor} 
        setSelectedColor={setSelectedColor} 
      />
    </div>
  );
}