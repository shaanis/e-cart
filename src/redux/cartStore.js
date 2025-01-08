import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slices/productSlice'
const cartStore = configureStore({
    reducer:{
       productReducer:productSlice
    }
})
export default cartStore