import { BrowserRouter, Route, Routes } from "react-router";
import AdminLayout from "./layout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Settings from "./pages/Settings";

export default function AdminSide() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teams" element={<Teams />} />

          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
