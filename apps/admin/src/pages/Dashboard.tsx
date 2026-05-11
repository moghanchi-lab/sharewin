import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="12,842" change="+12%" />
        <StatCard title="Active Ads" value="154" change="+5%" />
        <StatCard title="Platform Revenue" value="$24,500" change="+18%" />
        <StatCard title="Total Shares" value="842,000" change="+24%" />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-bold mb-6">Revenue Growth</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border">
    <p className="text-gray-500 text-sm font-medium">{title}</p>
    <div className="mt-2 flex items-baseline justify-between">
      <p className="text-2xl font-bold">{value}</p>
      <span className="text-green-500 text-sm font-bold">{change}</span>
    </div>
  </div>
);

export default Dashboard;
