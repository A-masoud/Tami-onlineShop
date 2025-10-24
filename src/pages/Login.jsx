import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export function LoginPage({ modal = false }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setMessage("");
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage(res.data.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      if (err.response) setMessage(err.response.data.message);
      else setMessage("خطا در برقراری ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={modal ? "fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50" : "min-h-screen flex items-center justify-center"}>
      <div className={modal ? "w-full max-w-4xl" : "w-full max-w-4xl"}>
        <div className="min-h-[500px] bg-gradient-to-tr from-gray-900 to-[#FA6320] flex items-center justify-center p-4 font-vazir rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 mx-auto">
          <div className="hidden md:flex items-center justify-center p-10">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
              alt="Login Illustration"
              className="max-h-80"
            />
          </div>

          <div className="flex flex-col justify-center p-10 text-right">
            <h2 className="text-3xl font-semibold mb-1 text-[#E6E4B2]">خوش آمدید</h2>
            <p className="text-lg text-white font-bold mb-6">صفحه ورود</p>

            {message && (
              <div className={`mb-4 p-2 rounded ${message.includes("موفقیت") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                {message}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">ایمیل</label>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <input
                    type="email"
                    placeholder="ایمیل را وارد کنید"
                    className="bg-transparent outline-none flex-1 text-right pr-2"
                    {...register("email", { required: "ایمیل الزامی است" })}
                    disabled={loading}
                  />
                </div>
                {errors.email && <p className="text-red-500 mt-1 text-xs italic">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">رمز عبور</label>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <input
                    type="password"
                    placeholder="رمز عبور را وارد کنید"
                    className="bg-transparent outline-none flex-1 text-right pr-2"
                    {...register("password", { required: "رمز عبور الزامی است" })}
                    disabled={loading}
                  />
                </div>
                {errors.password && <p className="text-red-500 mt-1 text-xs italic">{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-orange-600 to-white text-white font-bold text-lg shadow-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "در حال ورود..." : "ورود"}
              </button>

              <p className="text-sm text-center text-gray-600">
                حساب کاربری ندارید؟
                <Link to="/signup" className="text-blue-700 font-semibold mr-1">ثبت‌نام کنید</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
