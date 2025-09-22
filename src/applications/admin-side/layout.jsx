import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Layout() {
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex dark:text-white dark:bg-black gray:bg-gray-800 gray:text-gray-200">
      <Sidebar onTabClick={handleTabClick} />
      <div className="flex flex-col flex-1">
        <Header activeTab={activeTab} />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
