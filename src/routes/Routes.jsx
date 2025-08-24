import { Route, Routes } from "react-router-dom";
import {Layout} from "../components/Layout"
import { SignupPage } from "../pages/signupComponents/Signup";
import { LoginPage } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProductDetail } from "../pages/productDetailComponents/ProductDetail";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { AddProductForm } from "../admin/AddProductForm";

function AppRoutes() {
  return (
    <Routes>
      {/* صفحاتی که Layout دارند */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Route>
{/* صفحاتی که Layout ندارند (مثلاً login و signup) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/addProduct" element={<AddProductForm/>}/>
    </Routes>
  );
}


export default AppRoutes;
