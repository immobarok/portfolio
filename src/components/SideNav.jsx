import React, { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Compass,
  Store,
  Projector,
  Settings,
  User,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import mobarok from "../assets/mobarok.jpg";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 1, label: "Explore", icon: <Compass size={20} /> },
    { id: 2, label: "Boutique", icon: <Store size={20} /> },
    { id: 3, label: "Projects", icon: <Projector size={20} /> },
    { id: 4, label: "Services", icon: <Settings size={20} /> },
    { id: 5, label: "About", icon: <User size={20} /> },
  ];

  const contactItem = [
    { id: 6, label: "Contact", icon: <Phone size={20} />, link: "tel:+8801522119021" },
    { id: 7, label: "Facebook", icon: <Facebook size={20} />, link: "https://www.facebook.com/mobaroky" },
    { id: 8, label: "Twitter", icon: <Twitter size={20} />, link: "https://twitter.com" },
    { id: 9, label: "LinkedIn", icon: <Linkedin size={20} />, link: "https://linkedin.com/" },
    { id: 10, label: "Github", icon: <Github size={20} />, link: "https://github.com/immobarok" },
  ];

  return (
    <div
      className={`${isCollapsed ? "w-16" : "w-64"
        } h-screen bg-zinc-900 text-gray-400 fixed left-0 top-0 flex flex-col transition-all duration-300`}
    >
      {/* Fixed Top */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"}`}>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={mobarok} alt="Profile" className="w-full h-full object-cover" />
          </div>
          {!isCollapsed && (
            <div className="text-start">
              <h2 className="text-white font-medium">Mobarok Ali</h2>
              <p className="text-sm">Software Engineer</p>
            </div>
          )}
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-zinc-800 rounded-full p-1 text-white hover:bg-zinc-700 transition-colors top-8 -right-3 absolute shadow-sm"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Middle */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                } px-2 py-2 rounded hover:bg-zinc-800 hover:text-white transition-colors`}
              title={isCollapsed ? item.label : ""}
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* social */}
        <div className="mt-6">
          {!isCollapsed && (
            <h3 className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider">
              Connect
            </h3>
          )}
          <nav>
            {contactItem.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                  } px-2 py-2 rounded hover:bg-zinc-800 hover:text-white transition-colors`}
                title={isCollapsed ? item.label : ""}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Fixed Bottom */}
      <div className="p-4 border-t border-zinc-800">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-zinc-800 text-white rounded pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
