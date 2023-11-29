import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isAuth: false,
        user: {
            email:'',
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
        },
        setName: (state, action) => {
            state.user.name = action.payload;
        },
        setEmail: (state, action) => {
            state.user.email = action.payload;
        }
    }
})

export const { loginSuccess, logoutSuccess, setName, setEmail, setPassword } = actions;
export default reducer;