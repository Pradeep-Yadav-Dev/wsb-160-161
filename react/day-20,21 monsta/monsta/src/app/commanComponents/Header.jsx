import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <  >
            {/* row -1 */}
            <div className="border py-[10px] bg-[#ccc]  ">
                <div className=" max-w-[1440px] mx-auto  flex justify-between items-center ">
                    <p>Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com</p>
                    <Link href={"/login-register"} > <p>Login / Register</p> </Link>
                </div>
            </div>

            {/* row-2 */}
            <div className="border py-[10px]">
                <div className=" max-w-[1440px] mx-auto  flex justify-between items-center ">
                    <div className=""> <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" /> </div>
                    <div className="">right side</div>
                </div>
            </div>
            <div className=""></div>
        </>
    )
}
