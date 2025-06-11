import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data : []
}

const cartdata = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.data.push(action.payload)
        },
        removeFromCart: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    }
})
export const { addToCart , removeFromCart} = cartdata.actions; 
export default cartdata.reducer