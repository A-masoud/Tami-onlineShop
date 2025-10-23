import React, { useState } from 'react';
import Sidebar from '../components/AdminComps/Sidebar';
import StatusCards from '../components/AdminComps/DoshbordDir/StatusCards';
import ProductsMenu from '../components/AdminComps/ProductDir/ProductsMenu';
import UsersMenu from '../components/AdminComps/UsersDir/UsersMenu';
import UsersList from '../components/AdminComps/UsersDir/UsersList';
import AddProduct from '../components/AdminComps/ProductDir/AddProduct';
import AllProduct from '../components/AdminComps/ProductDir/AllProducts';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      // 🟢 داشبورد اصلی
      case 'dashboard':
        return (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">پنل مدیریت</h1>
              <p className="text-gray-300">نمای کلی وضعیت فروش و عملکرد</p>
            </div>
            <StatusCards />
            <div className="mt-8 text-center">
              <div className="flex gap-4 justify-center">
                <button className="admin-btn-primary">شروع کار</button>
                <button className="admin-btn-secondary">راهنما</button>
              </div>
            </div>
          </>
        );

      // 🟠 محصولات - آمار کلی
      case 'products':
        return (
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">مدیریت محصولات</h2>
            <p className="text-gray-300 mb-4">
              اینجا آمار کلی محصولات و وضعیت فروش نمایش داده می‌شود.
            </p>
            <StatusCards />
          </div>
        );

      // 🟠 محصولات - ساب‌منوها
      case 'products-0':
        return <AllProduct view="list" />;
      case 'products-1':
        return <AddProduct view="add" />;
      case 'products-2':
        return <ProductsMenu view="edit" />;
      case 'products-3':
        return <ProductsMenu view="delete" />;
      case 'products-4':
        return <ProductsMenu view="categories" />;
      case 'products-5':
        return <ProductsMenu view="inventory" />;
      case 'products-6':
        return <ProductsMenu view="images" />;
      case 'products-7':
        return <ProductsMenu view="pricing" />;

      // 🔵 کاربران - آمار کلی
      case 'users':
        return (
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">مدیریت کاربران</h2>
            <p className="text-gray-300 mb-4">
              در این بخش می‌توانید کاربران ثبت‌نام‌شده را مدیریت کنید.
            </p>
            <UsersMenu/>
          </div>
        );

      // 🔵 کاربران - ساب‌منوها
      case 'users-0':
        return <UsersList view="list" />;
      case 'users-1':
        return <UsersList view="ban" />;

      // 🟣 سایر تب‌ها
      default:
        return (
          <div className="text-gray-400 text-center mt-10">
            در حال ساخت این بخش...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen admin-panel flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 admin-main-content">
        <div className="admin-fade-in">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
