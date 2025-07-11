import React from 'react'
import Header from './comman/Header'
import { Outlet } from 'react-router-dom'
import Faq from './comman/Faq'

export default function Layout() {
  return (
    <div className='w-full grid grid-cols-[20%_auto] h-[100vh] ' >

      <div className="bg-[red]">  <Faq/>  </div>
      <div className="bg-[green]">
        <Header />
        <Outlet/>
      </div>


    </div>
  )
}
