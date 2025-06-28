import React, { useContext, useEffect, useState } from 'react'
import Header from './Commoncomponets/Header'
import { BlinkitContext } from './context/WebsiteContext'

export default function Cart() {


    let { cart, setCart ,total,setTotal} = useContext(BlinkitContext)


    let sum=0;
    useEffect(()=>{
        cart.forEach((v)=>{
            sum+=(v.quantity)*(v.price)
        })

       setTotal(sum)
    },[cart])

    return (
        <div>


            <Header />
            <div class="container mx-auto mt-10">
                <div class="grid grid-cols-[70%_auto] shadow-md my-10">

                    <div className="">
                        <div class="flex justify-between border-b pb-8">
                            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 class="font-semibold text-2xl">3 Items</h2>
                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {cart.length == 0
                            ?
                            "No item Added in Cart"
                            :
                            (cart.length > 0)
                                ?
                                cart.map((item, index) => {
                                    return (
                                        <CartItem item={item} />
                                    )
                                })
                                :
                                "Please Wait......."
                        }

                    </div>





                    <div id="summary" class=" px-8 py-10">
                        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        
                        <div className="flex justify-between py-5">
                            <span> Total Amout  </span> : <span> {(total).toFixed(2)} </span>
                        </div>

                        <div className="flex justify-between py-5 ">
                            <span> GST  </span> : <span> 18%  </span>
                        </div>


                        <div class="border-t mt-8">
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$ {(((total)*18/100)+(total)).toFixed(2)} </span>
                            </div>
                            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



let CartItem = ({ item }) => {
    let { cart, setCart } = useContext(BlinkitContext)

    let [counter, setCounter] = useState(item.quantity || 1)

    useEffect(() => {
        let newData = cart.filter((v, i) => {
            if (v.id == item.id) {
                return v.quantity = counter
            }

            return v
        })
        setCart(newData)


    }, [counter])

///////////////////////////////////////////////////
    //  let ws = {
    //   name:"praddep",
    //   quantity: 1

    // }

    // ws.quantity=10

    // console.log(ws)

    return (
        <div class=" bg-white px-10 py-10">

            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                    <div class="w-20">
                        <img class="h-24" src={item.image} alt="" />
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                        <span class="font-bold text-sm"> {item.title} </span>
                        <span class="text-red-500 text-xs"> {item.brand} </span>
                        <span class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove  ID:- {item.id} </span>
                    </div>
                </div>
                <div class="flex justify-center w-1/5"> 
               
                    <button onClick={() => counter>1 ? setCounter(counter - 1) : "" } class=" border w-[50px] " > -
                    </button>

                    <input class="mx-2 border text-center font-bold w-8" type="text" cl value={counter} />

                    <button onClick={() => setCounter(counter + 1)} class=" border w-[50px] " > +
                    </button>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">$ {item.price} </span>
                <span class="text-center w-1/5 font-semibold text-sm">$ {((item.price)*(item.quantity)).toFixed(2)} </span>
            </div>


        </div>
    )
}