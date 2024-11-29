import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";

export default function Member(props) {
  return (
    <div>
        <div className='grid grid-cols-3 items-center'>
            <img className='w-12 h-12 rounded-full' src={props.image} alt="" />
            <div className=''>
                <h5 className='text-gray-600 font-semibold font-serif'>{props.customerName}</h5>
                <p className='text-gray-500 text-sm font-serif'>{props.job}</p>
            </div>
            <Link to={''}>
                <FaRegEye />
            </Link>
        </div>
    </div>
  )
}
