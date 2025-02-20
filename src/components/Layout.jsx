import React from 'react'
import Footer from './Footer'
import SideNav from './SideNav'
import { SidebarProvider } from './../context/sideberContext';

const Layout = ({ children }) => {
  return (
    <div className='flex'>
      <SidebarProvider>
        <SideNav />
        <div className='flex flex-col min-h-screen'>
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Layout