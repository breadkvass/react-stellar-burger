import { createSlice } from "@reduxjs/toolkit";

type TUserUpd = {
    nameUpd: string;
    emailUpd: string;
}

type TProfileInputs = {
    nameInputDisabled: boolean;
    emailInputDisabled: boolean;
    passwordInputDisabled: boolean;
    userUpd: TUserUpd;
    resetPassword: boolean;
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        nameInputDisabled: true,
        emailInputDisabled: true,
        passwordInputDisabled: true,
        userUpd: {
            nameUpd: '',
            emailUpd: ''
        },
        resetPassword: false,
    } as TProfileInputs,
    reducers: {
        toggleNameDisabled: state => {
            state.nameInputDisabled = !state.nameInputDisabled;
        },
        toggleEmailDisabled: state => {
            state.emailInputDisabled = !state.emailInputDisabled;
        },
        togglePasswordDisabled: state => {
            state.passwordInputDisabled = !state.passwordInputDisabled;
        },
        setInputsDisabled: state => {
            state.nameInputDisabled = true;
            state.emailInputDisabled = true;
            state.passwordInputDisabled = true;
        },
        setNameUpd: (state, action) => {
            state.userUpd.nameUpd = action.payload;
        },
        setEmailUpd: (state, action) => {
            state.userUpd.emailUpd = action.payload;
        },
        setResetPassword: state => {
            state.resetPassword = true;
        },
        cancelResetPassword: state => {
            state.resetPassword = false;
        },
    }
})

export const { toggleNameDisabled, toggleEmailDisabled, togglePasswordDisabled, setInputsDisabled, setNameUpd, setEmailUpd, setResetPassword, cancelResetPassword } = actions;
export default reducer;