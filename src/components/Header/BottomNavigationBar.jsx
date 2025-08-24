import { Link } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export function BottomNavigationBar() {
  const navItemClass =
    "flex flex-col items-center text-gray-600 text-xs hover:text-blue-500 ";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-400 px-10 py-2 flex justify-between items-center lg:hidden shadow">
      <Link to="/" className={navItemClass}>
        <HomeIcon className="w-6 h-6 mb-1" />
        <span>خانه</span>
      </Link>
      <Link to="/cart" className={navItemClass}>
        <ShoppingBagIcon className="w-6 h-6 mb-1" />
        <span>سبد خرید</span>
      </Link>
      <Link to="/account" className={navItemClass}>
        <UserCircleIcon className="w-6 h-6 mb-1" />
        <span>حساب کاربری</span>
      </Link>
      <Link to="/categories" className={navItemClass}>
        <Squares2X2Icon className="w-6 h-6 mb-1" />
        <span>دسته‌بندی</span>
      </Link>
    </div>
  );
}
