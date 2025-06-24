import React, { useEffect, useState } from 'react'

import './App.css'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import axios from 'axios'
import Header from './Header';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [allMovieData, setAllMovieData] = useState([])

  console.log(allMovieData.length)

  const [inputValue, setInputValue] = useState("")
  // paginations work
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;


  let API;
  // display Data

  let displayData = () => {
    if (inputValue == "") {
      API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${currentPage}`
    }
    else {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${inputValue}`
    }

    axios.get(API)
      .then(((ress) => {
        setAllMovieData(ress.data.results)
      }))
      .catch((error) => {
        console.log(error.response.data.status_message)
      })
  }

  useEffect(() => {
    displayData()
  }, [inputValue, currentPage])

  return (
    <>
      <Header movieLength={allMovieData.length} />
      <div className="max-w-[1400px] mx-auto   mt-[50px] ">
        <h1 className='text-[22px] font-bold ' > Movie App </h1>

        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='enter movie name' className='w-[80%] p-[10px] bg-[white] m-[5px] ' />

        <div className='grid grid-cols-4 gap-[10px] mt-[20px]' >

          {allMovieData.length > 0
            ?
            allMovieData.map((v, i) => {
              return (
                <Card v={v} index={i} key={i} />
              )
            })
            :
            "please wait......"
          }





        </div>

        <div className="py-[10px]">
          <ResponsivePagination

            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <Sliders />

    </>
  )
}

export default App


let Card = ({ v, index }) => {


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
}



let Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: false
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
 
};
return (
  <div className='py-[50px]' >
    <h1> This Is A React Slider </h1>

    <Slider {...settings}>
      <div>
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png" alt="" />
      </div>
      <div>
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png" alt="" />
      </div>
      <div>
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/OJvOUlQW_415a6f82c0ff4c38a3b650c734d3b52e.png" alt="" />
      </div>
      <div>
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png" alt="" />
      </div>
      <div>
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/OJvOUlQW_415a6f82c0ff4c38a3b650c734d3b52e.png" alt="" />
      </div>
      <div>
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png" alt="" />
      </div>
    </Slider>


  </div>
)
}