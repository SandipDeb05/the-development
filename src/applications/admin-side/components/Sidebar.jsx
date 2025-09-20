import { Link } from "react-router";

const SIDE_BAR_LINKS = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: "Analytics",
    path: "/analytics",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Teams",
    path: "/teams",
  },
];

const SIDE_BAR_BOTTOM_LINKS = [
  {
    name: "Settings",
    path: "/settings",
  },
];

export default function Sidebar({ onTabClick }) {
  const handleTabClick = (tab) => {
    onTabClick(tab);
  };
  const logoutHandler = () => {
    alert("logout");
  };
  return (
    <aside className="w-60 h-screen py-4 border-r flex flex-col">
      <h1 className="text-xl font-bold px-4 h-10 border-b">Welcome, Admin</h1>
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex flex-col gap-2 py-2.5">
          {SIDE_BAR_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="border-b px-4 py-2"
              onClick={() => handleTabClick(item)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-1 py-2 border-t border-b">
          {SIDE_BAR_BOTTOM_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="border-b px-4 py-2"
              onClick={() => handleTabClick(item)}
            >
              {item.name}
            </Link>
          ))}

          <button
            className="border-b last:border-b-0 px-4 py-2 text-left cursor-pointer"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
}
