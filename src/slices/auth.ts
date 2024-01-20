import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAuth = {
    isAuth: boolean,
    user: TAuthUser,
    expireInAccToken: string | number
}

type TAuthUser = {
    email: string,
    name: string,
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState:  <TAuth>{
        isAuth: false,
        user: {
            email:'',
            name: '',
        },
        expireInAccToken: ''
    },
    reducers: {
        loginSuccess: (state, action: PayloadAction<TAuth>) => {
            state.isAuth = true;
            state.user = action.payload.user;
        },
        logoutSuccess: state => {
            state.isAuth = false;
            state.user.email = '';
            state.user.name = '';
        },
        expireAccessToken: state => {
            const now = new Date();
            state.expireInAccToken = now.setMinutes(now.getMinutes() + 20);
        },
        setUser: (state, action: PayloadAction<TAuth>) => {
            state.user = action.payload.user;
        }
    }
})

export const { loginSuccess, logoutSuccess, expireAccessToken, setUser } = actions;
export default reducer;