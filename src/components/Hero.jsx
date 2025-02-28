import React from "react";
import { useSidebar } from "../context/sideberContext";
import { Mail } from "lucide-react";
import mobarok from "../assets/mobarok.jpg";
import Card from "./Card";

const Hero = () => {
  const { isCollapsed } = useSidebar(false);
  const handleButtonClick = () => {
    alert("Button Clicked");
  }
  return (

    <>
      <div className="w-full pl-[320px] mt-32 bg-transparent">
        <div class={`transition-all duration-500 ${isCollapsed ? "" : "ml-20"}`}>
          <div class="text-start">
            <h1 class="text-5xl font-bold text-gray-200">Hey, I'm Mobarok.</h1>
            <h1 class="mt-4 text-5xl text-gray-200 font-bold">And I am a <span className="text-secondary-text-200">Web developer.</span></h1>
            <h1 className="my-3 text-xl font-medium text-secondary-text-200">A developer who thrives on clean code, innovative thinking,<br /> and crafting elegant solutions</h1>
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
          {/* Latest project */}
          <div className="mt-8">
            <h1 className="text-primary-text text-2xl">Projects</h1>
            <div className="flex space-x-6 mt-6">
              {/* Card 1 */}
              <Card
                imageUrl={mobarok}
                title="Card Title 1"
                description="This is a description for card 1. It can be longer and more detailed."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
              />
              <Card
                imageUrl={mobarok}
                title="Card Title 2"
                description="This is a description for card 2. It can be longer and more detailed."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
              />
            </div>
            <div className="flex space-x-6 mt-6">
              {/* Card 1 */}
              <Card
                imageUrl={mobarok}
                title="Card Title 1"
                description="This is a description for card 1. It can be longer and more detailed."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
              />
              <Card
                imageUrl={mobarok}
                title="Card Title 2"
                description="This is a description for card 2. It can be longer and more detailed."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
