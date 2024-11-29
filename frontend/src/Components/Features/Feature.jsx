import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Feature(props) {
  return (
    <div className='space-y-2 border-[1px] border-sky-300 rounded-lg shadow-lg shadow-sky-200 p-4 text-gray-600'>
      <h3 className='font-bold'>{props.title}</h3>
      <div className='flex items-center gap-4'>
        <p className='text-xl'>{props.price} <span className='text-sm font-bold'>تومان</span></p>
        <div className='flex items-center'>
            <span dir='ltr' className='text-sm'>{props.profit}</span>
            {
                props.profit > 0
                ?
                (
                    <MdKeyboardDoubleArrowUp className='text-xl text-green-500'/>

                )
                :
                (
                    <MdKeyboardDoubleArrowDown className='text-xl text-red-500'/>
                )
            }
        </div>
      </div>
      <p>نسبت به ماه گذشته</p>
      
    </div>
  )
}
