import React from 'react';
import { DashboardHeader, Sidenav } from '../shared';

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='w-full h-full flex'>
      <Sidenav />
      <main className='w-full h-full'>
        <DashboardHeader currentPage='shipment' />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout