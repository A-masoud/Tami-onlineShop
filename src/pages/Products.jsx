import { products } from "../data/fakeData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export function Products() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.title} به سبد خرید اضافه شد!`);
  };

  return (
    <div className="grid w-full rounded-xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 p-4 bg-gray-100">
      {products.map((product) => (
        <div
          key={product.id}
          className="
            p-4 rounded-xl 
            flex flex-row-reverse items-center gap-4
            sm:flex-col
            shadow-md
            shadow-gray-500
            w-auto
            bg-gray-50
          "
        >
          {/* عکس */}
          <img
            src={product.image}
            alt={product.title}
            className="lg:w-48 lg:h-48 md:w-40 md:h-40 sm:w-32 sm:h-32 w-24 h-24 object-contain rounded-md"
          />

          {/* محتوا سمت چپ عکس */}
          <div className="flex flex-col flex-grow items-center">
            <h3 className="text-lg text-gray-700">{product.title}</h3>
            <div className="mt-auto">
              <p className="text-gray-950">
                {product.price.toLocaleString()} تومان
              </p>
            </div>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-600 text-sm rounded-lg p-1.5 text-white hover:bg-green-700 transition"
              >
                افزودن به سبد خرید
              </button>
              <Link
                to={`/products/${product.id}`}
                className="bg-blue-700 text-sm rounded-lg p-1.5 text-gray-200 hover:bg-blue-800 transition"
              >
                جزئیات
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
