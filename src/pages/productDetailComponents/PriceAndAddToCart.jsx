
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export function PriceAndAddToCart({ price, productData }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      id: productData?.id || Date.now(),
      title: productData?.title || "محصول",
      price: price,
      image: productData?.image || "",
      selectedColor: productData?.selectedColor,
      selectedSize: productData?.selectedSize,
      quantity: productData?.quantity || 1,
      warranty: productData?.warranty || false,
    };
    
    dispatch(addToCart(cartItem));
    alert("محصول به سبد خرید اضافه شد!");
  };

  return (
    <div className="flex justify-between items-center p-2 rounded-2xl bg-neutral-900 mt-5">
      <button
        className="bg-white p-5 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
        type="button"
        onClick={handleAddToCart}
      >
        <div
          className="bg-[var(--quaternary-color)] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2 text-sm text-right">افزودن به سبد خرید</p>
      </button>
      <div className="text-right">
        <p className="text-gray-400">قیمت</p>
        <span className="text-2xl font-bold">${price}</span>
      </div>
    </div>
  );
}
