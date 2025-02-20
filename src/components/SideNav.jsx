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
import { useSidebar } from "../context/sideberContext";

const SideNav = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar(false);

  const menuItems = [
    { id: 1, label: "Explore", icon: Compass },
    { id: 2, label: "Boutique", icon: Store },
    { id: 3, label: "Projects", icon: Projector },
    { id: 4, label: "Services", icon: Settings },
    { id: 5, label: "About", icon: User },
  ];

  const contactItem = [
    { id: 6, label: "Contact", icon: Phone, link: "tel:+8801522119021" },
    { id: 7, label: "Facebook", icon: Facebook, link: "https://www.facebook.com/mobaroky" },
    { id: 8, label: "Twitter", icon: Twitter, link: "https://twitter.com" },
    { id: 9, label: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/" },
    { id: 10, label: "Github", icon: Github, link: "https://github.com/immobarok" },
  ];

  return (
    <div
      className={`${isCollapsed ? "w-16" : "w-64"
        } h-screen bg-[#1C1C1C] text-gray-400 fixed left-0 top-0 flex flex-col transition-all duration-300 border-r border-[#333333]`}
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
          {isCollapsed ? <ChevronRight size={13} className="transition-all duration-300" /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Middle */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href="#"
                className={`flex items-center px-2 py-2 rounded hover:bg-zinc-800 hover:text-white transition-colors`}
                title={isCollapsed ? item.label : ""}
              >
                <Icon
                  size={20} // Keep icon size constant
                  className={`transition-all duration-300 ${isCollapsed ? "scale-[1.2] my-1" : "scale-100"}`}
                />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </a>
            );
          })}
        </nav>

        {/* Social Section */}
        <div className="mt-6">
          {!isCollapsed && (
            <h3 className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider">
              Connect
            </h3>
          )}
          <nav>
            {contactItem.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-2 py-2 rounded hover:bg-zinc-800 hover:text-white transition-colors`}
                  title={isCollapsed ? item.label : ""}
                >
                  <Icon
                    size={20} // Keep icon size constant
                    className={`transition-all duration-300 ${isCollapsed ? "scale-[1.2] my-1" : "scale-100"}`}
                  />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Fixed Bottom */}
      <div className="p-5 border-t border-zinc-800">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          {isCollapsed ? (
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer" />
          ) : (
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-zinc-800 text-white rounded pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
