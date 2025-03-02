import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactIcon from "../assets/react.svg";
import ReduxIcon from "../assets/redux.svg";
import NodeIcon from "../assets/nodejs.svg";
import TailwindIcon from "../assets/tailwind.svg";
import JiraIcon from "../assets/jira.svg";
import MongoIcon from "../assets/mongo.svg";
import SqlIcon from "../assets/sql.svg";
import PostmanIcon from "../assets/postman.svg";
import GitIcon from "../assets/git.svg";
import FigmaIcon from "../assets/figma.svg";
import Footer from './Footer';


const FullStackDisplay = () => {

  // List of tools with their details
  const tools = [
    {
      id: 1,
      name: 'React',
      description: 'Frontend development',
      icon: ReactIcon,
      bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
    },
    {
      id: 2,
      name: 'Redux',
      description: 'State Management',
      icon: ReduxIcon,
      bgColor: 'bg-gradient-to-br from-purple-600 to-gray-200',
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      description: 'Utility-first CSS',
      icon: TailwindIcon,
      bgColor: 'bg-gradient-to-br from-blue-200 to-gray-200',
    },
    {
      id: 4,
      name: 'Node.js',
      description: 'JavaScript Runtime',
      icon: NodeIcon,
      bgColor: 'bg-gradient-to-br from-green-500 to-slate-200',
    },
    {
      id: 5,
      name: 'Jira',
      description: 'Project management',
      icon: JiraIcon,
      bgColor: 'bg-gradient-to-br from-gray-600 to-gray-700',
    },
    {
      id: 6,
      name: 'MongoDB',
      description: 'NoSQL Database',
      icon: MongoIcon,
      bgColor: 'bg-gradient-to-br from-green-600 to-pink-200',
    },
    {
      id: 7,
      name: 'MySQL',
      description: 'SQL Database',
      icon: SqlIcon,
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700',
    },
    {
      id: 8,
      name: 'Postman',
      description: 'API Testing Tool',
      icon: PostmanIcon,
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700',
    },
    {
      id: 9,
      name: 'Git',
      description: 'version control system',
      icon: GitIcon,
      bgColor: 'bg-gradient-to-br from-gray-200 to-orange-300',
    },
    {
      id: 10,
      name: 'Figma',
      description: 'Design Tools',
      icon: FigmaIcon,
      bgColor: 'bg-gradient-to-br from-blue-800 to-blue-900',
    },
  ];

  return (
    <div className="w-full bg-transparent rounded-xl p-6 text-white font-sans">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-2">My Stack</h2>
      <div className="text-gray-400 text-sm mb-6">
        Software and resources I use on a regular basis
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {/* Tool Icon */}
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white ${tool.bgColor}`}
            >
              <img src={tool.icon} alt={tool.name} className='w-8 h-8' />
            </div>

            {/* Tool Details */}
            <div>
              <h3 className="text-base font-medium">{tool.name}</h3>
              <p className="text-gray-400 text-sm mt-0.5">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/tools"}><button className='border-[] rounded-lg w-full bg-secondary-bg mt-4 py-2'>View All Tools</button></Link>
    </div>
  );
};

export default FullStackDisplay;