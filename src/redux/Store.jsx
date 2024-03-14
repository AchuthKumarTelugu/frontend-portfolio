import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

const store=configureStore({
    reducer:{
        //add yours reducers here
        root:rootSlice.reducer
    }
})
export default store