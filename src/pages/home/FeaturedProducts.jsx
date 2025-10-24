import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products?sort=newest"
        );
        setProducts(res.data);
      } catch (err) {
        console.error("خطا در گرفتن محصولات:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-9/10 mx-auto my-12 px-4 md:px-10">
      <div className="mb-6">
        <h2 className="text-2xl text-[#E6E4B2] text-right md:text-3xl font-bold">
          پیشنهادات ویژه
        </h2>
      </div>

      <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => {
          const hasDiscount = product.discount > 0;
          const discountedPrice = hasDiscount
            ? product.price - (product.price * product.discount) / 100
            : product.price;

          return (
            <Link key={product._id} to={`/productdetail/${product._id}`}>
              <div className="relative bg-gray-400/10 rounded-xl shadow-md shadow-gray-500 hover:shadow-lg overflow-hidden cursor-pointer">
                
                {hasDiscount && (
                  <div className="absolute top-3 right-3 bg-[#FA6320] text-white text-sm font-bold px-2 py-1 rounded-lg z-10">
                    %{product.discount.toLocaleString("fa-IR")}
                  </div>
                )}

                <img
                  src={
                    product.image_url
                      ? `http://localhost:5000${product.image_url}`
                      : "/placeholder.png"
                  }
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-2xl hover:scale-105 hover:rounded-3xl"
                />
                <div className="p-4 text-center text-white">
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ direction: "rtl", unicodeBidi: "embed" }}
                  >
                    {product.name} {product.model ? `مدل ${product.model}` : ""}
                  </h3>

                  <div className="mb-3">
                    {hasDiscount && (
                      <p
                        className="text-gray-500 line-through mb-1"
                        style={{ direction: "rtl", unicodeBidi: "plaintext" }}
                      >
                        {product.price.toLocaleString("fa-IR")} تومان
                      </p>
                    )}
                    <p
                      className={`font-bold ${
                        hasDiscount ? "text-[#FA6320]" : "text-gray-400"
                      }`}
                      style={{ direction: "rtl", unicodeBidi: "plaintext" }}
                    >
                      {discountedPrice.toLocaleString("fa-IR")} تومان
                    </p>
                  </div>

                  <button className="w-full bg-[#FA6320] text-black py-2 rounded-lg hover:bg-white transition">
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
