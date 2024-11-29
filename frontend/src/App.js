import React from 'react'
import { useRoutes } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Routes from './routes'

export default function App() {

  let router = useRoutes(Routes)

  return (
    <div>
      <Topbar />
      <div className='grid grid-cols-5 mx-4 gap-4'>
        <Sidebar/>
        <div className='col-span-4'>
          {router}
        </div>
      </div>
    </div>
  )
}
