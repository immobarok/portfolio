import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactIcon from "../assets/react.svg";
import ReduxIcon from "../assets/redux.svg";
import NodeIcon from "../assets/nodejs.svg";
import ExpressIcon from "../assets/express.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import TailwindIcon from "../assets/tailwind.svg";
import JiraIcon from "../assets/jira.svg";
import MongoIcon from "../assets/mongo.svg";
import SqlIcon from "../assets/sql.svg";
import PostmanIcon from "../assets/postman.svg";
import FigmaIcon from "../assets/figma.svg";
import FramerIcon from "../assets/framer.svg";
import Footer from '../components/Footer';
import { useSidebar } from '../context/sideberContext';
import VidualStudioIcon from '../assets/vscode.svg';
import SublimeTextIcon from '../assets/sublimetext.svg';
import IntellijIcon from '../assets/intellij.svg';
import GitHubIcon from '../assets/github.svg';
import GitKraken from '../assets/gitkraken.svg';
import PrismIcon from '../assets/prisma.svg';

const Stack = () => {
  const { isCollapsed } = useSidebar(false);

  // List of tools with their details
  const frontendTools = [
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
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      description: 'Utility-first CSS',
      icon: TailwindIcon,
      bgColor: 'bg-gradient-to-br from-teal-700 to-zinc-800',
    },
    {
      id: 4,
      name: 'Booststrap',
      description: 'Utility-first CSS',
      icon: BootstrapIcon,
      bgColor: 'bg-gradient-to-br from-blue-200 to-gray-200',
    },

  ]
  const backendTools = [
    {
      id: 5,
      name: 'Node.js',
      description: 'JavaScript Runtime',
      icon: NodeIcon,
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-600',
    },
    {
      id: 6,
      name: 'Express',
      description: 'Web Framework',
      icon: ExpressIcon,
      bgColor: 'bg-gradient-to-br from-green-100 to-gray-200',
    },
    {
      id: 7,
      name: 'MongoDB',
      description: 'NoSQL Database',
      icon: MongoIcon,
      bgColor: 'bg-gradient-to-br from-green-200 to-green-100',
    },
    {
      id: 8,
      name: 'SQL',
      description: 'Relational Database',
      icon: SqlIcon,
      bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
    },
    {
      id: 9,
      name: 'Prisma',
      description: 'Database ORM',
      icon: PrismIcon,
      bgColor: 'bg-gradient-to-br from-blue-800 to-teal-100',
    },
    {
      id: 10,
      name: 'Postman',
      description: 'API Development',
      icon: PostmanIcon,
      bgColor: 'bg-gradient-to-br from-orange-300 to-orange-200',
    },
  ]
  const designTools = [
    {
      id: 11,
      name: 'Figma',
      description: 'Design Tools',
      icon: FigmaIcon,
      bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
    },
    {
      id: 12,
      name: 'Framer',
      description: 'Web Design Platform',
      icon: FramerIcon,
      bgColor: 'bg-gradient-to-br from-gray-300 to-gray-400',
    },
  ];
  const ideTools = [
    {
      id: 13,
      name: 'Visual Studio Code',
      description: 'Code Editor',
      icon: VidualStudioIcon,
      bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
    },
    {
      id: 14,
      name: 'Sublime Text',
      description: 'Code Editor',
      icon: SublimeTextIcon,
      bgColor: 'bg-gradient-to-br from-gray-300 to-gray-400',
    },
    {
      id: 15,
      name: 'IntelliJ IDEA',
      description: 'Code Editor',
      icon: IntellijIcon,
      bgColor: 'bg-gradient-to-br from-purple-600 to-gray-400',
    },
  ];
  const projectManegementTools = [
    {
      id: 16,
      name: 'Jira',
      description: 'Project management',
      icon: JiraIcon,
      bgColor: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
    },
    {
      id: 17,
      name: "GitHub",
      description: "Version Control",
      icon: GitHubIcon,
      bgColor: 'bg-gradient-to-br from-teal-300 to-slate-900'
    },
    {
      id: 18,
      name: "GitKraken",
      description: "Git GUI Client",
      icon: GitKraken,
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-800'
    }
  ];

  return (
    <>
      <div className="w-full pl-4 md:pl-[320px] pr-4 md:pr-[120px] mt-16 md:mt-28 bg-transparent py-4">
        <div className={`transition-all duration-300 ${isCollapsed ? '' : 'md:ml-20'}`}>
          <div className="w-full bg-transparent rounded-xl p-6 text-white font-sans">
            {/* Heading */}
            <h2 className="font-bold mb-2 text-4xl">My Stack</h2>
            <div className="text-gray-400 text-sm mb-6">
              Software and resources I use on a regular basis
            </div>

            {/* Tools Grid */}
            <div className='border rounded-lg border-[#2c2727]'>
              <p className='p-4 text-xl font-semibold'>Frontend</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
                {frontendTools.map((ftools) => (
                  <div
                    key={ftools.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {/* Tool Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white ${ftools.bgColor}`}
                    >
                      <img src={ftools.icon} alt={ftools.name} className='w-8 h-8' />
                    </div>

                    {/* Tool Details */}
                    <div>
                      <h3 className="text-sm font-medium">{ftools.name}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">{ftools.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='border rounded-lg border-[#2c2727] mt-6'>
              <p className='p-4 text-xl font-semibold'>Backend</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
                {backendTools.map((btools) => (
                  <div
                    key={btools.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {/* Tool Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white ${btools.bgColor}`}
                    >
                      <img src={btools.icon} alt={btools.name} className='w-8 h-8' />
                    </div>

                    {/* Tool Details */}
                    <div>
                      <h3 className="text-sm font-medium">{btools.name}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">{btools.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='border rounded-lg border-[#2c2727] mt-6'>
              <p className='p-4 text-xl font-semibold'>Design</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
                {designTools.map((d) => (
                  <div
                    key={d.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {/* Tool Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white ${d.bgColor}`}
                    >
                      <img src={d.icon} alt={d.name} className='w-8 h-8' />
                    </div>

                    {/* Tool Details */}
                    <div>
                      <h3 className="text-sm font-medium">{d.name}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='border rounded-lg border-[#2c2727] mt-6'>
              <p className='p-4 text-xl font-semibold'>IDEs</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
                {ideTools.map((ide) => (
                  <div
                    key={ide.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {/* Tool Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white ${ide.bgColor}`}
                    >
                      <img src={ide.icon} alt={ide.name} className='w-8 h-8' />
                    </div>

                    {/* Tool Details */}
                    <div>
                      <h3 className="text-sm font-medium">{ide.name}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">{ide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='border rounded-lg border-[#2c2727] mt-6'>
              <p className='p-4 text-xl font-semibold'>Project Management</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-3">
                {projectManegementTools.map((pTools) => (
                  <div
                    key={pTools.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {/* Tool Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white ${pTools.bgColor}`}
                    >
                      <img src={pTools.icon} alt={pTools.name} className='w-8 h-8' />
                    </div>

                    {/* Tool Details */}
                    <div>
                      <h3 className="text-sm font-medium">{pTools.name}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">{pTools.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Stack;