import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';

const UsersList = () => {
  const statusData = [
    {
      id: 1,
      title: 'تعداد کل مشتریان',
      value: '500',
      change: '+6.7%',
      changeType: 'positive',
      icon: Users,
      color: 'orange'
    },
    {
      id: 2,
      title: 'مشتریان غیر فعال',
      value: '100',
      changeType: 'positive',
      icon:Users,
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
      title: 'تعداد مشتریان جدید در ماه اخیر',
      value: '102',
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
            <div key={item.id} className="admin-status-card admin-glass-shimmer">
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

export default UsersList;