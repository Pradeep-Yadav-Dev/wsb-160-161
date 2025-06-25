import React, { useCallback, useEffect, useState } from 'react'
import Header from './Commoncomponets/Header'
import Footer from './Commoncomponets/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Buymenu() {

  const [pData, setPData] = useState([])
  const [updateUrl,setUpdateUrl]=useState("")

  console.log(updateUrl)
 
  let displayData = () => {
    let Api;

    if(updateUrl==""){
      Api="https://dummyjson.com/products?limit=200"
    }
    else{
      Api=updateUrl
    }

    axios.get(Api)
      .then((ress) => {
        setPData(ress.data.products)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  // show Cat
  const [storeCat, setStoreCat] = useState([])



  let showCat = () => {
    axios.get("https://dummyjson.com/products/categories")
      .then((ress) => {
        setStoreCat(ress.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  useEffect(() => {
    displayData()

  }, [updateUrl])

  useEffect(()=>{
     showCat()
  },[])

  // get url work
let getUrl=useCallback((cat)=>{
 setUpdateUrl(cat)
},[])


  
  return (
    <>
      <Header />
      <div className="main shadow mx-auto container max-w-[1400px]">
        <div className="buyhead">
          <h1 className='p-[8px]'>Buy Chips & Crisps Online</h1>
        </div>

        <div className="buybody  w-[100%] grid grid-cols-[18%_auto] gap-[20px]">
          <div className="sidebar   h-[500px] overflow-y-scroll  ">



            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

              {storeCat.length > 0
                ?
                storeCat.map((v, i) => {
                  return (
                    <Category item={v} key={i}  getUrl={getUrl}  />
                  )
                })
                :
                "please wait ......"
              }
            </ul>

          </div>

          <div className="menu  grid grid-cols-6  gap-[10px] ">

            {pData.length > 0
              ?
              pData.map((v, i) => {
                return (
                  <Card item={v} key={i} />
                )
              })
              :
              "please wait.............."
            }



          </div>
        </div>


      </div>


      <Footer />
    </>
  )
}



const Card = ({ item }) => {
  return (
    <div className="">
      <div className=" rounded-lg shadow-lg border  p-2 relative me-[8px] ">
        {/* Offer Badge */}
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-1 py-0.5 rounded-sm">
          <span> ID : {item.id} </span>
        </div>
        

        {/* Product Image */}
        <div className="w-full  flex justify-center items-center mb-2">
          <Link to={`/checkout/${item.id}`}  > <img
            src={item.thumbnail}
            alt="product"
            className=" w-full"
          /></Link>

        </div>

        {/* Delivery Time */}
        <div className="text-green-700 text-xs flex items-center gap-1 mb-1">
          <span>Rating </span>
          <span> {item.rating} </span>

          
        </div>

        {/* Product Title */}
        <h3 className="text-sm font-semibold leading-tight mb-1">
          {item.title}
        </h3>

        {/* Weight Dropdown */}
        <p className="text-xs text-gray-600 mb-2">stock {item.stock} ▼</p>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold">₹ {((item.price) + 20).toFixed(2)}</span>
            <span className="line-through text-gray-400 text-xs ml-1">₹ {item.price} </span>
          </div>
          <button className="border border-green-600 text-green-600 text-sm px-2 py-0.5 rounded">
            ADD
          </button>
        </div>
      </div>
    </div>
  )
}



const Category = ({ item ,getUrl}) => {


  return (

    <li onClick={()=>getUrl(item.url) } class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{item.name}</li>

  )
}