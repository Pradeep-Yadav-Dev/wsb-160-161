import axios from "axios";
import React, { useEffect, useState } from "react";

import { ChromePicker } from "react-color";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function AddColor() {
  const [color, setColor] = useState("#000000");


  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  
  let submitForm = (e) => {
    e.preventDefault()

    let formData=new FormData(e.target)
    formData.append("colorCode",color)
    
    

    axios.post(`${import.meta.env.VITE_API_URL}/color/add`, formData)
      .then((ress) => {
        toast.success(ress.data.message)
      })
      .catch((error) => {
        toast.error(error.response.data.message)
      })

  }

  //  colorCode 

  

  return (
    <div className="w-full">
      <div className="max-w-[1220px] mx-auto py-5">
        <h3 className="text-[20px] font-semibold bg-slate-100 py-2 px-3 rounded-t-md border border-slate-400">
          Add Colors
        </h3>
     <ToastContainer />
        <form
          className="p-3 border border-t-0 rounded-b-md border-slate-400"
          onSubmit={submitForm}
        >
          {/* Color Name */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">Color Name</label>
            <input
              type="text"
              name="colorName"
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
              placeholder="Enter Color Name"
            />
           
          </div>

          {/* Color Picker */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">Color Picker</label>
            <div className="flex items-center gap-3">
              <ChromePicker color={color} onChange={handleColorChange} />
              <div className="w-10 h-10 border border-gray-400 rounded-md" style={{ backgroundColor: color }}></div>
            </div>
          </div>

          {/* Color Order */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">Order</label>
            <input
              type="number"
              name="order"
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
              placeholder="Enter Order"
            />
            
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
          Add Color
          </button>
        </form>
      </div>
    </div>
  );
}
