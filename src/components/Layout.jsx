import React from 'react'
import Footer from './Footer'
import SideNav from './SideNav'
import { SidebarProvider } from './../context/sideberContext';
import Hero from './Hero';

const Layout = ({ children }) => {
  return (
    <div>
        <SidebarProvider className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-all">
          <SideNav />
          <Hero />
          <div className='flex flex-col min-h-screen'>
            <main className='flex-grow'>{children}</main>
          </div>
        </SidebarProvider>
    </div>
  )
}

export default Layout