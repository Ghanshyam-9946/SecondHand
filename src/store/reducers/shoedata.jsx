import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data : [
    {id:1, price: 20, para: "GLUXUR|", image: "./shoe1.png" },
    {id:2, price: 30, para: " RUNNER SHOE", image: "./shoe2.png" },
    {id:3, price: 50, para: "GLUXURY|", image: "./shoe3.png" },
    {id:4, price: 70, para: "AIR-ROLL-STROLL", image: "./shoe4.png" },
    {id:5, price: 80, para: "BASIC RUN-WAVE", image: "./shoe5.png" },
    {id:6, price: 100, para: "Gluxury|", image: "./shoe6.png" },
    {id:7, price: 80, para: "POWERLIF-M",image: "./shoe7.png" },
    {id:8, price: 100, para: "BASIC RUN-WAVE", image: "./shoe8.png" },
    ]
}

const shoedata = createSlice({
    name: 'shoe',
    initialState,
    reducers: {
        setShoe: (state, action) =>{
            state.data = action.payload
        }
    }
})

export const {setShoe} =shoedata.actions
export default shoedata.reducer  