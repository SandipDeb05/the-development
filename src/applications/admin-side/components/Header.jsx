import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";

export default function Header({ activeTab }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    switch (theme) {
      case "dark": {
        document.documentElement.classList.remove("gray");
        document.documentElement.classList.add("dark");
        break;
      }
      case "gray": {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("gray");
        break;
      }
      default: {
        document.documentElement.classList.remove("gray");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((t) => (t === "light" ? "gray" : t === "gray" ? "dark" : "light"));
  };

  return (
    <header className="h-14 flex items-center px-4 border-b justify-between">
      <h1 className="text-lg font-bold">{activeTab?.name || "Dashboard"}</h1>

      <button
        onClick={handleToggleTheme}
        className="px-3 py-1 rounded cursor-pointer"
      >
        {theme === "dark" ? (
          <MdNightlight />
        ) : theme === "gray" ? (
          <FaCloudSun />
        ) : (
          <MdLightMode />
        )}
      </button>
    </header>
  );
}
