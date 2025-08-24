import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabase/supabase";  // اصلاح تایپو
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: Yup.string().required("رمز عبور معتبر نیست"),
});

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  async function onSubmit(data) {
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("با موفقیت وارد شدید");
        reset();
        navigate("/");
      }
    } catch (err) {
      setMessage("مشکلی پیش آمده، لطفا دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-200 to-blue-400 flex items-center justify-center p-4 font-vazir">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl grid md:grid-cols-2">
        {/* تصویر سمت چپ */}
        <div className="hidden md:flex items-center justify-center bg-white p-10">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
            alt="Login Illustration"
            className="max-h-80"
          />
        </div>

        {/* فرم سمت راست */}
        <div className="flex flex-col justify-center p-10 text-right">
          <h2 className="text-3xl font-semibold mb-1 text-gray-800">خوش آمدید</h2>
          <p className="text-lg text-purple-700 font-bold mb-6">صفحه ورود</p>

          {message && (
            <div className={`mb-4 p-2 rounded ${message.includes("موفقیت") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
              {message}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ایمیل
              </label>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="email"
                  placeholder="ایمیل را وارد کنید"
                  className="bg-transparent outline-none flex-1 text-right pr-2"
                  {...register("email")}
                  disabled={loading}
                  required
                />
                {/* ...آیکون ایمیل */}
              </div>
              {errors.email && (
                <p className="text-red-500 mt-1 text-xs italic">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                رمز عبور
              </label>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="password"
                  placeholder="رمز عبور را وارد کنید"
                  className="bg-transparent outline-none flex-1 text-right pr-2"
                  {...register("password")}
                  disabled={loading}
                  required
                />
                {/* ...آیکون قفل */}
              </div>
              {errors.password && (
                <p className="text-red-500 mt-1 text-xs italic">{errors.password.message}</p>
              )}
              <div className="text-right mt-1">
                <a href="#" onClick={e => e.preventDefault()} className="text-sm text-gray-500 hover:text-gray-700">
                  رمزتو فراموش کردی؟
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 text-white font-bold text-lg shadow-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>

            <p className="text-sm text-center text-gray-600">
              حساب کاربری ندارید؟
              <Link to="/signup" className="text-blue-700 font-semibold mr-1">
                ثبت‌نام کنید
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
