import { HeaderUp } from "./Header/Header-up";
import { Outlet } from "react-router-dom";
import { HeadeDown } from "./Header/Header-down";
import { BottomNavigationBar } from "./Header/BottomNavigationBar";
import FooterWithLocalRays from "../sections/FooterWithLocalRays";

export function Layout() {
  return (
    <div className="flex flex-col font-vazir min-h-screen  bg-gray-50 overflow-x-hidden bg-black">
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
