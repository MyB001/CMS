import React from 'react'
import { Link } from 'react-router-dom';
import { MdElectricBolt } from "react-icons/md";
import { GiRingingBell } from "react-icons/gi";
import { IoPlanetOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

export default function Topbar() {
  return (
    <div className='z-50 m-4 p-4 px-8 bg-white sticky top-4 flex justify-between items-center shadow-md border-[1px] border-sky-300 shadow-sky-300 rounded-xl'>
        <Link to={'/'} className='flex items-center gap-4'>
            <h1 className='font-bold text-2xl text-blue-600'>یاسین الکتریک</h1>
            <MdElectricBolt  className='text-blue-600 text-2xl'/>
        </Link>
        <div className='flex items-center gap-2'>
            <Link to={''} className='relative'>
                <GiRingingBell className='text-gray-500 text-3xl'/>
                <span className='w-5 h-5 absolute -top-2 right-0 bg-red-600 text-white flex justify-center items-center text-[8px] rounded-full'>24</span>
            </Link>
            <Link to={''} className='relative'>
                <IoPlanetOutline className='text-gray-500 text-3xl'/>
                <span className='w-5 h-5 absolute -top-2 right-0 bg-red-600 text-white flex justify-center items-center text-[8px] rounded-full'>174</span>
            </Link>
            <Link to={''}>
                <CiSettings className='text-gray-500 text-3xl'/>
            </Link>
            <Link to={''}>
                <img className='w-12 h-12 rounded-full' src="admin.jpg" alt="" />
            </Link>
        </div>
    </div>
  )
}