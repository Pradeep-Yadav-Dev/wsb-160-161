"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const products = [
    { id: 1, title: "Wireless Headphones", price: 59.99, image: "https://source.unsplash.com/random/300x300?headphones", category: "Featured" },
    { id: 2, title: "Smart Watch", price: 129.99, image: "https://source.unsplash.com/random/300x300?smartwatch", category: "Featured" },
    { id: 3, title: "Bluetooth Speaker", price: 39.99, image: "https://source.unsplash.com/random/300x300?speaker", category: "New Arrivals" },
    { id: 4, title: "Gaming Mouse", price: 29.99, image: "https://source.unsplash.com/random/300x300?mouse", category: "New Arrivals" },
    { id: 5, title: "LED Desk Lamp", price: 19.99, image: "https://source.unsplash.com/random/300x300?lamp", category: "Onsale" },
    { id: 6, title: "USB-C Charger", price: 14.99, image: "https://source.unsplash.com/random/300x300?charger", category: "Onsale" },
    { id: 7, title: "Noise-Cancelling Earbuds", price: 89.99, image: "https://source.unsplash.com/random/300x300?earbuds", category: "Featured" },
    { id: 8, title: "4K Action Camera", price: 199.99, image: "https://source.unsplash.com/random/300x300?camera", category: "Featured" },
    { id: 9, title: "Portable Power Bank", price: 34.99, image: "https://source.unsplash.com/random/300x300?powerbank", category: "Featured" },
    { id: 10, title: "Wireless Keyboard", price: 49.99, image: "https://source.unsplash.com/random/300x300?keyboard", category: "New Arrivals" },
    { id: 11, title: "Smart Home Hub", price: 79.99, image: "https://source.unsplash.com/random/300x300?smarthome", category: "New Arrivals" },
    { id: 12, title: "Fitness Tracker", price: 44.99, image: "https://source.unsplash.com/random/300x300?fitnesstracker", category: "New Arrivals" },
    { id: 13, title: "USB Desk Fan", price: 12.99, image: "https://source.unsplash.com/random/300x300?fan", category: "Onsale" },
    { id: 14, title: "Phone Stand", price: 9.99, image: "https://source.unsplash.com/random/300x300?phonestand", category: "Onsale" },
    { id: 15, title: "Wireless Mouse Pad", price: 24.99, image: "https://source.unsplash.com/random/300x300?mousepad", category: "Onsale" },
    { id: 16, title: "Smart Thermostat", price: 149.99, image: "https://source.unsplash.com/random/300x300?thermostat", category: "Featured" },
    { id: 17, title: "Portable Projector", price: 249.99, image: "https://source.unsplash.com/random/300x300?projector", category: "Featured" },
    { id: 18, title: "Gaming Headset", price: 69.99, image: "https://source.unsplash.com/random/300x300?headset", category: "New Arrivals" },
    { id: 19, title: "Smart Light Bulb", price: 19.99, image: "https://source.unsplash.com/random/300x300?lightbulb", category: "New Arrivals" },
    { id: 20, title: "Car Charger", price: 17.99, image: "https://source.unsplash.com/random/300x300?carcharger", category: "Onsale" },
    { id: 21, title: "Wireless Webcam", price: 59.99, image: "https://source.unsplash.com/random/300x300?webcam", category: "Onsale" },
    { id: 22, title: "Smart Doorbell", price: 99.99, image: "https://source.unsplash.com/random/300x300?doorbell", category: "Featured" },
    { id: 23, title: "VR Headset", price: 299.99, image: "https://source.unsplash.com/random/300x300?vrheadset", category: "Featured" },
    { id: 24, title: "Wireless Router", price: 79.99, image: "https://source.unsplash.com/random/300x300?router", category: "New Arrivals" },

  ];

  const [filterData, setFilterData] = useState([])
  const [tabs, setTabs] = useState("Featured")


  useEffect(() => {
    let newData = products.filter((v) => v.category == tabs)
    setFilterData(newData)
  }, [tabs])




  return (
    <>
      <div className="max-w-[1440px] mx-auto  border-2 p-[50px] ">


        <div class=" w-[60%] mx-auto   flex justify-center rounded-md shadow-xs" role="group">
          <button type="button" onClick={() => setTabs("Featured")} class={`px-4 py-2 text-sm font-medium text-gray-900 ${tabs=="Featured" ? "border-2 border-[red]" : ""} `}>
            Featured
          </button>
          <button type="button" onClick={() => setTabs("New Arrivals")} class={`px-4 py-2 text-sm font-medium text-gray-900 ${tabs=="New Arrivals" ? "border-2 border-[red]" : ""}  `}>
            New Arrivals
          </button>
          <button type="button" onClick={() => setTabs("Onsale")} class={`px-4 py-2 text-sm font-medium text-gray-900 ${tabs=="Onsale" ? "border-2 border-[red]" : ""} `}>
            Onsale
          </button>
        </div>


        <div className="grid xl:grid-cols-4 grid-cols-2  gap-[20px] mt-[50px] ">

          {filterData.map((v) => {
            return (
              <>
                <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={v.image} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {v.category}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            )
          })}




        </div>

      </div>
    </>
  );
}
