import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';

const StatusCards = () => {
  const statusData = [
    {
      id: 1,
      title: 'کل فروش',
      value: '80,630',
      currency: '$',
      change: '+6.7%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'orange'
    },
    {
      id: 2,
      title: 'سفارشات جدید',
      value: '1,234',
      change: '+12.3%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'green'
    },
    {
      id: 3,
      title: 'مشتریان فعال',
      value: '5,678',
      change: '-2.1%',
      changeType: 'negative',
      icon: Users,
      color: 'blue'
    },
    {
      id: 4,
      title: 'نرخ تبدیل',
      value: '3.2%',
      change: '+0.8%',
      changeType: 'positive',
      icon: TrendingDown,
      color: 'purple'
    }
  ];

  const getChangeIcon = (changeType) => {
    return changeType === 'positive' ? TrendingUp : TrendingDown;
  };

  const getChangeColor = (changeType) => {
    return changeType === 'positive' ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="admin-status-cards-container">
      <div className="admin-status-cards-grid">
        {statusData.map((item) => {
          const Icon = item.icon;
          const ChangeIcon = getChangeIcon(item.changeType);
          
          return (
            <div key={item.id} className="admin-status-card">
              <div className="admin-status-card-header">
                <div className="admin-status-card-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="admin-status-card-title">
                  {item.title}
                </div>
              </div>
              
              <div className="admin-status-card-content">
                <div className="admin-status-card-value">
                  {item.currency && <span className="admin-status-card-currency">{item.currency}</span>}
                  <span className="admin-status-card-number">{item.value}</span>
                </div>
                
                <div className={`admin-status-card-change ${getChangeColor(item.changeType)}`}>
                  <ChangeIcon className="w-4 h-4" />
                  <span>{item.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusCards;
