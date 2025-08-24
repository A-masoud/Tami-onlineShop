import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import img from "../assets/The-404-Page_-How-To-Turn-a-404-Error-Into-a-Win-for-Your-Website.jpg"

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
        className="text-6xl font-bold text-red-500"
      >
        404
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-2xl font-semibold"
      >
        صفحه‌ای که دنبالشی پیدا نشد 😢
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2 text-gray-500 text-center max-w-md"
      >
        شاید این محصول از فروشگاه حذف شده یا لینک اشتباهی وارد کردی.
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          بازگشت به فروشگاه
        </Link>
      </motion.div>

      <motion.img
        src={img}
        alt="404 error"
        className="w-64 mt-10 border-3 border-red-500 rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      />
    </div>
  );
}
