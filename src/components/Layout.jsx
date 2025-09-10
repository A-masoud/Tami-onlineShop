import  HeaderUp  from "./Header/Header-up";
import FooterWithLocalRays from "../sections/FooterWithLocalRays";
import { Outlet } from "react-router-dom";
import BottomNavigationBar from "./Header/BottomNavigationBar";

export function Layout() {
  return (
    <div className="flex flex-col font-vazir min-h-screen bg-black">
      <HeaderUp />
      <main className="flex-grow w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-10 mx-auto
      pt-[calc(56px+env(safe-area-inset-top))]
          pb-[calc(72px+env(safe-area-inset-bottom))]
          lg:pt-[64px]
          lg:pb-0
        ">
        <Outlet />
      </main>
      <FooterWithLocalRays />
      <BottomNavigationBar/>
    </div>
  );
}
