import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

export function MasoudCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        <div className="text-4xl mb-4">🛒</div>
        سبد خرید شما خالی است
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto mt-10 p-8 rounded-lg shadow-xl shadow-[#1d1d1dde] bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-color-light)]">
        <div className="text-center flex justify-center text-white">
          <ShoppingBagIcon className="w-10 h-10 text-center" />
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-500 py-4"
            >
              <div className="flex w-full items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-sm text-white">{item.title}</h3>
                  <p className="text-xs font-bold text-[var(--tertiary-color)]">
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
                    <p className="text-sm text-green-600">
                      خدمات پس از فروش فعال
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-[var(--quaternary-color)]  cursor-pointer hover:opacity-80 transition duration-300 font-bold"
              >
                <TrashIcon className="w-10 h-6 ml-8" />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="w-full mb-8 flex justify-between items-center">
            <p className="font-bold text-lg text-white">
              {totalPrice.toLocaleString()} تومان
            </p>
            <p className="text-sm text-white">:مجموع</p>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-[var(--quaternary-color)] transition duration-300 cursor-pointer font-bold text-black px-4 py-2 rounded-lg hover:text-[var(--primary-color-light)] hover:scale-95"
          >
            خالی کردن سبد خرید
          </button>
        </div>
      </div>
      <span className="text-gray-300 text-xs cursor-pointer mt-4">_________ برای تکمیل سفارش وارد شوید _________</span>
    </div>
  );
}
