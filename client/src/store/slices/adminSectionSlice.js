import { createSlice } from "@reduxjs/toolkit";

const adminSectionSlice = createSlice({
    name: "adminSectionSlice",
    initialState: {
        menu: "addCultures"
    },

    reducers: {
        updateMenu(state, action){
            state.menu = action.payload
        }
    }
})

export default adminSectionSlice.reducer;
export const {updateMenu} = adminSectionSlice.actions;