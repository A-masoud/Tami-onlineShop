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
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sidebarItems = [
    { 
      id: 'dashboard', 
      label: 'داشبورد', 
      icon: BarChart3,
      submenu: [
        'خلاصه وضعیت فروش',
        'مجموع فروش امروز / این ماه',
        'تعداد سفارش‌های جدید',
        'تعداد کاربران ثبت‌نام‌شده',
        'نمودار فروش (خطی یا ستونی)',
        'نمایش محصولات پرفروش'
      ]
    },
    { 
      id: 'products', 
      label: 'محصولات', 
      icon: Package,
      submenu: [
        'لیست تمام محصولات',
        'افزودن محصول جدید',
        'ویرایش محصولات',
        'حذف محصولات',
        'دسته‌بندی محصولات',
        'مدیریت موجودی',
        'تصاویر محصولات',
        'قیمت‌گذاری محصولات'
      ]
    },
    { 
      id: 'orders', 
      label: 'سفارش‌ها', 
      icon: FileText,
      submenu: [
        'لیست تمام سفارش‌ها',
        'سفارش‌های جدید',
        'سفارش‌های در حال پردازش',
        'سفارش‌های ارسال شده',
        'سفارش‌های تحویل داده شده',
        'سفارش‌های لغو شده',
        'جستجو در سفارش‌ها',
        'مدیریت وضعیت سفارش‌ها'
      ]
    },
    { id: 'stock', label: 'وضعیت انبار', icon: FileText },
    { id: 'transactions', label: 'تراکنش‌ها', icon: CreditCard },
    { 
      id: 'users', 
      label: 'کاربران', 
      icon: Users,
      submenu: [
        'لیست کاربران ثبت‌نام‌شده',
        'بلاک / فعال‌سازی کاربر',
        
      ]
    },
    { id: 'analysis', label: 'تحلیل', icon: TrendingUp },
    { 
      id: 'reports', 
      label: 'گزارشات', 
      icon: FileBarChart,
      submenu: [
        'گزارش فروش (روزانه، ماهانه، سالانه)',
        'محصولات پرفروش',
        'محصولات پرفروش',
        'نمودار درآمد'
      ]
    },
    { 
      id: 'settings', 
      label: 'تنظیمات', 
      icon: Settings,
      submenu: [
        'تنظیمات فروشگاه (لوگو، نام فروشگاه، رنگ اصلی)',
        'تنظیمات حمل‌ونقل و هزینه ارسال',
        'مدیریت نقش‌ها (ادمین اصلی، مدیر محتوا، پشتیبان)'
      ]
    },
  ];

  const toggleSubmenu = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
    
    // اسکرول خودکار به آکاردئون باز شده در موبایل
    if (isMobile && !expandedItems[itemId]) {
      setTimeout(() => {
        const element = document.querySelector(`[data-item-id="${itemId}"]`);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
          });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button - Only visible when sidebar is closed */}
      {isMobile && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}
      
      <div 
        className={`admin-sidebar ${isExpanded ? 'expanded' : ''}`}
        style={{
          width: isMobile 
            ? (isExpanded ? '180px' : undefined) 
            : '280px'
        }}
      >
      {/* Logo */}
      <div className="admin-logo">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">پنل مدیریت</h1>
          {isMobile && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-white transform translate-y-1 -translate-x-4 hover:bg-white/10 rounded-lg transition-colors"
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
          const isExpandedItem = expandedItems[item.id];
          const hasSubmenu = item.submenu && item.submenu.length > 0;
          
          return (
            <div key={item.id} data-item-id={item.id}>
              <button
                 onClick={() => {
                   if (hasSubmenu) {
                     // در موبایل فقط وقتی سایدبار باز است آکاردئون کار کند
                     if (isMobile && !isExpanded) {
                       return; // غیرفعال در حالت بسته
                     }
                     toggleSubmenu(item.id);
                     setActiveTab(item.id)
                   } else {
                     setActiveTab(item.id);
                     if (isMobile) {
                       setIsExpanded(false);
                     }
                   }
                 }}
                className={`w-full flex items-center justify-between px-6 py-3 text-right admin-sidebar-item admin-glass-shimmer ${
                  activeTab === item.id ? 'active' : ''
                } ${isMobile && !isExpanded && hasSubmenu ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center">
                  <Icon className="admin-nav-icon" />
                  <span>{item.label}</span>
                </div>
                {hasSubmenu && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpandedItem ? 'rotate-180' : ''}`} />
                )}
                {/* Tooltip for mobile */}
                {isMobile && !isExpanded && (
                  <div className="admin-tooltip">
                    {item.label}
                  </div>
                )}
              </button>
              
              {/* Submenu */}
              {hasSubmenu && isExpandedItem && (
                <div className="admin-submenu">
                  {item.submenu.map((subItem, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTab(`${item.id}-${index}`);
                        if (isMobile) {
                          setIsExpanded(false);
                        }
                      }}
                      className={`w-full px-6 py-2 text-right admin-submenu-item ${
                        activeTab === `${item.id}-${index}` ? 'active' : ''
                      }`}
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
    </>
  );
};

export default Sidebar;
