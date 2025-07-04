"use client"

import Image from "next/image";

import dummy from "../../public/monsta-images/imgi_7_124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((ress) => {
        setData(ress.data.products)
      })
      .catch()
  }, [])


  return (
    <>
      <div className="max-w-[1440px]  mx-auto grid grid-cols-4 gap-[10px] ">

        {data.length > 0 ?
          data.map((v, i) => {
            return (
              <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={v.thumbnail} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <Link href={`/product-details/${v.id}/pradeep`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    ID : {v.id}
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })
          :
          "please wait....."}





      </div>



    </>
  );
}
