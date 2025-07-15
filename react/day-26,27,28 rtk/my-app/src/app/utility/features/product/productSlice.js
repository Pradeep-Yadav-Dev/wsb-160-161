import { viewProductThunk } from "./productThunk";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    product: [],
    loading: false,
    error: null,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(viewProductThunk.fulfilled, (state, action) => {
                state.product.push(action.payload)
                state.error = null
                state.loading = false
            })

            .addCase(viewProductThunk.pending, (state, action) => {
                state.error = null
                state.loading = true
            })

            .addCase(viewProductThunk.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})


// export const {  } = productSlice.actions

export default productSlice.reducer