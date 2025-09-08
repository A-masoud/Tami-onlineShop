import { HeaderUp } from "./Header/Header-up";
import { Outlet } from "react-router-dom";
import { HeadeDown } from "./Header/Header-down";
import { BottomNavigationBar } from "./Header/BottomNavigationBar";
import FooterWithLocalRays from "../sections/FooterWithLocalRays";

export function Layout() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col font-vazir min-h-screen bg-black">
=======
    <div className="flex flex-col font-vazir min-h-screen  bg-black">
>>>>>>> 117d9f116e3abd152f9a3964cc4f6e56f345b897
      <HeaderUp />
      <HeadeDown />
      <main className="flex-grow w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-10 mx-auto bg-gray-50
+                  pb-[calc(var(--bottom-nav-h,0px)+env(safe-area-inset-bottom))] sm:pb-0">
        <Outlet />
      </main>
      <FooterWithLocalRays />
      <BottomNavigationBar/>
    </div>
  );
}
