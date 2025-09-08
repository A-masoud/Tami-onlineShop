import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

export function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        سبد خرید شما خالی است 🛒
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">سبد خرید شما</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  قیمت: {item.price.toLocaleString()} تومان
                </p>
                {item.selectedColor && (
                  <p className="text-sm">
                    رنگ انتخابی:{" "}
                    <span
                      className="inline-block w-4 h-4 rounded"
                      style={{ backgroundColor: item.selectedColor }}
                    ></span>
                  </p>
                )}
                {item.warranty && (
                  <p className="text-sm text-green-600">خدمات پس از فروش فعال</p>
                )}
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600 hover:text-red-800 font-bold"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          خالی کردن سبد خرید
        </button>
        <p className="font-bold text-lg">
          مجموع: {totalPrice.toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
}

