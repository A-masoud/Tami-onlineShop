import React, { useState } from 'react';
import Sidebar from '../components/AdminComps/Sidebar';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen admin-panel flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 admin-main-content flex items-center justify-center">
        <div className="text-center admin-fade-in">
          <h1 className="text-2xl font-bold text-white mb-4">پنل مدیریت</h1>
          <p className="text-gray-300 mb-6">محتوای اصلی پنل در اینجا نمایش داده خواهد شد</p>
          <div className="flex gap-4 justify-center">
            <button className="admin-btn-primary">
              شروع کار
            </button>
            <button className="admin-btn-secondary">
              راهنما
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
