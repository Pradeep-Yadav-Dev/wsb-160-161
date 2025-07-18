const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
}
export const counterSlice=createSlice({
    name:"counter",
    initialState,

    reducers:{
        increment:(state)=>{
          state.value+=1
          // sum=sum+1
          // sum++
          //sum+=1
        },
        decrement:(state)=>{
          if(state.value>1){
            state.value-=1
          }
          
        }
    }
})


export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer