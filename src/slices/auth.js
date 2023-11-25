import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isAuth: false,
        user: {
            email:'',
            password:'',
            name: '',
        }
    },
    reducers: {
        loginSuccess: (state) => {
            state.isAuth = true;
        },
        logoutSuccess: (state, action) => {
            state.isAuth = false;
        },
    }
})

export const { loginSuccess, logoutSuccess } = actions;
export default reducer;