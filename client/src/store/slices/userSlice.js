import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {},

    reducers: {
        addUserData(state, action){
            state.data = action.payload
        },
        removeUserData(state, action){
            state.data = {}
        }
    }
})

export default userSlice.reducer;
export const {addUserData, removeUserData} = userSlice.actions;