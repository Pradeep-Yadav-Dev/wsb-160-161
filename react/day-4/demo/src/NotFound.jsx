import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <img src='https://rathnagroup.in/wp-content/uploads/2021/07/404-Page.gif'/>

    <Link to={"/"} >  <button> Home Page </button></Link>
    </div>
  )
}
