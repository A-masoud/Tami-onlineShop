import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export function AddProductForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setMessage(null);
    setLoading(true);

    try {
      const colors = formData.colors ? formData.colors.split("-").map(c => c.trim()) : [];
      const sizes = formData.sizes ? formData.sizes.split("-").map(s => s.trim()) : [];

      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("stock", formData.stock);
      colors.forEach(color => data.append("colors[]", color));
      sizes.forEach(size => data.append("sizes[]", size));
      for (let i = 0; i < formData.images.length; i++) {
        data.append("images", formData.images[i]);
      }

      const res = await axios.post("http://localhost:5000/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage({ type: "success", text: res.data.message });
      reset();
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.message || err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-800">افزودن محصول جدید</h2>

      <input
        type="text"
        placeholder="نام محصول"
        {...register("name", { required: "نام محصول الزامی است" })}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <textarea
        placeholder="توضیحات محصول"
        {...register("description")}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="قیمت"
        {...register("price", { required: "قیمت الزامی است" })}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <input
        type="number"
        placeholder="موجودی"
        {...register("stock", { required: "موجودی الزامی است" })}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}

      <input
        type="file"
        accept="image/*"
        multiple
        {...register("images", { required: "انتخاب حداقل یک عکس الزامی است" })}
        className="p-2 border rounded-md"
      />

      <input
        type="text"
        placeholder="سایزها (با- ) جدا کنید"
        {...register("colors")}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="سایزها (با- ) جدا کنید"
        {...register("sizes")}
        className="p-3 border rounded-md focus:outline-none focusw:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className={`p-3 rounded-md text-white ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {loading ? "در حال ارسال..." : "افزودن محصول"}
      </button>

      {message && (
        <p className={message.type === "error" ? "text-red-600" : "text-green-700"}>
          {message.text}
        </p>
      )}
    </form>
  );
}
