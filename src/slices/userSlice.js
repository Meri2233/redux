import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userInfo",
    initialState: {
        user: {
            name:"GeorgeOwell",email:"georgeowell22@gmail.com",location:"USA"
        }
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload
        },
        logout:(state,action)=>{
            console.log("Logout")
        }
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer