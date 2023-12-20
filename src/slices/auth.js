import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isAuth: false,
        user: {
            email:'',
            name: '',
        },
        // accessToken: '',
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
        expireAccessToken:  state => {
            const now = new Date();
            state.expireInAccToken = now.setMinutes(now.getMinutes() + 20);
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        }
    }
})

export const { loginSuccess, logoutSuccess, expireAccessToken, setUser } = actions;
export default reducer;