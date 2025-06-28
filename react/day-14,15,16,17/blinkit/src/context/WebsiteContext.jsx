import React, { useEffect } from 'react'
import { createContext, useState } from 'react'


export const BlinkitContext = createContext()

export default function WebsiteContext({ children }) {

   const [cart,setCart]=useState( JSON.parse(localStorage.getItem("wsb-160-161")) ?? [])

   useEffect(()=>{
        localStorage.setItem("wsb-160-161",JSON.stringify(cart))
   },[cart])


   const [total,setTotal]=useState(0)

    return (
        <BlinkitContext value={{cart,setCart,total,setTotal}} >
            {children}
        </BlinkitContext>
    )
}
