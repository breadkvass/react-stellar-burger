import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isAuth: false,
        user: {
            email:'',
            name: '',
        },
        accessToken: ''
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
        },
        logoutSuccess: state => {
            state.isAuth = false;
            state.user.email = '';
            state.user.name = '';
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setName: (state, action) => {
            state.user.name = action.payload;
        },
        setEmail: (state, action) => {
            state.user.email = action.payload;
        }
    }
})

export const { loginSuccess, logoutSuccess, setAccessToken, setName, setEmail } = actions;
export default reducer;