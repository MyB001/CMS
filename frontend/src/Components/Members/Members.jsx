import React from 'react'
import Member from './Member'

export default function Members() {
  return (
    <div className='space-y-4 border-l-2 border-sky-400'>
      <h1 className='font-bold text-lg'>مشتریان جدید</h1>
        <div className='grid grid-cols-3 p-2'>
            <h1 className='font-semibold'>عکس</h1>
            <h1 className='font-semibold'>مشخصات</h1>
            <h1 className='font-semibold'>جزئیات</h1>
        </div>
        <div className='space-y-4'>
            <Member customerName='فاطمه کریمی' job='بازاریاب' image='customer 3.jpg'/>
            <Member customerName='ایمان همتی' job='توسعه دهنده ارشد' image='customer 1.jpg'/>
            <Member customerName='امیر ایرانی' job='برق کار ساختمان' image='customer 2.jpg'/>
        </div>
    </div>
  )
}
