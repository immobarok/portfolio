import React, { useState, useEffect } from 'react';
import { LaptopMinimalCheck, ArrowRight } from 'lucide-react';
import { useSidebar } from '../context/sideberContext';

const Footer = () => {
  const { isCollapsed } = useSidebar(false);
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };
  return (
    <footer className="bg-[#1C1C1C] text-gray-400 w-[100%] mt-6">
      <div className={`${isCollapsed ? "ml-60 transition-all duration-500" : "ml-80 transition-all duration-500"} flex justify-between flex-col md:flex-row items-start md:items-center mx-20 py-20`}>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <LaptopMinimalCheck />
            <span className="font-medium text-white">Currently</span>
            <span className="font-medium text-white">working</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-blink"></span>
          </div>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <span>Reach out</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Time Display */}
        <div className="lg:text-8xl md:text-5xl  text-gray-500 font-light mt-4 md:mt-0">
          {formatTime(currentTime)}
        </div>
      </div>
      <p className={`text-center transition-all duration-500 text-sm ${isCollapsed ? "" : "ml-32"}`}>© {new Date().getFullYear()} Mobarok Ali. Built with React, JavaScript, and a lot of Caffeine.</p>
    </footer>
  );
};

export default Footer;