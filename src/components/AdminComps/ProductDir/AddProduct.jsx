import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
  name: Yup.string().required("نام محصول الزامی است"),
  price: Yup.number().required("قیمت الزامی است").positive("باید عدد مثبت باشد"),
  stock: Yup.number().required("موجودی الزامی است").min(0, "نمیتواند منفی باشد"),
  brand: Yup.string().required("برند را وارد کنید"),
  description: Yup.string().required("توضیحات الزامی است"),
  category: Yup.string().required("دسته‌بندی الزامی است"),
});

const AddProduct = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const categoriesList = [
    "کت و شلوار",
    "تیشرت",
    "کفش",
    "اکسسوری",
    "ژاکت",
    "کراوات",
    "ساعت",
    "شلوار",
    "هودی"
  ];

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("stock", Number(data.stock));
    formData.append("brand", data.brand);
    formData.append("discount", Number(data.discount || 0));
    formData.append("category", data.category);

    const multiFields = ["colors", "sizes", "tags", "searchableKeywords"];
    multiFields.forEach((field) => {
      if (data[field]) {
        const arr = data[field].split("-").map((i) => i.trim());
        arr.forEach((item) => formData.append(field, item));
      }
    });

    if (imageFiles.length > 0) {
      imageFiles.forEach((file) => formData.append("images", file));
    }

    try {
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ محصول با موفقیت اضافه شد!");
      reset();
      setImageFiles([]);
    } catch (err) {
      console.error(err);
      alert("❌ خطا در افزودن محصول!");
    }
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setImageFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">افزودن محصول جدید</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <input {...register("name")} placeholder="نام محصول" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: کاپشن مردانه مدل X</p>
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <input {...register("price")} type="number" placeholder="قیمت (تومان)" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">عدد بدون کاما وارد شود</p>
          <p className="text-red-500 text-sm">{errors.price?.message}</p>
        </div>

        <div>
          <input {...register("stock")} type="number" placeholder="موجودی انبار" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">تعداد موجود از محصول</p>
          <p className="text-red-500 text-sm">{errors.stock?.message}</p>
        </div>

        <div>
          <input {...register("discount")} type="number" placeholder="درصد تخفیف (اختیاری)" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">درصد عددی بین ۰ تا ۱۰۰</p>
        </div>

        <div>
          <input {...register("brand")} placeholder="برند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: Zara یا Adidas</p>
          <p className="text-red-500 text-sm">{errors.brand?.message}</p>
        </div>

        <div>
          <select {...register("category")} className="border bg-gray-700 p-2 rounded w-full">
            <option value="">انتخاب دسته‌بندی</option>
            {categoriesList.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <p className="text-gray-500 text-sm mt-1">یکی از دسته‌ها را انتخاب کنید</p>
          <p className="text-red-500 text-sm">{errors.category?.message}</p>
        </div>

        <div>
          <input {...register("colors")} placeholder="رنگ‌ها با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: قرمز - آبی - مشکی</p>
        </div>

        <div>
          <input {...register("sizes")} placeholder="سایزها با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: S - M - L - XL</p>
        </div>

        <div>
          <input {...register("tags")} placeholder="تگ‌ها با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: زمستانی - پرفروش - جدید</p>
        </div>

        <div>
          <input {...register("searchableKeywords")} placeholder="کلمات کلیدی با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">برای بهبود جستجو در سایت</p>
        </div>

        <div className="md:col-span-2">
          <textarea {...register("description")} placeholder="توضیحات محصول" className="border p-2 rounded w-full" rows={4} />
          <p className="text-gray-500 text-sm mt-1">توضیحی درباره ویژگی‌ها و کاربرد محصول</p>
          <p className="text-red-500 text-sm">{errors.description?.message}</p>
        </div>

        <div className="md:col-span-2">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
            className="border p-2 rounded w-full"
          />
          {imageFiles.length > 0 && (
            <div className="mt-2 text-gray-200 text-sm">
              <p>✅ تعداد فایل انتخاب شده: {imageFiles.length}</p>
              <ul className="list-disc ml-5">
                {imageFiles.map((file, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    {file.name}
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="text-red-400 hover:text-red-600 ml-2"
                    >
                      حذف
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-gray-500 text-sm mt-1">می‌توانید چند فایل انتخاب کنید (jpg, png)</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white py-2 px-4 rounded md:col-span-2 hover:bg-blue-700 transition disabled:opacity-60"
        >
          {isSubmitting ? "در حال ارسال..." : "افزودن محصول"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
