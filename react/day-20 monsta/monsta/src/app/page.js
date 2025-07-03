"use client"


import Image from "next/image";
// imgi_7_124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp

import dummy from "../../public/monsta-images/imgi_7_124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp"
import { useEffect } from "react";
export default function Home() {



  useEffect(()=>{
    console.log("hello class")
  },[])


  return (
    <>
    
    
    <h1> Welcome to Home page </h1>


    <img src={dummy}/>

    <Image src={dummy} width={500} height={500} />

   

  
    </>
  ); 
}
