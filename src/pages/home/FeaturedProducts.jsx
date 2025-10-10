

import  { useState } from "react";
import watch from "../../assets/ساعت-مچی-مردانه-تلارو-مدل-T-3099-G-S1112.jpg"
import shoes from "../../assets/1712649045other_file_0-large.jpg"
import suit from "../../assets/1664214022_61617.jpg"
import shirt from "../../assets/1707811934_p-extra_large.jpg"
import galsses from "../../assets/il_794xN.6981203084_p5yt.webp"

const products = {
  new: [
    { id: 1, name: "کت مشکی کلاسیک", price: "1,200,000", image: suit },
    { id: 2, name: "پیراهن مشکی رسمی", price: "450,000", image: shirt },
    { id: 3, name: "کفش چرم ", price: "980,000", image: shoes },
    { id: 4, name: "ساعت مچی مردانه", price: "2,300,000", image: watch},
  ],
  best: [
    { id: 5, name: "کت سرمه‌ای", price: "1,350,000", image: "/images/product-suit2.jpg" },
    { id: 6, name: "پیراهن مشکی", price: "500,000", image: "/images/product-shirt2.jpg" },
    { id: 7, name: "کفش اسپرت سفید", price: "720,000", image: "/images/product-shoes2.jpg" },
    { id: 8, name: "عینک آفتابی", price: "670,000", image: galsses },
  ],
};

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <section className="max-w-9/10 mx-auto my-12 px-4 md:px-10">
      <div className="items-center mb-6 z-10">
        <h2 className="text-2xl text-[#E6E4B2] text-right md:text-3xl font-bold">محصولات</h2>
        <div className="space-x-2">
          <button
            onClick={() => setActiveTab("new")}
            className={`px-4 py-2 rounded-full font-semibold ${
              activeTab === "new" ? "bg-[#FA6320] text-black" : "bg-gray-200"
            }`}
          >
            جدیدترین‌ها
          </button>
          <button
            onClick={() => setActiveTab("best")}
            className={`px-4 py-2 rounded-full font-semibold ${
              activeTab === "best" ? "bg-[#FA6320] text-black" : "bg-gray-200"
            }`}
          >
            پرفروش‌ها
          </button>
        </div>
      </div>

      {/* Grid محصولات */}
      <div className=" mx-auto grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products[activeTab].map((product) => (
          <div
            key={product.id}
            className="bg-gray-400/10 rounded-xl  shadow-md shadow-gray-500 hover:shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80
               object-cover rounded-2xl hover:scale-105 hover:rounded-3xl"
            />
            <div className="p-4 text-center text-white">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-400 font-bold mb-3">{product.price} تومان</p>
              <button className="w-full bg-[#FA6320] text-black py-2 rounded-lg hover:bg-white transition">
                افزودن به سبد
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
