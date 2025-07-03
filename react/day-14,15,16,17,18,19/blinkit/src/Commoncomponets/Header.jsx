import React, { useContext, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { BlinkitContext } from '../context/WebsiteContext';
import Cookies from "js-cookie"

export default function Header() {
    let { cart } = useContext(BlinkitContext)
    const module = () => {
        alert("Login Form")
    }


    let myToken = Cookies.get('blinkit-token')
    let routes = useNavigate()


    useEffect(() => {

        if (!myToken) {
            routes("/login")
        }

    }, [])


    let logutPage = () => {
        Cookies.remove('blinkit-token')
        routes("/login")
    }

    return (
        <div className='sticky top-0 z-50'>
            <header className='bg-[white] w-[100%] flex '>

                <div className="logo max-w-[10%]  py-[30px] px-[20px] ">
                    <Link to={"/"} >  <img src="src\assets\blinkitlogo.svg" alt="" /> </Link>
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

                    <div className="login  w-[50%] text-center py-[25px] px-[30px] text-[18px] cursor-pointer" >
                        {myToken ?
                            <span onClick={logutPage} > Logout </span>
                            :
                            <Link to={"/login"} ><span> Login </span></Link>
                        }
                    </div>


                    <div className="cart  w-[80%]  py-[15px]  px-[20px]  ">
                        <Link to={"/cart"}>
                            <div className="card  flex items-center bg-[#E5E5E5] py-[10px] ps-[20px]  rounded px-[5px]">
                                <IoCartSharp />   My Cart <sup className=' text-[red] font-bold text-[18px] '> {cart.length} </sup>
                            </div>
                        </Link>
                    </div>

                </div>



            </header>
        </div>
    )
}
