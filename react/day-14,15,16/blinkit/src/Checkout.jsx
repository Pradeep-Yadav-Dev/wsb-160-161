import React, { useContext, useEffect, useState } from 'react'
import Header from './Commoncomponets/Header'
import Footer from './Commoncomponets/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BlinkitContext } from './context/WebsiteContext'
import { ToastContainer, toast } from 'react-toastify';


export default function Checkout() {


  const [singleData,setSingleData]=useState({})

 let {cart,setCart}=useContext(BlinkitContext)

 console.log("cart",cart)



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


  // add to cart work

  let addtocart=(sData)=>{
    

    let productObj={
      id:sData.id,
      image:sData.thumbnail,
      price:sData.price,
      title:sData.title,
      brand:sData.brand,
      quantity:1

    }

    // console.log("productObj",productObj)
    setCart([...cart,productObj])
    toast.success("added !")
  }

  return (
    <div>
      <ToastContainer />
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

           <button onClick={()=>addtocart(singleData)} type="button" class=" mt-[50px] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Add To Cart </button>
            

          
        </div>
      </div>
      <Footer />
    </div>
  )
}
