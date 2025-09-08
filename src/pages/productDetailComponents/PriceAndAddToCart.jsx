

export function PriceAndAddToCart({ price }) {
  return (
    <div className="flex justify-between items-center p-2 rounded-2xl bg-neutral-900 mt-5">
      <button className="bg-[var(--quaternary-color)] text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
        افزودن به سبد خرید
      </button>
      <div className="text-right">
        <p className="text-gray-400">قیمت</p>
        <span className="text-2xl font-bold">${price}</span>
      </div>
    </div>
  );
}
