import React from 'react'
import { createContext, useState } from 'react'


export const BlinkitContext = createContext()

export default function WebsiteContext({ children }) {

   const [cart,setCart]=useState([])

    return (
        <BlinkitContext value={{cart,setCart}} >
            {children}
        </BlinkitContext>
    )
}
