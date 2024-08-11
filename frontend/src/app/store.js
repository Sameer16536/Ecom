//Redux setup here
import {configureStore} from '@reduxjs/toolkit'



export const store = configureStore({
    reducer: {
        //Change the null
        user:null,
        product:null
    }
})