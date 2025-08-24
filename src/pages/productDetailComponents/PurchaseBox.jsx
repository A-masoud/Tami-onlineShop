import { ToggleSwitch } from "./ToggleSwitch";
import { useState } from "react";

export function PurchaseBox({ product ,onAddToCart }) {
  const [warranty, setWarranty] = useState(false);

  return (
    <div className="order-3 md:order-1 flex flex-col items-center rounded-md p-4 shadow bg-gray-300">
      <p className="text-sm text-gray-600 mb-2">فروشنده:</p>
      <p className="text-lg font-semibold mb-4 text-blue-700">فروشگاه مثال</p>

      <p className="text-gray-700 text-lg mb-4">
        قیمت: <span className="font-bold">{product.price.toLocaleString()} تومان</span>
      </p>

      <div className="flex justify-between items-center w-full mb-4">
        <ToggleSwitch
          checked={warranty}
          onChange={(e) => setWarranty(e.target.checked)}
        />
        <p className="text-sm text-gray-800">افزودن خدمات پس از فروش</p>
      </div>

      <button 
      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
      onClick={()=> onAddToCart({...product ,warranty})}
      >
        افزودن به سبد خرید 🛒
      </button>
    </div>
  );
}
