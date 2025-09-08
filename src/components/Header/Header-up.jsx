import { Link } from "react-router-dom";
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
    <header className="bg-black shadow p-4 flex justify-between items-center">
      <div className="flex gap-3.5">
        <Link to="/cart" className="hidden lg:flex items-center gap-1 hover:text-blue-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
        </Link>

        {user ? (
          <>
            <Link
              to="/profile"
              className="flex items-center gap-1 hover:text-blue-700 border hover:border-blue-700 border-gray-300 p-2.5"
            >
              {fullName || "پروفایل"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-red-600 border border-red-600 hover:bg-red-50 p-2.5"
            >
              خروج
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-1 hover:text-blue-700 border hover:border-blue-700 border-white text-white p-2.5"
          >
            ورود/ ثبت نام
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
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
