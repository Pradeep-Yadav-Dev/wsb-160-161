import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const viewProductThunk = createAsyncThunk(
    "product/view",
    async () => {
        try {
            let response = await axios.get("https://dummyjson.com/products")

            console.log("pp", response.data.products)
            return response.data.products
        }
        catch (error) {

            return error.message
        }
    }
)