import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserSidebar from "../../pages/User/UserSidebar";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (
    <div className="flex min-h-screen bg-blue-500">
      {/* Sidebar - only visible when sidebarOpen is true */}
      <UserSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={logout}
      />

      {/* Main Content */}
      <div className="flex-1 ">
        {/* Button to toggle sidebar */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="mb-4 p-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors flex items-center gap-2"
        >
          <Menu size={20} />
          Open Menu
        </button>

        <Outlet />
      </div>
    </div>
  );
}