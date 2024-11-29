import React from 'react'
import { GiAutoRepair } from "react-icons/gi";
// import { LineChart } from 'recharts';

export default function NotFound() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-[calc(100vh-125px)]'>
        <GiAutoRepair className='text-blue-600 text-9xl'/>
        <p className='text-blue-600'>به زودی این صفحه بار گذاری خواهد شد</p>
    </div>
  )
}

