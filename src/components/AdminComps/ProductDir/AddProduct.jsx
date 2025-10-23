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
  const [imageFile, setImageFile] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const categoriesList = [
    "لباس مردانه",
    "لباس زنانه",
    "کفش",
    "اکسسوری",
    "زمستانی",
    "تابستانی",
  ];

  const onSubmit = async (data) => {
    const formData = new FormData();

    // فیلدهای متنی
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("stock", Number(data.stock));
    formData.append("brand", data.brand);
    formData.append("discount", Number(data.discount || 0));
    formData.append("category", data.category);

    // فیلدهایی که چند مقدار دارن
    const multiFields = ["colors", "sizes", "tags", "searchableKeywords"];
    multiFields.forEach((field) => {
      if (data[field]) {
        const arr = data[field].split("-").map((i) => i.trim());
        arr.forEach((item) => formData.append(field, item));
      }
    });

    // تصویر
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ محصول با موفقیت اضافه شد!");
      reset();
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert("❌ خطا در افزودن محصول!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">افزودن محصول جدید</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* نام محصول */}
        <div>
          <input {...register("name")} placeholder="نام محصول" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: کاپشن مردانه مدل X</p>
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        {/* قیمت */}
        <div>
          <input {...register("price")} type="number" placeholder="قیمت (تومان)" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">عدد بدون کاما وارد شود</p>
          <p className="text-red-500 text-sm">{errors.price?.message}</p>
        </div>

        {/* موجودی */}
        <div>
          <input {...register("stock")} type="number" placeholder="موجودی انبار" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">تعداد موجود از محصول</p>
          <p className="text-red-500 text-sm">{errors.stock?.message}</p>
        </div>

        {/* تخفیف */}
        <div>
          <input {...register("discount")} type="number" placeholder="درصد تخفیف (اختیاری)" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">درصد عددی بین ۰ تا ۱۰۰</p>
        </div>

        {/* برند */}
        <div>
          <input {...register("brand")} placeholder="برند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: Zara یا Adidas</p>
          <p className="text-red-500 text-sm">{errors.brand?.message}</p>
        </div>

        {/* دسته‌بندی (کشویی) */}
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

        {/* رنگ‌ها */}
        <div>
          <input {...register("colors")} placeholder="رنگ‌ها با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: قرمز - آبی - مشکی</p>
        </div>

        {/* سایزها */}
        <div>
          <input {...register("sizes")} placeholder="سایزها با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: S - M - L - XL</p>
        </div>

        {/* تگ‌ها */}
        <div>
          <input {...register("tags")} placeholder="تگ‌ها با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">مثلاً: زمستانی - پرفروش - جدید</p>
        </div>

        {/* کلیدواژه‌ها */}
        <div>
          <input {...register("searchableKeywords")} placeholder="کلمات کلیدی با - جدا شوند" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">برای بهبود جستجو در سایت</p>
        </div>

        {/* توضیحات */}
        <div className="md:col-span-2">
          <textarea {...register("description")} placeholder="توضیحات محصول" className="border p-2 rounded w-full" rows={4} />
          <p className="text-gray-500 text-sm mt-1">توضیحی درباره ویژگی‌ها و کاربرد محصول</p>
          <p className="text-red-500 text-sm">{errors.description?.message}</p>
        </div>

        {/* تصویر */}
        <div className="md:col-span-2">
          <input type="file" onChange={(e) => setImageFile(e.target.files[0])} accept="image/*" className="border p-2 rounded w-full" />
          <p className="text-gray-500 text-sm mt-1">فایل تصویر را انتخاب کنید (jpg, png)</p>
        </div>

        {/* دکمه ارسال */}
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
