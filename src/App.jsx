import React, { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AdminSidebar from "./pages/admin/AdminSidebar";
import UserSidebar from "./pages/User/UserSidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const { user, logout, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) return <Loading />;

  return (
    <div className="relative">
      <Navbar onDashboardToggle={() => setSidebarOpen(!sidebarOpen)} />

      {user && user.role === "admin" && <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={logout} />}
      {user && user.role === "student" && <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={logout} />}

      <ScrollToTop />
      <div className="">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
