import { Link } from "react-router";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";

const SIDE_BAR_LINKS = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <FaUsers />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <MdAnalytics />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <AiFillProject />,
  },
  {
    name: "Teams",
    path: "/teams",
    icon: <RiTeamFill />,
  },
];

const SIDE_BAR_BOTTOM_LINKS = [
  {
    name: "Settings",
    path: "/settings",
    icon: <IoMdSettings />,
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
    <aside className="w-60 h-screen pt-4 border-r flex flex-col">
      <h1 className="text-xl font-bold px-4 h-10 border-b">Welcome, Admin</h1>
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex flex-col gap-2 py-2.5">
          {SIDE_BAR_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-2 border-b px-4 py-2"
              onClick={() => handleTabClick(item)}
            >
              <i>{item?.icon}</i>
              {item.name}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-1  border-t border-b">
          {SIDE_BAR_BOTTOM_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-2 border-b px-4 py-2"
              onClick={() => handleTabClick(item)}
            >
              <i>{item?.icon}</i>
              {item.name}
            </Link>
          ))}

          <button
            className="flex items-center gap-2 px-4 py-2 text-left cursor-pointer"
            onClick={logoutHandler}
          >
            <i>
              <IoLogOutSharp />
            </i>
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
}
