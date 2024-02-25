import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import adminSectionSlice from "./slices/adminSectionSlice"

const store = configureStore({
    reducer: {
        userState : userSlice,
        adminState : adminSectionSlice
    }
})

export default store