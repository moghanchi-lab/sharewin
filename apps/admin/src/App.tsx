import React, { useState } from 'react';
import { LayoutDashboard, Users, Megaphone, DollarSign, Settings } from 'lucide-react';
import Dashboard from './pages/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">ShareWin Admin</h1>
        </div>
        <nav className="mt-6">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem icon={<Users size={20}/>} label="Users" active={activeTab === 'users'} onClick={() => setActiveTab('users')} />
          <NavItem icon={<Megaphone size={20}/>} label="Campaigns" active={activeTab === 'campaigns'} onClick={() => setActiveTab('campaigns')} />
          <NavItem icon={<DollarSign size={20}/>} label="Revenue" active={activeTab === 'revenue'} onClick={() => setActiveTab('revenue')} />
          <NavItem icon={<Settings size={20}/>} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-bottom p-4 flex justify-between items-center shadow-sm">
          <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin User</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </header>
        <main className="p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab !== 'dashboard' && <div className="text-center py-20 text-gray-500">Feature coming soon: {activeTab}</div>}
        </main>
      </div>
    </div>
  );
}

const NavItem = ({ icon, label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center space-x-3 w-full px-6 py-4 transition-colors ${active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

export default App;
