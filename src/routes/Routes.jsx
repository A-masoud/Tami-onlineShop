import { Route, Routes } from "react-router-dom";
import {Layout} from "../components/Layout"
import { SignupPage } from "../pages/signupComponents/Signup";

// 👇🏻👇🏻 Last import change and added new import for SignForm Page 👇🏻👇🏻
import  SignForm  from "../pages/MasoudFormPages/SignForm";
import { Home } from "../pages/Home";
import { ProductDetail } from "../pages/productDetailComponents/ProductDetail";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { MasoudCart } from "../pages/MasoudCart";
import { AddProductForm } from "../admin/AddProductForm";
import Category from "../components/Category";

function AppRoutes() {
  return (
    <Routes>
      {/* صفحاتی که Layout دارند */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="masoudcart" element={<MasoudCart />} />
        <Route path="category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
{/* صفحاتی که Layout ندارند (مثلاً login و signup) */}
        <Route path="/login" element={<SignForm />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/addProduct" element={<AddProductForm/>}/>
    </Routes>
  );
}


export default AppRoutes;
