import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h2>Личный Кабинет</h2>
      <p>Добро пожаловать, {user.email}!</p>
    </div>
  );
};

export default Dashboard;