import React from 'react';
import { Shipment } from '../icons';

interface SidenavProps {
  
}

export const NavItem = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Shipment />
      <span>Shipment</span>
    </div>
  )
}

const Sidenav: React.FC<SidenavProps> = () => {
  return (
    <nav className='w-full h-screen max-w-24 bg-base border-r-2 border-black/50'>
      <NavItem />
    </nav>
  )
}

export default Sidenav;