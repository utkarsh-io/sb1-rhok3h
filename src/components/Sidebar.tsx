import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Ship, 
  FileText, 
  MessageSquare, 
  BarChart, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              <Link
                to="/dashboard"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <LayoutDashboard className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Dashboard
              </Link>
              <Link
                to="/shipments"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Ship className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Shipments
              </Link>
              <Link
                to="/documents"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <FileText className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Documents
              </Link>
              <Link
                to="/messages"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <MessageSquare className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Messages
              </Link>
              <Link
                to="/analytics"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <BarChart className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Analytics
              </Link>
              <Link
                to="/settings"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;