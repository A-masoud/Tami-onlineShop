export function SizeSelector({ sizes, selectedSize, setSelectedSize }) {
  return (
    <div className="w-2/12 text-right">
      <h3 className="text-gray-500 mr-1.5">سایز</h3>
      <div className="h-full flex flex-col gap-2 p-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold ${
              selectedSize === size
                ? "bg-[var(--quaternary-color)] text-black"
                : " text-gray-400"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
