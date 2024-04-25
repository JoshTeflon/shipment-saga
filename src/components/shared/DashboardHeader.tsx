import React from 'react';

interface DashboardHeaderProps {
  currentPage: string
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ currentPage }) => {
  return (
    <header className='w-full h-20 border-b-[0.5px] border-charcoal shadow-md'>
      <div className='w-full h-full flex items-center py-2 px-4'>
        <div className='text-sm font-medium uppercase flex items-center space-x-1 tracking-widest'>
          <span className='opacity-50'>dashboard</span>
          <span>/</span>
          <span>{currentPage}</span>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader