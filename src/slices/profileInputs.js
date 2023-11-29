import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        nameInputDisabled: true,
        emailInputDisabled: true,
        passwordInputDisabled: true
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
        }
    }
})

export const { toggleNameDisabled, toggleEmailDisabled, togglePasswordDisabled } = actions;
export default reducer;