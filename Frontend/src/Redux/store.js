import { configureStore } from "@reduxjs/toolkit";
import darkMode  from './slices/darkModeSlice'

const store = configureStore({
    reducer:{
        theme:darkMode
    }
})

export default store