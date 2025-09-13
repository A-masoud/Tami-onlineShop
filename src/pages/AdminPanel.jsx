import React, { useState } from 'react';
import Sidebar from '../components/AdminComps/Sidebar';
import StatusCards from '../components/AdminComps/StatusCards';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen admin-panel flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 admin-main-content">
        <div className="admin-fade-in">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">پنل مدیریت</h1>
            <p className="text-gray-300">نمای کلی وضعیت فروش و عملکرد</p>
          </div>
          
          <StatusCards />
          
          <div className="mt-8 text-center">
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
    </div>
  );
};

export default AdminPanel;
