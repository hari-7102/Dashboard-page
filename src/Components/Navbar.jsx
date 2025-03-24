import React from 'react'
import { House } from 'lucide-react';

import { UserPen } from 'lucide-react';

import { Building2 } from 'lucide-react';

import { ChartBarDecreasing } from 'lucide-react';

import { LayoutDashboard } from 'lucide-react';
import { QrCode } from 'lucide-react';
import { Slack } from 'lucide-react';

import { LogOut } from 'lucide-react';
import { SquareStack } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Star } from 'lucide-react';
import { Search } from 'lucide-react';
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='bg-black h-full lg:block w-1/5  hidden '>
      <div className='flex px-6 py-2 mx-3 gap-1 my-3'>
        <p className='bg-red-800 rounded-full p-2'></p>
        <p className='bg-yellow-800 rounded-full p-2'></p>
        <p className='bg-green-800 rounded-full p-2'></p>
      </div>

      <div className='flex flex-col gap-4  mx-6 my-16 h-[41.3rem]  '>
        <div className='flex  items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <House size={18} />
          <p>Dashboard</p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <UserPen size={18} />
          <p>Profile </p>
        </div>
        <div className='flex items-center text-white gap-2  p-2 hover:bg-cyan-500 rounded-xl '>
          <Building2 size={18} />
          <p>Leaderboard</p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <ChartBarDecreasing size={18} />
          <p>Order</p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <LayoutDashboard size={18} />
          <p>Products</p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <QrCode size={18} />
          <p>Sales Report</p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <Slack size={18} />
          <p>Message </p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <Settings size={18} />
          <p>Settings </p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <Star size={18} />
          <p>Favourite </p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <SquareStack size={18} />
          <p>History </p>
        </div>
        <div className='flex items-center text-white gap-2 p-2 hover:bg-cyan-500 rounded-xl '>
          <LogOut size={18} />
          <p>Sign Out </p>
        </div>
      </div>

    </div>
  )
}

export default Navbar