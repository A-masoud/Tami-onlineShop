import React, { useEffect, useState } from "react";
import axios from "axios";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  // استخراج لیست برندها بدون تکرار
  const brands = [...new Set(products.map((p) => p.brand))];

  // فیلتر محصولات بر اساس برند
  const filteredProducts = selectedBrand
    ? products.filter((p) => p.brand === selectedBrand)
    : products;

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-900 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">لیست محصولات</h2>

      {/* فیلتر برند */}
      <div className="mb-6">
        <select
          className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">همه برندها</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* نمایش محصولات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-gray-800 p-4 rounded-lg shadow-md shadow-gray-600 text-white"
          >
            <img
              src={
                product.image_url
                  ? `http://localhost:5000${product.image_url}`
                  : "/placeholder.png"
              }
              alt={product.name}
              className="w-full h-70 object-cover rounded"
            />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-gray-300 mt-1">{product.category}</p>
            <p className="mt-1">{product.price.toLocaleString()} تومان</p>
            <p className="mt-1 text-sm text-gray-400">برند: {product.brand}</p>
            <p className="mt-1 text-sm text-gray-400">موجودی: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
