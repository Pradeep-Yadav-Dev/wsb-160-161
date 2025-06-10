import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to={"/"} > <li> Home </li> </Link>
                        <Link to={"/about"} > <li> About </li> </Link>
                        <li> Gallery </li>
                        <li> Contact </li>
                        
                    </ul>
                </nav>
            </header>
        </>
    )
}
