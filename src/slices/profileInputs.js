import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        name: {
            value: '',
            disabled: true
        },
        email: {
            value: '',
            disabled: true
        },
        password: {
            value: '',
            disabled: true
        },
    },
    reducers: {
        setName: (state, action) => {
            state.name.value = action.payload;
        },
        toggleNameDisabled: state => {
            state.name.disabled = !state.name.disabled;
        },
        setEmail: (state, action) => {
            state.email.value = action.payload;
        },
        toggleEmailDisabled: state => {
            state.email.disabled = !state.email.disabled;
        },
        setPassword: (state, action) => {
            state.password.value = action.payload;
        },
        togglePasswordDisabled: state => {
            state.password.disabled = !state.password.disabled;
        }
    }
})

export const { setName, toggleNameDisabled, setEmail, toggleEmailDisabled, setPassword, togglePasswordDisabled } = actions;
export default reducer;