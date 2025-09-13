import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Package, 
  FileText, 
  CreditCard, 
  Users, 
  TrendingUp, 
  FileBarChart, 
  DollarSign,
  Settings,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sidebarItems = [
    { id: 'dashboard', label: 'داشبورد', icon: BarChart3 },
    { id: 'products', label: 'محصولات', icon: Package },
    { id: 'blog', label: 'وبلاگ', icon: FileText },
    { id: 'transactions', label: 'تراکنش‌ها', icon: CreditCard },
    { id: 'users', label: 'کاربران', icon: Users },
    { id: 'analysis', label: 'تحلیل', icon: TrendingUp },
    { id: 'reports', label: 'گزارشات', icon: FileBarChart, hasSubmenu: true },
    { id: 'investment', label: 'سرمایه‌گذاری', icon: DollarSign },
    { id: 'settings', label: 'تنظیمات', icon: Settings },
  ];

  return (
    <div className={`admin-sidebar ${isExpanded ? 'expanded' : ''}`}>
      {/* Logo */}
      <div className="admin-logo">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">پنل مدیریت</h1>
          {isMobile && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 admin-nav-container">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobile) {
                    setIsExpanded(false);
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-3 text-right admin-sidebar-item admin-glass-shimmer ${
                  activeTab === item.id ? 'active' : ''
                }`}
              >
                <div className="flex items-center">
                  <Icon className="admin-nav-icon" />
                  <span>{item.label}</span>
                </div>
                {item.hasSubmenu && (
                  <ChevronDown className="w-4 h-4" />
                )}
                {/* Tooltip for mobile */}
                {isMobile && !isExpanded && (
                  <div className="admin-tooltip">
                    {item.label}
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
