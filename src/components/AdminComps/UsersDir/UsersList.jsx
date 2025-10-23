import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/auth/admin')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('خطا در گرفتن کاربران:', err));
  }, []);

  // تابع کمکی برای فرمت تاریخ و ساعت
  const formatDateTime = (dateString) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    if (isNaN(date)) return '—';
    return (
      date.toLocaleDateString('fa-IR') +
      ' | ' +
      date.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
    );
  };

  // کلاس‌ها
  const containerClass = 'min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center py-10 px-4';
  const cardClass = 'w-full max-w-6xl bg-gray-950 rounded-2xl shadow-2xl border border-orange-600 overflow-hidden';
  const headerClass = 'py-4 px-6 text-2xl font-extrabold text-center tracking-wide';
  const tableWrapperClass = 'overflow-x-auto';
  const tableClass = 'w-full border border-orange-700 border-collapse text-right';
  const thClass = 'p-4 border border-orange-700';
  const tdClass = 'p-4 border border-orange-700';
  const noDataClass = 'text-center p-8 text-gray-400 border border-orange-700';
  const rowClassEven = 'bg-gray-900 hover:bg-orange-950 transition-colors duration-300';
  const rowClassOdd = 'bg-gray-800 hover:bg-orange-900 transition-colors duration-300';

  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <div className={headerClass}>
          لیست کاربران
        </div>

        <div className={tableWrapperClass}>
          <table dir="rtl" className={tableClass}>
            <thead className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-orange-400">
              <tr>
                <th className={thClass}>نام کامل</th>
                <th className={thClass}>ایمیل</th>
                <th className={thClass}>وضعیت کاربر</th>
                <th className={thClass}>تاریخ عضویت</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className={noDataClass}>
                    هیچ کاربری یافت نشد 😕
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={user._id} className={index % 2 === 0 ? rowClassEven : rowClassOdd}>
                    <td className={tdClass}>{user.fullName}</td>
                    <td className={tdClass}>{user.email}</td>
                    <td className={tdClass}>{user.isAdmin ? 'ادمین' : 'مشتری'}</td>
                    <td className={tdClass}>{formatDateTime(user.createdAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
