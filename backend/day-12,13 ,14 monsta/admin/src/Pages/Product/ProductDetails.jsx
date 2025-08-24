import React, { useEffect, useState } from 'react'
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {

  useEffect(() => {
    $(".dropify").dropify({
      messages: {
        default: "Drag and drop ",
        replace: "Drag and drop ",
        remove: "Remove",
        error: "Oops, something went wrong"
      }
    });
  }, []);

  const [value, setValue] = useState('');

  // get color
  const [colorStore,setColorStore]=useState([])

  useEffect(()=>{
     axios.get(`${import.meta.env.VITE_API_URL}/product/active-color`)
     .then((ress)=>{
      setColorStore(ress.data.data)
     })

  },[])

  // get /active-material
  const [materialStore,setMaterialStore]=useState([])
  useEffect(()=>{
     axios.get(`${import.meta.env.VITE_API_URL}/product/active-material`)
     .then((ress)=>{
      setMaterialStore(ress.data.data)
     })

  },[])


  // get /active-parent-category
  const [parentCategoryStore,setParentCategoryStore]=useState([])
  useEffect(()=>{
     axios.get(`${import.meta.env.VITE_API_URL}/product/active-parent-category`)
     .then((ress)=>{
      setParentCategoryStore(ress.data.data)
     })

  },[])

  // get /active-sub-category/:_id
  const [parentCategoryId,setparentCategoryId]=useState("")

  const [subCategoryStore,setSubCategoryStore]=useState([])

  
  useEffect(()=>{
     axios.get(`${import.meta.env.VITE_API_URL}/product/active-sub-category/${parentCategoryId}`)
     .then((ress)=>{
      setSubCategoryStore(ress.data.data)
     })

  },[parentCategoryId])

  // active-sub-sub-category/:_id
  const [subCategoryId,setSubCategoryId]=useState("")
  const [subSubCategoryStore,setSubSubCategoryStore]=useState([])

  useEffect(()=>{
     axios.get(`${import.meta.env.VITE_API_URL}/product/active-sub-sub-category/${subCategoryId}`)
     .then((ress)=>{
      setSubSubCategoryStore(ress.data.data)
     })

  },[subCategoryId])

  //////////////////////////////////////////////////////////////////////// saveForm
  const saveForm=(e)=>{
    e.preventDefault();
    let formData=new FormData(e.target)
    formData.append("description",value)

    axios.post(`${import.meta.env.VITE_API_URL}/product/add`, formData )
    .then((response) => {
      alert(response.data.message)
    })
    .catch((error) => {
      // Handle error
    });
  }

  return (
    <section className="w-full">

      <nav className="flex border-b-2" aria-label="Breadcrumb">
        <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center ">
            <Link to={"/home"} className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link to={"/product/view"} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Product</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2">Add</span>
            </div>
          </li>
        </ol>
      </nav>



      <div className='w-full px-6 py-6  '>

        <form  onSubmit={saveForm} >
          <div className="grid grid-cols-3 gap-[10px] ">
            {/* for left */}
            <div className="for-images ">

              <div className="">
                <label
                  htmlFor="ProductImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  id="ProductImage"
                  className="dropify"
                  data-height="160"
                  name='productImage'
                  
                />
               


              </div>

              <div className="">
                <label
                  htmlFor="backImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Back Image
                </label>
                <input
                  type="file"
                  id="backImage"
                  className="dropify"
                  data-height="160"
                  name='backImage'
                 
                />
                
              </div>

              <div className="">
                <label
                  htmlFor="GalleryImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Gallery Image
                </label>
                <input
                  type="file"
                  id="GalleryImage"
                  className="dropify"
                  data-height="160"
                  name='galleryImage'
                  multiple
                  
                />
                
              </div>
            </div>

            {/* for midd */}
            <div className="middle">

              <div className="mb-5">
                <label
                  htmlFor="Prodct_Name"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Prodct Name
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Prodct Name'
                  name='productName'
                 
                />
              
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Category
                </label>
                <select
                  name='subCategory'
                  onChange={(e)=>setSubCategoryId(e.target.value)}
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Select Category</option>
                  {subCategoryStore.map((v)=>(<option key={v._id} value={v._id}>{v.subCategoryName}</option>))}

                </select>
                

              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Meterial
                </label>
                <select
                  name='material'
                  className="text-[19px] text-[black] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  {materialStore.map((material) => (
                    <option key={material._id} value={material._id}>
                      {material.materialName}
                    </option>
                  ))}
                 

                </select>
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Prodcut Type
                </label>
                <select
                 name='productType'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="featured">Featured</option>
                  <option value="new arrivals">New Arrivals</option>
                  <option value="onsale">Onsale</option>

        
                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Top Rated
                </label>
                <select
                 name='topRated'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>

                </select>
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Actual Price
                </label>
                <input
                  type="text"
            name='actualPrice'
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Actual Price'
                />
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Total In Stocks
                </label>
                <input
                  type="text"
                  name='stocked'
             
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Total In Stocks'
                />
   
              </div>



            </div>

            {/* for right */}
            <div className="right-items">
              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Parent Category
                </label>
                <select
                  name='parentCategory'
                  onChange={(e)=>setparentCategoryId(e.target.value)}
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  {parentCategoryStore.map((v)=>(<option key={v._id} value={v._id}>{v.categoryName}</option>))}

                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Sub Category
                </label>
                <select
                name='subSubCategory'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  {subSubCategoryStore.map((v)=>(<option key={v._id} value={v._id}>{v.subSubCategoryName}</option>))}
                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Color
                </label>
                <select
                 name='color'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  {colorStore?.map((v)=>(
                    <>
                     <option value={v._id}> {v.colorName} </option>
                    </>
                  ))}

                 
                 

                </select>
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Best Selling
                </label>
                <select
                 name='bestSelling'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>

                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Upsell
                </label>
                <select
                 name='upSell'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>

                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Sale Price
                </label>
                <input
                name='salePrice'
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder=' Sale Price'
                 
                />
               
              </div>


              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Order
                </label>
                <input
                name='order'
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Order'
                 
                />
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Slug
                </label>
                <input
                  type="text"
                  name='slug'
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='slug'
                 
                />
               
              </div>


            </div>
          </div>

          <div className='py-[40px]'>
            <label
              htmlFor="categoryImage"
              className="block  text-md font-medium text-gray-900 text-[#76838f]"
            >
              Description
            </label>
            <ReactQuill theme="snow" value={value} onChange={setValue} name="description" className='h-[200px]' />
            

          </div>
        

          <button className=" mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">
            Add Product
             </button>

        </form>

      </div>
    </section>
  )
}



// const mongoose = require("mongoose")

//
// 
//     
//     : {
//         type: Number,
//         required: [true, "please fill the sale price"],
//         min:[0 , "sale price must be positive"]
//     },
//     : {
//         type: Number,
//         required: [true, "please fill the stocked quantity"],
//         min:[0 , "stocked quantity must be positive"]
//     },
//     : {
//         type: Number,
//         required: [true, "please fill the order "]
//     },
//     :{
//         type: String,
//         required: [true, "please fill the slug"]
//     },
//     : {
//         type: String,
//         required: [true, "please fill the description"]
//     },
//     status: {
//         type: Boolean,
//         default: true
//     }

// })

