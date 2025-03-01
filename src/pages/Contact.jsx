import React from 'react'
import { useSidebar } from '../context/sideberContext'
import Button from './../components/Button';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const { isCollapsed } = useSidebar(false);
  return (
    <>
      <div className='w-full pl-4 md:pl-[320px] pr-4 md:pr-[120px] mt-16 md:mt-28 bg-transparent py-4'>
        <div className={`transition-all duration-300 ${isCollapsed ? '' : 'md:ml-20'}`}>
          <div>
            <h1 className='text-4xl md:text-5xl text-primary-text font-bold'>Contact</h1>
            <p className='text-sm md:text-[1rem] text-secondary-text-200 py-4'>Connect With Me – Let’s Create Something Great!</p>
          </div>
          <div className='flex gap-4 py-2'>
            <Link>

              <Button className='rounded-lg bg-secondary-bg border-[#2c2727] flex gap-2 hover:bg-primary-bg'>
                <span>Free Call</span>
                <Phone size={20} color='gray' />
              </Button>
            </Link>
            <Link>
              <Button className='rounded-lg flex gap-2 hover:bg-secondary-bg'>
                <span>E-Mail</span>
                <Mail size={20} color='gray' />
              </Button>
            </Link>
          </div>
          {/* isCollapse end here */}
          {/* Contact Form */}
          <div className='w-full bg-secondary-bg text-primary-text rounded-lg p-4 mt-8'>
            <h3 className='text-xl'>Send a message</h3>
            <div className='flex gap-3 py-3'>
              <input type="text" placeholder='Name' className='w-full bg-zinc-800 text-white rounded pl-6 pr-4 py-2 text-sm focus:outline-none border border-[#333030] focus:ring-1 focus:ring-gray-500' />
              <input type="text" placeholder='Email' className='w-full bg-zinc-800 text-white rounded pl-6 pr-4 py-2 text-sm focus:outline-none border border-[#333030] focus:ring-1 focus:ring-gray-500' />
            </div>
            <div className='message'>
              <textarea type="message" placeholder='Message'
                className='w-full bg-zinc-800 text-white rounded pl-6 pr-4 py-2 text-sm focus:outline-none border border-[#333030] focus:ring-1 focus:ring-gray-500 min-h-[120px]' />
              <button className='flex w-full bg-[#363636] justify-center border border-[#3d3d3d] rounded-lg mt-3 hover:bg-[#292929] py-2'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact