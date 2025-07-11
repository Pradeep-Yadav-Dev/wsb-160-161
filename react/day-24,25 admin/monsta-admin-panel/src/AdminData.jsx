import React from "react";
import { FaEyeDropper } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

 export let AdminData=[
    {
        id:1,
        moduleName:"Color",
        moduleIcon:<FaDroplet />,
        subModule:[
            {
                name:"Add Color",
                routes:"/dashboard/color/add"
            },
            {
                name:"View Color",
                routes:"/dashboard/color/view"
            },

        ]
    },
     {
        id:1,
        moduleName:"Parent Category",
        moduleIcon:<FaEyeDropper  />,
        subModule:[
            {
                name:"Add  Category",
                routes:"/dashboard/category/add"
            },
            {
                name:"View  Category",
                routes:"/dashboard/category/view"
            },

        ]
    }
]