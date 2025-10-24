import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    if (!query) return;
    const fetchResults = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/search?q=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <section dir="rtl" className="p-6 min-h-screen bg-neutral-900 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">نتایج جستجو برای: "{query}"</h2>

      {results.length === 0 ? (
        <p className="text-white/60">هیچ محصولی یافت نشد.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => {
            const hasDiscount = product.discount > 0;
            const discountedPrice = hasDiscount
              ? product.price - (product.price * product.discount) / 100
              : product.price;

            return (
              <Link key={product._id} to={`/product/${product._id}`}>
                <div className="relative bg-gray-400/10 rounded-xl shadow-md shadow-gray-500 hover:shadow-lg overflow-hidden cursor-pointer">
                  
                  {hasDiscount && (
                    <div className="absolute top-3 right-3 bg-[#FA6320] text-white text-sm font-bold px-2 py-1 rounded-lg z-10">
                      %{product.discount.toLocaleString("fa-IR")}
                    </div>
                  )}

                  <img
                    src={
                      product.image_url
                        ? `http://localhost:5000/${product.image_url.replace(/^\/+/, "")}`
                        : "/placeholder.png"
                    }
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-2xl hover:scale-105 hover:rounded-3xl transition"
                  />

                  <div className="p-4 text-center text-white">
                    <h3 className="font-semibold text-lg mb-2">
                      {product.name} {product.model ? `مدل ${product.model}` : ""}
                    </h3>

                    <div className="mb-3">
                      {hasDiscount && (
                        <p className="text-gray-500 line-through mb-1">
                          {product.price.toLocaleString("fa-IR")} تومان
                        </p>
                      )}
                      <p className={`font-bold ${hasDiscount ? "text-[#FA6320]" : "text-gray-400"}`}>
                        {discountedPrice.toLocaleString("fa-IR")} تومان
                      </p>
                    </div>

                    <button className="w-full bg-[#FA6320] text-black py-2 rounded-lg hover:bg-white transition">
                      مشاهده محصول
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
