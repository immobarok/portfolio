import React from 'react';
import { useSidebar } from '../context/sideberContext';
import Button from './../components/Button';
import { Copy } from "lucide-react";

const About = () => {
  const { isCollapsed } = useSidebar(false);

  const handleClick = () => {
    alert('Clicked button');
  };

  return (
    <>
      <div className="w-full pl-4 md:pl-[320px] pr-4 md:pr-[120px] mt-16 md:mt-32 bg-transparent py-4">
        <div className={`transition-all duration-300 ${isCollapsed ? '' : 'md:ml-20'}`}>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926"
                alt="profile"
                className="w-full h-auto md:h-full object-cover rounded-lg"
              />
            </div>

            {/* About Text */}
            <div className="w-full md:w-2/3 text-start">
              <h1 className="text-4xl md:text-7xl text-primary-text">Hi there!</h1>
              <p className="py-4 text-secondary-text-200">
                Fueled by a passion for crafting compelling digital experiences, I am a web developer and UI/UX designer with a relentless drive to excel and continuously refine my skills. Explore more about my journey below.
              </p>
              <Button
                onClick={handleClick}
                size="medium"
                className="border border-[#2c2727] rounded-full text-primary-text hover:bg-secondary-bg"
              >
                View my CV
              </Button>
            </div>
          </div>

          {/* Career Journey Section */}
          <div className="mt-12 w-full border border-[#2c2727] rounded-lg shadow-lg pt-8">
            <div className='w-full px-6 py-2'>
              <h1 className='text-4xl text-primary-text'>My Career Journey</h1>
              <p className='text-secondary-text-200 pt-3 text-justify'>I began as a front-end developer, building responsive websites with React and JavaScript. Over time, I expanded into backend development, working with Node.js, Express.js, Firebase, JWT, SQL, and MongoDB to create full-stack applications. I also developed cross-platform mobile apps using React Native. As an SQA Engineer, I ensured software quality through rigorous testing, and as a UI/UX Designer, I crafted intuitive, user-friendly interfaces. Passionate about innovation, I continuously learn and adapt to deliver impactful, user-centric solutions.</p>
              <div className='my-4 flex gap-5'>
                <Button size="medium" className='border  rounded-lg border-[#423d3d] bg-secondary-bg hover:bg-primary-bg'>What I do</Button>
                <Button size="medium" className='border rounded-lg border-[#2c2727] hover:bg-secondary-bg flex items-center justify-center space-x-3'> <Copy /> <span>E-mail </span>
                </Button>
              </div>
            </div>
          </div>
          {/*  end career journey section*/}
          {/* Stack Section */}
          <div className='mt-12 w-full border border-[#2c2727] rounded-lg shadow-lg pt-8'>
            <div className='w-full px-6 py-2'>
              <h1 className='text-4xl text-primary-text'>My Stack</h1>
              <p className='text-secondary-text-200 pt-3 text-justify text-sm'>Software and resources I use on a regular basis.</p>
              <div className='my-4 flex gap-5'>
               
              </div>
            </div>
          </div>
          {/* end stack section */}
        </div>
      </div>
    </>
  );
};

export default About;