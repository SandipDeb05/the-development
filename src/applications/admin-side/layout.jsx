import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function Layout() {
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex h-screen">
      <Sidebar onTabClick={handleTabClick} />
      <div className="flex flex-col flex-1">
        <Header activeTab={activeTab} />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
