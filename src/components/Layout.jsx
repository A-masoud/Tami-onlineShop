import { HeaderUp } from "./Header/Header-up";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { HeadeDown } from "./Header/Header-down";
import { BottomNavigationBar } from "./Header/BottomNavigationBar";

export function Layout() {
  return (
    <div className="flex flex-col font-vazir min-h-screen  bg-black">
      <HeaderUp />
      <HeadeDown />
      <main className="flex-grow w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BottomNavigationBar/>
    </div>
  );
}
