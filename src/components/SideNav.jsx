import React, { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Compass,
  Store,
  Award,
  Projector,
  Cog,
  User,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
  Moon,
  Sun,
  MessageCircleHeart
} from "lucide-react";
import mobarok from "../assets/mobarok.jpg";
import { useSidebar } from "../context/sideberContext";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const SideNav = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { id: 1, label: "Explore", icon: Compass, path: "/" },
    { id: 2, label: "About", icon: User, path: "/about" },
    { id: 3, label: "Projects", icon: Projector, path: "/projects" },
    { id: 4, label: "Skills", icon: Award, path: "/skills" },
    { id: 5, label: "Tools", icon: Cog, path: "/tools" },
    { id: 6, label: "Contact", icon: MessageCircleHeart, path: "/contact" },
  ];


  const socialItem = [
    { id: 7, label: "Facebook", icon: Facebook, link: "https://www.facebook.com/mobaroky", arrowIcon: ArrowUpRight },
    { id: 8, label: "Twitter", icon: Twitter, link: "https://twitter.com", arrowIcon: ArrowUpRight },
    { id: 9, label: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/", arrowIcon: ArrowUpRight },
    { id: 10, label: "Github", icon: Github, link: "https://github.com/immobarok", arrowIcon: ArrowUpRight },
  ];

  return (
    <div
      className={`${isCollapsed ? "w-16" : "w-64"} h-screen bg-white dark:bg-[#1C1C1C] text-gray-900 dark:text-[#858585] fixed left-0 top-0 flex flex-col transition-all duration-300 border-r border-gray-300 dark:border-[#333333]`}
    >
      {/* Fixed Top */}
      <div className="p-4 border-b border-gray-300 dark:border-zinc-800 flex items-center justify-between">
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"}`}>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={mobarok} alt="Profile" className="w-full h-full object-cover" />
          </div>
          {!isCollapsed && (
            <div className="text-start">
              <h2 className="text-black dark:text-white">Mobarok Ali</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
            </div>
          )}
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-gray-200 dark:bg-zinc-800 rounded-full p-1 text-gray-900 dark:text-[#858585] hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors top-8 -right-3 absolute shadow-sm"
        >
          {isCollapsed ? <ChevronRight size={13} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Middle */}
      <div className="flex-1 overflow-auto scrollbar-hidden px-4 py-2">
        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className="flex items-center px-2 py-2 rounded hover:bg-gray-200 text-sm dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors"
                title={isCollapsed ? item.label : ""}
              >
                <Icon size={20} />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Social Section */}
        <div className="mt-6">
          {!isCollapsed && (
            <p className="px-2 mb-2 text-[11px] uppercase tracking-wider text-gray-600 dark:text-[#838383]">
              Let's Connect
            </p>
          )}
          <nav>
            {socialItem.map((item) => {
              const Icon = item.icon;
              const Icon2 = item.arrowIcon;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-2 py-2 rounded hover:bg-gray-200 text-sm dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors"
                  title={isCollapsed ? item.label : ""}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                  {!isCollapsed && <Icon2 className="w-4 h-4 ml-auto" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-0">
          <nav>
            <button
              onClick={toggleTheme}
              className="flex items-center px-2 py-2 text-sm placeholder:rounded hover:bg-gray-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors w-full"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              {!isCollapsed && (
                <>
                  <span className="ml-3">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  <div className="ml-auto w-10 h-5 bg-gray-300 dark:bg-slate-700 rounded-full flex items-center p-1 transition-all">
                    <div className={`w-4 h-4 bg-slate-300 shadow-lg rounded-full transition-all transform ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
                    ></div>
                  </div>
                </>
              )}
            </button>
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
