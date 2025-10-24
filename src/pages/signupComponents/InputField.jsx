export function InputField({ label, type, placeholder, register, name, error, disabled }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-100 rounded-full px-4 py-2 outline-none text-right"
        {...register(name)}
        disabled={disabled}
        autoComplete={type === "password" ? "new-password" : undefined}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}