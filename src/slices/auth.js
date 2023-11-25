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
        loginSuccess: (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
        },
        logoutSuccess: state => {
            state.isAuth = false;
            state.user = null;
        }
    }
})

export const { loginSuccess, logoutSuccess } = actions;
export default reducer;