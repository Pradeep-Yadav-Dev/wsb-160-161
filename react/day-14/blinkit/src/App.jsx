import './App.css'
import Header from './Commoncomponets/Header'
import Footer from './Commoncomponets/Footer'
import React from 'react'
import Buymenu from './Buymenu'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      {/* Home Page */}
      <div className="container mx-auto">
        <div className="banners mx-auto w-[90%]  ">
          <div className="row1">
            <img src="src\assets\Group-33704.jpg" alt="" />
          </div>

          <div className="row2 flex w-[25%] ms-[15px] ">
            <img src="src\assets\pharmacy-WEB.jpg" alt="" className='m-[5px]' />
            <img src="src\assets\Pet-Care_WEB.jpg" alt="" className='m-[5px]' />
            <img src="src\assets\babycare-WEB.jpg" alt="" className='m-[5px]' />
          </div>
        </div>

        <div className="foodmenu container mx-auto ">
          <div className="row1 flex ms-[90px] ">
            <img src="src\assets\Slice-16.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-11.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-14.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-17.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-18.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-19.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-20.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-5_4.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-7_3.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-9_3.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />

          </div>

          <div className="row2 flex ms-[90px] ">
            <img src="src\assets\Slice-19.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-20.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
             <Link to={"/buymenu"}  ><img src="src\assets\Slice-5_4.png" alt="" className=' w-[60%]  mx-auto' /></Link>
            
          
            <img src="src\assets\Slice-14.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-17.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-18.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-9_3.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-7_3.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            <img src="src\assets\Slice-12.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' />
            {/* <img src="src\assets\Slice-11.png" alt="" className='w-[9%] ms-[3px] mt-[5px]' /> */}


          </div>
        </div>

        <div className="dairybread mb-[50px] mt-[20px]">

          <div className="Dairy container mx-auto w-[90%] ms-[100px]">
            <h1 className="text-2xl font-bold mb-4">Dairy, Bread & Eggs</h1>

            <div className="flex overflow-x-auto scroll-smooth whitespace-nowrap gap-4 px-2 pb-4 scrollbar-hide">
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src/assets/5ee4441d-9109-48fa-9343-f5ce82b905a6.avif" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Taaza Toned Milk</h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Taaza Toned Milk</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\170a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Cheese</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Dahi</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\57f39bfe-1aaf-471b-a752-8e81aa446e28.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Buttermilk</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src/assets/5ee4441d-9109-48fa-9343-f5ce82b905a6.avif" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Taaza Toned Milk</h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Taaza Toned Milk</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\170a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Cheese</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Dahi</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\dairy\57f39bfe-1aaf-471b-a752-8e81aa446e28.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Amul Buttermilk</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              {/* Add more menu1 cards manually here */}
            </div>
          </div>


        </div>

        <div className="rollingpaper mt-[20px]">

          <div className="Dairy container mx-auto w-[90%] ms-[100px]">
            <h1 className="text-2xl font-bold mb-4 mt-[20px]">RollingPaper and Tobaco</h1>

            <div className="flex overflow-x-auto scroll-smooth whitespace-nowrap gap-4 px-2 pb-4 scrollbar-hide">
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\478728a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Ultimate Rolling Paper  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\661d1bd8-2374-47ad-b231-af4842bd5d50.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Perfect Rolled Cones </h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\496994a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Stash Pro</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\978597cf-0fa1-4434-851d-c32e1d29b264.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Super Slims</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\cb6a3d84-dbe2-4fc3-b59e-56e3114c9456.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Dollar prerolling papers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\478728a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Ultimate Rolling Paper  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\661d1bd8-2374-47ad-b231-af4842bd5d50.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Perfect Rolled Cones </h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\496994a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Stash Pro</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\978597cf-0fa1-4434-851d-c32e1d29b264.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Super Slims</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\cb6a3d84-dbe2-4fc3-b59e-56e3114c9456.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Dollar prerolling papers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              {/* Add more menu1 cards manually here */}
            </div>
          </div>


        </div>

        <div className="snacks mt-[20px]">

          <div className="Dairy container mx-auto w-[90%] ms-[100px]">
            <h1 className="text-2xl font-bold mb-4 mt-[20px]">Snacks & Munchies</h1>

            <div className="flex overflow-x-auto scroll-smooth whitespace-nowrap gap-4 px-2 pb-4 scrollbar-hide">
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\eadd1b3c-b986-4276-976d-27cdfe3e558c.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">JACKPOT Fire  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\f32c4aae-b080-47a0-9fa2-8a3c5c6044dd.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Cheetos</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\4385033f-d856-4275-96f9-0533aba35a38.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Jackers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\59c5467f-2d57-44f8-be39-61c293c530d4.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Baked Bhujiya</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

                  <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\eadd1b3c-b986-4276-976d-27cdfe3e558c.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">JACKPOT Fire  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\f32c4aae-b080-47a0-9fa2-8a3c5c6044dd.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Cheetos</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

               <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\4385033f-d856-4275-96f9-0533aba35a38.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Jackers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
               <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\59c5467f-2d57-44f8-be39-61c293c530d4.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Baked Bhujiya</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              {/* Add more menu1 cards manually here */}
            </div>
          </div>


        </div>

         <div className="Hookah mt-[20px]">

          <div className="Dairy container mx-auto w-[90%] ms-[100px]">
            <h1 className="text-2xl font-bold mb-4 mt-[20px]">RollingPaper and Tobaco</h1>

            <div className="flex overflow-x-auto scroll-smooth whitespace-nowrap gap-4 px-2 pb-4 scrollbar-hide">
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\478728a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Ultimate Rolling Paper  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\661d1bd8-2374-47ad-b231-af4842bd5d50.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Perfect Rolled Cones </h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\496994a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Stash Pro</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\978597cf-0fa1-4434-851d-c32e1d29b264.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Super Slims</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\cb6a3d84-dbe2-4fc3-b59e-56e3114c9456.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Dollar prerolling papers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\478728a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Ultimate Rolling Paper  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\661d1bd8-2374-47ad-b231-af4842bd5d50.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Perfect Rolled Cones </h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\496994a.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Stash Pro</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\978597cf-0fa1-4434-851d-c32e1d29b264.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Super Slims</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Rollingpaper\cb6a3d84-dbe2-4fc3-b59e-56e3114c9456.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Dollar prerolling papers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              {/* Add more menu1 cards manually here */}
            </div>
          </div>


        </div>

        <div className="snacks mt-[20px] mb-[50px]">

          <div className="Dairy container mx-auto w-[90%] ms-[100px]">
            <h1 className="text-2xl font-bold mb-4 mt-[20px]">Snacks & Munchies</h1>

            <div className="flex overflow-x-auto scroll-smooth whitespace-nowrap gap-4 px-2 pb-4 scrollbar-hide">
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\eadd1b3c-b986-4276-976d-27cdfe3e558c.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">JACKPOT Fire  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\f32c4aae-b080-47a0-9fa2-8a3c5c6044dd.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Cheetos</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\4385033f-d856-4275-96f9-0533aba35a38.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Jackers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\59c5467f-2d57-44f8-be39-61c293c530d4.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Baked Bhujiya</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

                  <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\eadd1b3c-b986-4276-976d-27cdfe3e558c.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">JACKPOT Fire  </h5>
                  <p className="mb-3 text-sm text-gray-700">500ml</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

              <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\f32c4aae-b080-47a0-9fa2-8a3c5c6044dd.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Cheetos</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>

               <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\4385033f-d856-4275-96f9-0533aba35a38.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Jackers</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
               <div className="menu1 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                  <img className="rounded-t-lg w-full h-[150px] object-cover" src="src\assets\Snacks\59c5467f-2d57-44f8-be39-61c293c530d4.jpg" alt="" />
                </a>
                <div className="p-3">
                  <h5 className="mb-2 text-lg font-semibold text-black">Baked Bhujiya</h5>
                  <p className="mb-3 text-sm text-gray-700">400g</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition">
                    Add
                  </button>
                </div>
              </div>
              {/* Add more menu1 cards manually here */}
            </div>
          </div>


        </div>



      </div>
      {/* Home Page Ends */}



      <Footer/>
    </>
  )
}

export default App
