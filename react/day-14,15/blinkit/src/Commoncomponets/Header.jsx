import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";

export default function Header() {

    const module = ()=>{
        alert("Login Form")
    }

    return (
        <div className='sticky top-0 z-50'>
            <header className='bg-[white] w-[100%] flex '>

                <div className="logo max-w-[10%]  py-[30px] px-[20px] ">
                    <img src="src\assets\blinkitlogo.svg" alt="" />
                </div>

                <div className="delivry  py-[10px] px-[20px] w-[20%] ">
                    <h1 className='h1'>Delivery in 8 minutes</h1>
                    <p>Ratanada, Jodhpur, Rajasthan, India</p>
                </div>

                <div className="searchbar w-[50%]   py-[10px]  ">
                    <form action="">

                        <input type="text" placeholder=' 🔎 Search' />
                    </form>
                </div>

                <div className="usercard flex w-[20%]">
                    <div className="login  w-[50%] text-center py-[25px] px-[30px] text-[18px] cursor-pointer" onClick={module}>
                        Login
                    </div>
                    <div className="cart  w-[50%]  py-[15px]  px-[20px]  ">
                        <div className="card  flex items-center bg-[#E5E5E5] py-[10px] ps-[20px]  rounded px-[5px]">
                            <IoCartSharp />   My Cart
                        </div>
                    </div>

                </div>



            </header>
        </div>
    )
}
