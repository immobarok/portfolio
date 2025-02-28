import React from 'react'
import SideNav from './SideNav'
import { SidebarProvider } from './../context/sideberContext';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <SidebarProvider className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-all">
        <SideNav>
        </SideNav>
        <div className='flex flex-col min-h-screen'>
          <main className='flex-grow'>{children}</main>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Layout