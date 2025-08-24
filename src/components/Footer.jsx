import { Fragment } from "react";
import Enamad from "../assets/enamad_icon__text_color_blue_1024.png";
import SazmanDehi from "../assets/file_20200414_1211_69281.jpg";
import SSL from "../assets/ssl-secured-logo-png_seeklogo-484612.png";
import {
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  const Hr = () => (
    <hr className="block md:hidden h-[1px] bg-gray-300 my-6" />
  );

  return (
    <footer className="bg-gray-100 text-gray-600 pt-10 pb-20 lg:pb-0 mt-10 text-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {/* دسترسی سریع */}
        <div>
          <h3 className="text-base font-semibold mb-3">دسترسی سریع</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-600 transition">خانه</a></li>
            <li><a href="/products" className="hover:text-blue-600 transition">محصولات</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">درباره ما</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">تماس با ما</a></li>
            <li><a href="/faq" className="hover:text-blue-600 transition">سوالات متداول</a></li>
          </ul>
        </div>

        <Hr />

        {/* ارتباط با ما */}
        <div>
          <h3 className="text-base font-semibold mb-3">ارتباط با ما</h3>
          <ul className="space-y-2">
            <li>📍 تهران، خیابان مثال، کوچه نمونه</li>
            <li>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>✉️ info@myshop.com</li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTelegram /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
          </div>
        </div>

        <Hr />

        {/* عضویت در خبرنامه */}
        <div>
          <h3 className="text-base font-semibold mb-3">با ما در تماس نباشید</h3>
          <p className="mb-4">ایمیلت رو وارد کن تا اولین نفر باشی که از تخفیف‌ها و خبرهای جدید باخبر میشه 😍</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              ارسال
            </button>
          </form>
        </div>

        <Hr />

        {/* نمادهای اطمینان */}
        <div>
          <h3 className="text-base font-semibold mb-3">نمادهای اطمینانن</h3>
          <div className="flex flex-wrap gap-1 items-center">
            <img src={Enamad} alt="ای‌نماد" className="w-16 h-16 border border-gray-400 object-contain" />
            <img src={SazmanDehi} alt="ساماندهی" className="w-16 h-16 border border-gray-400 object-contain" />
            <img src={SSL} alt="SSL" className="w-16 h-16 border border-gray-400 object-contain" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} فروشگاه من | تمام حقوق محفوظ است.
      </div>
    </footer>
  );
}
