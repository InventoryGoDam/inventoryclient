import { configureStore } from "@reduxjs/toolkit"
import mycounterReducer from "../redux/slices/counterSlice"
const store=configureStore({
    reducer:{
        counterx:mycounterReducer
    }
})

export default store;