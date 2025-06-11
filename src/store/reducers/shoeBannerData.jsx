import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    {
      para: "LeBron 19 (Basketball Shoes)",
      image: "./main.png",
    },
  ],
};

const shoeBannerData = createSlice({
  name: "shoeBanner",
  initialState,
    reducers : {
        load : (state, action) => {
            state.data = action.payload;
        }
    }

});

export const {load} = shoeBannerData.actions;
export default shoeBannerData.reducer;