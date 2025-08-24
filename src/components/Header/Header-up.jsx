import { Link } from "react-router-dom";
import { ShoppingCartIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { SearchBox } from "./SearchBox";
import logo from "../../assets/Tami Shop Logo Design.png";
import { supabase } from "../../supabase/supabase";
import { useEffect, useState } from "react";

export function HeaderUp() {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // چک کردن وضعیت فعلی
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user || null;
      setUser(currentUser);
      if (currentUser) fetchFullName(currentUser.id);
    });

    // گوش دادن به تغییرات لاگین و لاگ‌اوت
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user || null;
      setUser(currentUser);
      if (currentUser) {
        fetchFullName(currentUser.id);
      } else {
        setFullName("");
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function fetchFullName(userId) {
    const { data, error } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", userId)
      .single();

    if (!error && data) {
      setFullName(data.full_name);
    }
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("🚨 خطا در خروج:", error.message);
    } else {
      console.log("✅ کاربر خارج شد");
      setUser(null);
      setFullName("");
    }
  };

  return (
    <header className="bg-gray-100 shadow p-4 flex justify-between items-center">
      <div className="flex gap-3.5">
        <Link to="/cart" className="hidden lg:flex items-center gap-1 hover:text-blue-700">
          <ShoppingCartIcon className="w-6" />
        </Link>

        {user ? (
          <>
            <Link
              to="/profile"
              className="flex items-center gap-1 hover:text-blue-700 border hover:border-blue-700 border-gray-300 p-2.5"
            >
              {fullName || "پروفایل"}
              <UserCircleIcon className="w-5 h-5" />
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-red-600 border border-red-600 hover:bg-red-50 p-2.5"
            >
              خروج
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-1 hover:text-blue-700 border hover:border-blue-700 border-gray-300 p-2.5"
          >
            ورود/ ثبت نام
            <UserCircleIcon className="w-5 h-5" />
          </Link>
        )}
      </div>

      <div className="flex gap-3.5 w-1/2 items-center">
        <SearchBox />
        <img
          src={logo}
          alt="logo"
          className="hidden lg:block w-20 rounded-full border border-blue-700"
        />
      </div>
    </header>
  );
}
