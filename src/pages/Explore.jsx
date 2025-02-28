import React from "react";
import { useSidebar } from "../context/sideberContext";
import { Mail } from "lucide-react";
import mobarok from "../assets/mobarok.jpg";
import Card from "../components/Card";

const Explore = () => {
  const { isCollapsed } = useSidebar(false);

  const handleButtonClick = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <div className="w-full pl-4 md:pl-[320px] mt-16 md:mt-32 bg-transparent">
        <div className={`transition-all duration-300 ${isCollapsed ? "" : "md:ml-20"}`}>
          {/* Header Section */}
          <div className="text-start">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-200">
              Hey, I'm Mobarok.
            </h1>
            <h1 className="mt-4 text-3xl md:text-5xl text-gray-200 font-bold">
              And I am a{" "}
              <span className="text-secondary-text-200">Web developer.</span>
            </h1>
            <h1 className="my-3 text-lg md:text-xl font-medium text-secondary-text-200">
              A developer who thrives on clean code, innovative thinking,
              <br className="hidden md:block" /> and crafting elegant solutions
            </h1>
            <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <button className="px-7 py-3 bg-secondary-bg text-primary-text font-semibold rounded-lg border-[0.1px] border-secondary-border hover:bg-primary-bg">
                About
              </button>
              <button className="px-7 py-3 bg-transparent text-primary-text border-[0.1px] border-secondary-border font-semibold rounded-lg hover:bg-secondary-bg flex items-center justify-center space-x-3">
                <Mail />
                <span>E-Mail</span>
              </button>
            </div>
          </div>

          {/* Latest Projects Section */}
          <div className="mt-8">
            <h1 className="text-primary-text text-2xl">Projects</h1>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-6">
              {/* Card 1 */}
              <Card
                imageUrl={mobarok}
                title="Card Title 1"
                description="This is a description for card 1. It can be longer and more detailed."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
              />
              {/* Card 2 */}
              <Card
                imageUrl={mobarok}
                title="Card Title 2"
                description="This is a description for card 2. It can be longer and more detailed."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-6">
              {/* Card 3 */}
              <Card
                imageUrl={mobarok}
                title="Card Title 3"
                description="This is a description for card 3. It can be longer and more detailed."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
              />
              {/* Card 4 */}
              <Card
                imageUrl={mobarok}
                title="Card Title 4"
                description="This is a description for card 4. It can be longer and more detailed."
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

export default Explore;