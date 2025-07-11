import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { AdminData } from '../AdminData';
import { Link } from 'react-router-dom';

export default function Faq() {


    console.log(AdminData)

    const [faqState, setFaqState] = useState(1)

    let handelFaq = (myId) => {

        if (myId == faqState) {
            setFaqState(null)
        }
        else {
            setFaqState(myId)
        }


    }
    return (
        <div className="allFaq mt-[20px] ">


            {AdminData?.map((v, i) => {
                return (
                    <div className="row bg-[white] my-[5px] ">
                        <h1 className='text-[22px] font-bold flex items-center gap-[10px] ' > <span> {v.moduleIcon} </span> <span> {v.moduleName} </span>  </h1>
                        <ul className=''>
                            {v.subModule?.map((p,k)=>{
                                 return(
                                    <Link to={p.routes} > <li> {p.name} </li> </Link>
                                 )
                            })}

                           
                            
                        </ul>
                    </div>
                )
            })}



        </div>
    )
}
