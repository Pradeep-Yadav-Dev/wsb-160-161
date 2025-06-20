import React, { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [allMovieData, setAllMovieData] = useState([])

  // display Data
  let displayData = () => {
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
      .then(((ress) => {

        setAllMovieData(ress.data.results)
      }))
      .catch((error) => {
        console.log(error.response.data.status_message)
      })
  }


  console.log(allMovieData)

  useEffect(() => {
    displayData()
  }, [])

  return (
    <>

      <div className="max-w-[1400px] mx-auto   mt-[50px] ">
        <h1 className='text-[22px] font-bold ' > Movie App </h1>
        <input type="text" placeholder='enter movie name' className='w-[80%] p-[10px] bg-[white] m-[5px] ' />

        <div className='grid grid-cols-4 gap-[10px] mt-[20px]' >

          {allMovieData.length > 0
            ?
            allMovieData.map((v, i) => {
              return (
                <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w1280${v.poster_path}`} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {v.original_title} </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {v.overview}
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      {v.release_date}
                      
                    </a>
                  </div>
                </div>
              )
            })
            :
            "please wait......"
          }




        </div>
      </div>

    </>
  )
}

export default App
