import React from 'react'

export default function Header({movieLength}) {
  return (
    <center>
      <h1 className='text-[35px] font-bold '> Total Movie  {movieLength}</h1>
    </center>
  )
}
