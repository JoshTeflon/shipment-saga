import React, { SVGProps } from 'react';
import { sidenavItems } from '../../lib/data/sidenav';
import { SidenavItem } from '../../lib/types/sidenav';

interface SidenavProps {
  
}

interface NavItemProps {
  icon: React.FC<SVGProps<SVGSVGElement>>
  item: string
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon, item }) => {
  return (
    <div className='py-1 px-4 flex items-center space-x-2 lg:space-x-4 bg-sunsetRed rounded-lg cursor-pointer'>
      <Icon />
      <span className='text-sm xl:text-base text-sundrift capitalize'>{item}</span>
    </div>
  )
}

const Sidenav: React.FC<SidenavProps> = () => {
  return (
    <nav className='w-full h-screen max-w-64 bg-deepOcean text-sundrift py-8 px-4'>
      <div className='flex flex-col space-y-4'>
        {
          sidenavItems.map((item: SidenavItem) => (
            <NavItem
              icon={item.icon}
              item={item.item}
            />
          ))
        }
      </div>
    </nav>
  )
}

export default Sidenav;