import { supabase } from "../supabase/supabase";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function AddProductForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState(null);

  const onSubmit = async (formData) => {
    setMessage(null);

    try {
      // 1) گرفتن فایل عکس
      const file = formData.image?.[0];
      if (!file) {
        setMessage({ type: "error", text: "لطفاً عکس را انتخاب کنید" });
        return;
      }

      // 2) ساخت نام یکتا برای فایل
      const fileName = `${Date.now()}-${file.name}`;

      // 3) آپلود فایل در Storage (با upsert برای جلوگیری از خطا در آپلود دوباره)
      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(fileName, file, { upsert: true });

      if (uploadError) {
        setMessage({ type: "error", text: `خطا در آپلود فایل: ${uploadError.message}` });
        return;
      }

      // 4) گرفتن لینک عمومی عکس
      const { data: publicUrlData } = supabase.storage
        .from("product-images")
        .getPublicUrl(fileName);

      const imageUrl = publicUrlData.publicUrl;

      // 5) ذخیره محصول در دیتابیس همراه با لینک عکس
      const { error: insertError } = await supabase
        .from("products")
        .insert([
          {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            stock: formData.stock,
            image_url: imageUrl,
          },
        ]);

      if (insertError) {
        setMessage({ type: "error", text: `خطا در ثبت محصول: ${insertError.message}` });
        return;
      }

      setMessage({ type: "success", text: "محصول با موفقیت ثبت شد ✅" });
      reset();
    } catch (err) {
      setMessage({ type: "error", text: `خطای غیرمنتظره: ${err.message}` });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 p-4 border rounded"
    >
      <input
        type="text"
        placeholder="نام محصول"
        {...register("name", { required: "نام محصول الزامی است" })}
        className="p-2 border rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <textarea
        placeholder="توضیحات محصول"
        {...register("description")}
        className="p-2 border rounded"
      />

      <input
        type="number"
        placeholder="قیمت"
        {...register("price", { required: "قیمت الزامی است" })}
        className="p-2 border rounded"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <input
        type="number"
        placeholder="موجودی"
        {...register("stock", { required: "موجودی الزامی است" })}
        className="p-2 border rounded"
      />
      {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}

      <input
        type="file"
        accept="image/*"
        {...register("image", { required: "انتخاب عکس الزامی است" })}
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        افزودن محصول
      </button>

      {message && (
        <p className={message.type === "error" ? "text-red-600" : "text-green-700"}>
          {message.text}
        </p>
      )}
    </form>
  );
}
