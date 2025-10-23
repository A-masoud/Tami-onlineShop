import axios from "axios";
import imge from "../../assets/svg/undraw_forms_1ciz.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { schema } from "./yup";
import { InputField } from "./InputField";

export function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleError(msg) {
    setMessage({ text: msg, type: "error" });
    setLoading(false);
  }

  function handleSuccess(msg) {
    setMessage({ text: msg, type: "success" });
    setLoading(false);
  }

  // =================== submit handler ===================
  async function onSubmit(data) {
    try {
      setLoading(true);
      setMessage({ text: "", type: "" });

      // ارسال داده‌ها به بک‌اند
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      handleSuccess(res.data.message);
      reset();
      navigate("/");
    } catch (err) {
      if (err.response) handleError(err.response.data.message);
      else handleError("خطا در برقراری ارتباط با سرور");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-200 to-blue-400 flex items-center justify-center p-4 font-vazir">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl grid md:grid-cols-2">
        <div className="hidden md:flex items-center justify-center bg-white p-10">
          <img src={imge} alt="Signup Illustration" className="max-h-200 shadow-lg" />
        </div>

        <div className="flex flex-col justify-center p-10 text-right">
          <h2 className="text-3xl font-semibold mb-1 text-gray-800">خوش اومدی!</h2>
          <p className="text-lg text-purple-700 font-bold mb-6">ساخت حساب کاربری</p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="نام کامل"
              type="text"
              placeholder="نام و نام خانوادگی"
              register={register}
              name="fullName"
              error={errors.fullName?.message}
              disabled={loading}
            />
            <InputField
              label="ایمیل"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              register={register}
              name="email"
              error={errors.email?.message}
              disabled={loading}
            />
            <InputField
              label="رمز عبور"
              type="password"
              placeholder="رمز عبور دلخواه"
              register={register}
              name="password"
              error={errors.password?.message}
              disabled={loading}
            />
            <InputField
              label="تکرار رمز عبور"
              type="password"
              placeholder="رمز عبور را دوباره وارد کنید"
              register={register}
              name="confirmPassword"
              error={errors.confirmPassword?.message}
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 text-white font-bold text-lg shadow-lg transition ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
            </button>
          </form>

          {message.text && (
            <p
              className={`mt-4 text-center ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
