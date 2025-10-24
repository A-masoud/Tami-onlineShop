import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SignupPage } from "../pages/signupComponents/Signup";
import { Home } from "../pages/home/Home";
import { ProductDetail } from "../pages/productDetailComponents/ProductDetail";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { MasoudCart } from "../pages/MasoudCart";
import Category from "../components/Category";
import AdminPanel from "../pages/AdminPanel";
import { LoginPage } from "../pages/Login";

function AppRoutes() {
  const location = useLocation();
  const background = location.state?.backgroundLocation || location;

  return (
    <>
      <Routes location={background}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="masoudcart" element={<MasoudCart />} />
          <Route path="category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<LoginPage modal backgroundLocation={location.state?.backgroundLocation || location} />} />
      </Routes>

      {location.state?.backgroundLocation && (
        <Routes>
          <Route path="/login" element={<LoginPage modal backgroundLocation={location.state.backgroundLocation} />} />
          <Route path="/signup" element={<SignupPage modal />} />
        </Routes>
      )}
    </>
  );
}

export default AppRoutes;
