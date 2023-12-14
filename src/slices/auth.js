import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isAuth: false,
        user: {
            email:'',
            name: '',
        },
        accessToken: '',
        expireInAccToken: ''
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuth = true;
            state.user = action.payload.user;
        },
        logoutSuccess: state => {
            state.isAuth = false;
            state.user.email = '';
            state.user.name = '';
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
            const now = new Date();
            state.expireInAccToken = now.setMinutes(now.getMinutes() + 20);
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        }
    }
})

export const { loginSuccess, logoutSuccess, setAccessToken, setUser } = actions;
export default reducer;