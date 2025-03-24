import React from 'react'
import Navbar from './Components/Navbar'
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

import { Hexagon } from 'lucide-react';
import { Cylinder } from 'lucide-react';
import { CloudDownload } from 'lucide-react';
import { ImagePlus } from 'lucide-react';
import { Dot } from 'lucide-react';
import Graph from './assets/kkkk.png'
import Elpse from './assets/ellipse.png'
import Wave from './assets/wave.png'
import Layout from './Components/Layout';

import Bar from './assets/Bars.png'



const App = () => {





  return (
    <Layout className >
      <div className='flex w-full bg-black'>

        <div className='my-4 mx-7 w-full'>
          <div className='flex justify-between items-center w-full my-1'>
            <div className='flex items-center text-white text-lg  w-2/3 gap-2 px-8 rounded-xl py-4 bg-gray-800'>
              <Search />
              <p>Search here ......</p>
            </div>

            <div className='text-white flex items-center gap-3 text-base  '>
              <Bell />
              <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" className='w-7 h-7' />
              <ChevronDown />
            </div>
          </div>
          <div className='flex gap-4  flex-wrap lg:flex-nowrap  '>
            <div className="bg-gray-800 my-3 p-2 rounded-xl w-2/3 ">
              <div className="px-3.5 py-1">
                <p className="text-2xl text-white">Today's Sales</p>
                <p className="text-gray-500">Sales Summary</p>
              </div>

              <div className="grid grid-cols-2 gap-4 px-7 py-1  lg:grid-cols-4 ">
                {/* Card 1 - Total Sales */}
                <div className="flex flex-col p-4 gap-4 rounded-xl bg-gray-900 w-full">
                  <Hexagon className="text-yellow-700" />
                  <div className="flex flex-col">
                    <p className="text-white text-2xl">$5K</p>
                    <p className="text-white">Total Sales</p>
                    <p className="text-yellow-700 text-xs">+10% from yesterday</p>
                  </div>
                </div>

                {/* Card 2 - Total Order */}
                <div className="flex flex-col p-4 gap-4 rounded-xl bg-gray-900 w-full">
                  <Cylinder className="text-green-600" />
                  <div className="flex flex-col">
                    <p className="text-white text-2xl">500</p>
                    <p className="text-white">Total Order</p>
                    <p className="text-green-700 text-xs">+8% from yesterday</p>
                  </div>
                </div>

                {/* Card 3 - Products Sold */}
                <div className="flex flex-col p-4 gap-4 rounded-xl bg-gray-900 w-full">
                  <CloudDownload className="text-pink-500" />
                  <div className="flex flex-col">
                    <p className="text-white text-2xl">9</p>
                    <p className="text-white">Products Sold</p>
                    <p className="text-pink-500 text-xs">+2% from yesterday</p>
                  </div>
                </div>

                {/* Card 4 - New Customers */}
                <div className="flex flex-col p-4 gap-4 rounded-xl bg-gray-900 w-full">
                  <ImagePlus className="text-blue-600" />
                  <div className="flex flex-col">
                    <p className="text-white text-2xl">12</p>
                    <p className="text-white">New Customers</p>
                    <p className="text-blue-600 text-xs">+3% from yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 my-3 rounded-xl w-1/3 px-4 py-1.5'>
              <div className='flex flex-col gap-4'>
                <p className='text-white py-2 text-2xl'>Level</p>

                <div className='flex justify-center  gap-14 mx-8 items-end '>
                  {/* <p className=' bg-cyan-500 w-4 h-28 rounded-sm'></p>
                  <p className='bg-cyan-500 w-4  h-16  rounded-sm'></p>
                  <p className='bg-cyan-500 w-4  h-20  rounded-sm'></p>
                  <p className='bg-cyan-500 w-4  h-12  rounded-sm'></p>
                  <p className='bg-cyan-500 w-4  h-10 rounded-sm'></p>
                  <p className='bg-cyan-500 w-4  h-14 rounded-sm'></p> */}
                  <img src={Bar} alt=""   className='w-[13rem]' />
                </div>

                <div className='flex justify-evenly -mx-7 my-3 items-center  text-white'>
                  <div className='flex items-center'>
                    <Dot size={12} className='text-cyan-500' />
                    <p>Volume </p>
                  </div>
                  <p className='text-gray-600'>|</p>
                  <p>Service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5    flex-wrap lg:flex-nowrap   ">
            <div className="bg-gray-800 rounded-xl px-7 py-2 flex flex-col w-2/3">
              <p className="text-white text-2xl py-2">Top Products</p>

              <table className="w-full border-collapse my-1">
                <thead className=" text-gray-500 text-sm ">
                  <tr>
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Popularity</th>
                    <th className="p-2 text-left">Sales</th>
                  </tr>
                </thead>
                <tbody className="text-white text-sm">
                  <tr className="border-b border-gray-600">
                    <td className="p-2">01</td>
                    <td className="p-2">Home Decore Range</td>
                    <td className="p-2">
                      <div className="bg-amber-400 h-1 w-32 rounded-full"></div>
                    </td>
                    <td className="p-2">
                      <button className=' text-amber-400 border border-amber-400 rounded-lg p-1 px-2'>
                        46%
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-600">
                    <td className="p-2">02</td>
                    <td className="p-2">Disney Princess Dress</td>
                    <td className="p-2">
                      <div className="bg-teal-700 h-1 w-24 rounded-full"></div>
                    </td>
                    <td className="p-2">
                      <button className=' text-teal-300 border border-teal-400 rounded-lg p-1 px-2'>
                        17%
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-600">
                    <td className="p-2">03</td>
                    <td className="p-2">Bathroom Essentials</td>
                    <td className="p-2">
                      <div className="bg-blue-400 h-1 w-16 rounded-full"></div>
                    </td>
                    <td className="p-2">
                      <button className=' text-blue-400 border border-blue-400 rounded-lg p-1 px-2'>
                        19%
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2">04</td>
                    <td className="p-2">Apple Smartwatch</td>
                    <td className="p-2">
                      <div className="bg-pink-300 h-1 w-12 rounded-full"></div>
                    </td>
                    <td className="p-2">
                      <button className=' text-pink-300 border border-pink-300 rounded-lg p-1 px-2'>
                        29%
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='bg-gray-800 rounded-xl w-1/3 px-4 py-1.5'>
              <div className='flex flex-col gap-4'>
                <p className='text-white text-2xl text-start '>Customer Fulfitment </p>
                <img src={Graph} alt="" className=' h-32 items-center flex justify-center ' />


                {/* <div className='flex gap-14 mx-4 items-end '>
                <p className=' bg-cyan-500 w-3 h-24 rounded-sm'></p>
                <p className='bg-cyan-500 w-3 h-16  rounded-sm'></p>
                <p className='bg-cyan-500 w-3  h-20  rounded-sm'></p>
                <p className='bg-cyan-500 w-3  h-12  rounded-sm'></p>
                <p className='bg-cyan-500 w-3  h-10 rounded-sm'></p>
                <p className='bg-cyan-500 w-3  h-8 rounded-sm'></p>
              </div> */}

                <div className='flex justify-between my-1 items-center   text-white'>
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center'>
                      <Dot size={33} className='text-cyan-500' />
                      <p>Last Month </p>
                    </div>
                    <div className='fle flex-col '>
                      <p>$ 4,087</p>
                    </div>
                  </div>

                  <div className='flex flex-col  items-center'>
                    <div className='flex items-center'>
                      <Dot size={33} className='text-pink-400' />
                      <p>This Month </p>
                    </div>
                    <div className='fle flex-col '>
                      <p>$ 5,506</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>



          </div>

          <div className='flex gap-4  flex-wrap lg:flex-nowrap     '>
            <div className='bg-gray-800 rounded-xl px-6 py-2 w-1/3 my-3'>
              <p className='text-white  text-2xl'>Earnings</p>
              <p className='text-xs text-gray-500'>Total Expense</p>
              <p className='text-cyan-400 text-2xl my-2'>$ 6078.76</p>
              <div className='flex justify-center  items-center  relative'>
                <img src={Elpse} alt="" className='w-[17rem]' />
                <p className=' absolute top-20 text-3xl text-center text-white  lg:top-24 '>80%</p>
              </div>
            </div>

            <div className='bg-gray-800 rounded-xl p-3.5 w-2/3 my-3'>
              <div className='flex justify-between items-center'>
                <p className='text-2xl text-white'>Visitor Insights</p>
                <button className='rounded-lg text-white bg-gray-700 px-4 py-1 cursor-pointer'>New Visitor</button>
              </div>
              <div className='flex'>
                <div className='flex flex-col mx-6 gap-4 my-4 justify-start  text-white'>
                  <p>500</p>
                  <p>400</p>
                  <p>200</p>
                  <p>200</p>
                  <p>100</p>
                  <p className='text-end'>0</p>
                </div>
                <img src={Wave} alt="" className='w-5/6   ' />
              </div>

              <div className="flex flex-wrap justify-center text-white items-center gap-4 md:gap-6 lg:gap-10">
                <p>Jan</p>
                <p>Feb</p>
                <p>Mar</p>
                <p>Apr</p>
                <p>May</p>
                <p>Jun</p>
                <p>July</p>
                <p>Aug</p>
                <p>Sep</p>
                <p>Oct</p>
                <p>Nov</p>
                <p>Dec</p>
              </div>


            </div>

          </div>



        </div>
      </div>
    </Layout>
  )
}

export default App