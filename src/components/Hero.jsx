import React from "react";
import { useSidebar } from "../context/sideberContext";
import { Mail } from "lucide-react";

const Hero = () => {
  const { isCollapsed } = useSidebar(false);
  return (
    <div class={`min-h-screen flex px-20 pt-24 justify-center transition-all duration-500 ${isCollapsed ? "" : "ml-20"}`}>
      <div class="text-start">
        <h1 class="text-5xl font-bold text-gray-200">Hey, I'm Mobarok</h1>
        <h1 class="mt-4 text-5xl text-gray-200 font-bold">And I am a <span className="text-secondary-text-200">Web developer</span></h1>
        <div class="mt-8 space-x-4 flex">
          <button class="px-7 py-3 bg-secondary-bg text-primary-text font-semibold rounded-lg  border-[0.1px] border-secondary-border hover:bg-primary-bg">
            About
          </button>
          <button class="px-7 py-3 bg-transparent text-primary-text border-[0.1px] border-secondary-border  font-semibold rounded-lg hover:bg-secondary-bg flex items-center space-x-3">
            <Mail />
            <span>E-Mail</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
