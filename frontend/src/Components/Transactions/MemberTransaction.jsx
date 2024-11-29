import React from 'react'

export default function MemberTransaction(props) {
  return (
    <div>
        <div className='grid grid-cols-4 items-center p-2'>
            <p className='text-gray-600 font-bold'>{props.customerName}</p>
            <p className='text-gray-600'>{props.data}</p>
            <p className='text-gray-500 font-bold'>{props.price} <span className='font-light'>تومان</span></p>
            <p className='text-gray-500'>{props.status}</p>
        </div>
    </div>
  )
}
