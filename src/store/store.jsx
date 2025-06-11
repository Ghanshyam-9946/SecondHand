import { configureStore } from "@reduxjs/toolkit";
import shoedata from './reducers/shoedata'
import cartdata from './reducers/cartdata'
import ShoeBanner from "./reducers/shoeBannerData"


export const store = configureStore({
    reducer: {
        shoe: shoedata,
        cart : cartdata,
        banner: ShoeBanner
    }
})