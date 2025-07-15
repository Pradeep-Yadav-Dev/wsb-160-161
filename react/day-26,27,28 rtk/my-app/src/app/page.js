"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./utility/features/counter/counterSlice";
import { useEffect } from "react";
import { viewProductThunk } from "./utility/features/product/productThunk";

export default function Home() {

  const count = useSelector((state) => state.counter.value)


  let { loading, product, error } = useSelector((state) => state.product)

  let dispatch = useDispatch()

  console.log(loading, product)

  useEffect(() => {
    dispatch(viewProductThunk())
  }, [])


  return (
    <>
      <h1> Home Page </h1>

      <center>
        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => dispatch(decrement())}>-</button>
        <h1>  {count}  </h1>
        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => dispatch(increment())} >+</button>
      </center>

      <div className="p-[20px] grid grid-cols-4 ">

        {loading == true
          ?
          "please wait...."
          :
          product.length == 0
            ?
            "no record found !"
            :
            product[0].map((v, i) => {
              return (
                <>
                  <div className="border">
                    <img src={v.thumbnail}  />
                    <h2> {v.title} </h2>
                  </div>
                </>
              )
            })
        }




      </div>
    </>
  );
}
