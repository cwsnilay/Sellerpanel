import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  CreditCard, 
  Star, 
  HelpCircle,
  Calculator,
  Target,
  ShoppingBag,
  BarChart3,
  Gift,
  Users,
  Settings, 
  Bell,
  User
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: '16' },
    { id: 'products', label: 'Products', icon: Package, badge: '63' },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'supports', label: 'Support', icon: HelpCircle },
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'selling-fees', label: 'Selling Fees Calculator', icon: Calculator },
    { id: 'credit-card', label: 'Credit Card Management', icon: CreditCard },
    { id: 'scoring', label: 'Scoring', icon: Target },
    { id: 'abandoned-cart', label: 'Abandoned Cart', icon: ShoppingBag },
    { id: 'sales-report', label: 'Sales Report', icon: BarChart3 },
    { id: 'promotion', label: 'Promotion', icon: Gift },
    { id: 'membership', label: 'Membership', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Marketplace</h1>
        <p className="text-gray-400 text-sm">Seller Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 ${
                    activeTab === item.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={20} />
          </div>
          <div className="flex-1">
            <p className="font-medium">John Seller</p>
            <p className="text-gray-400 text-sm">Premium Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;