import React, { useState } from 'react'

export default function Modal() {

    const [showModal,setShowModal]=useState(false)

    let showModalFn=()=>{
        setShowModal(!showModal)
    }

    // (constions) ? "" : ""
    
  return (
    <div>
      <button onClick={showModalFn} > {showModal==true ? "hide modal" : "show modal"} </button>
        {showModal==true ? "true" : "false"}

      <div className={`myModal ${showModal==true ? "active" : "" } `}>
        <h2> User Modal  </h2>

        <span onClick={()=>setShowModal(false)} > X </span>
      </div>

    </div>
  )
}
