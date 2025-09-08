

export function ColorAndQuantitySelector({ colors, selectedColor, setSelectedColor, quantity, setQuantity }) {
  return (
    <div className="w-4/12 flex flex-col pb-1.5 gap-2 text-right">
      <h3 className="text-gray-500">رنگ</h3>
      <select
        className="w-full rounded-3xl p-1.5 bg-neutral-900 text-white"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <div className="flex bg-neutral-900 p-2 rounded-2xl gap-2 h-full items-center mt-2">
        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          className="w-10 h-full flex items-center justify-center bg-neutral-700 rounded-lg text-lg"
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-10 h-full flex items-center justify-center bg-neutral-700 rounded-lg text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
