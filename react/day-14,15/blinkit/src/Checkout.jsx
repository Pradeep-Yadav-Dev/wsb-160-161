import React, { useEffect, useState } from 'react'
import Header from './Commoncomponets/Header'
import Footer from './Commoncomponets/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Checkout() {


  const [singleData,setSingleData]=useState({})

  console.log(singleData)

  let pId=useParams().id

  let productDetails=()=>{
    axios.get(`https://dummyjson.com/products/${pId}`)
    .then((ress)=>{
     setSingleData(ress.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    productDetails()
  },[])

  return (
    <div>
      <Header />
      <div className="body w-[100%] flex">
        <div className="image w-[50%]  ">
          <img src={singleData.thumbnail} alt="" />

          <div className=' flex'>
             {singleData.images?.map((v)=>{
              return(
                 <img src={v} alt="" className='border-2' width={"150"} />
              )
             })}
          </div>
        </div>
        <div className="info w-[50%]">
          <p className='py-[10px] text-[22px] font-bold '>
            {singleData.title}
          </p>

           <div className='py-[10px] text-[18px] '>price:- {singleData.price} </div>

           <p> {singleData.description} </p>
            

          
        </div>
      </div>
      <Footer />
    </div>
  )
}
