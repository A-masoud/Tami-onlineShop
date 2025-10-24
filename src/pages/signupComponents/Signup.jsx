import axios from "axios";
import imge from "../../assets/svg/undraw_forms_1ciz.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { schema } from "./yup";
import { InputField } from "./InputField";

export function SignupPage({ modal = false, backgroundLocation }) {
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

  async function onSubmit(data) {
    try {
      setLoading(true);
      setMessage({ text: "", type: "" });

      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      handleSuccess(res.data.message);
      reset();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      if (err.response) handleError(err.response.data.message);
      else handleError("خطا در برقراری ارتباط با سرور");
    }
  }

  return (
    <div
      className={
        modal
          ? "fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50 p-4 font-vazir"
          : "min-h-screen flex items-center justify-center p-4 font-vazir bg-neutral-700/30"
      }
    >
      <div className="w-full max-w-4xl">
        <div className="min-h-[500px] bg-neutral-700/30 border-white border items-center justify-center p-4 font-vazir rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 mx-auto">
          <div className="hidden md:flex items-center justify-center p-10">
            <img src={imge} alt="Signup Illustration" className="max-h-80" />
          </div>

          <div className="flex flex-col justify-center p-10 text-right">
            <h2 className="text-3xl font-semibold mb-1 text-[#E6E4B2]">خوش آمدید</h2>
            <p className="text-lg text-white font-bold mb-6">ساخت حساب کاربری</p>

            {message.text && (
              <div
                className={`mb-4 p-2 rounded ${
                  message.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                }`}
              >
                {message.text}
              </div>
            )}

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
                className="w-full py-3 rounded-full bg-[#FA6320] text-white font-bold text-lg shadow-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
              </button>

              <p className="text-sm text-center text-[#E6E4B2]">
                
               ثبت‌نام با گوگل
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
