import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        nameInputDisabled: true,
        emailInputDisabled: true,
        passwordInputDisabled: true,
        userUpd: {
            nameUpd: '',
            emailUpd: ''
        }
    },
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
    }
})

export const { toggleNameDisabled, toggleEmailDisabled, togglePasswordDisabled, setInputsDisabled, setNameUpd, setEmailUpd } = actions;
export default reducer;