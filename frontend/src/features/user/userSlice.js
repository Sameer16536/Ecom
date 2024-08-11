import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState ={
    user:null,
    status:'idle',
    error:null
}

export const registerUser = createAsyncThunk('user/registerUser',async(userData)=>{
    try{
        const response = await axios.post('http://localhost:3000/register',userData)
        return response.data
    }
    catch(error){
        return error.message
    }
})

export const loginUser = createAsyncThunk('user/loginUser',async(credentials)=>{
    try{
        const response = await axios.post('http://localhost:3000/login',credentials)
        return response.data
    }
    catch(error){
        return error.message
    }
})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.user = action.payload
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.user = action.payload
        })
    }
})

export default userSlice.reducer