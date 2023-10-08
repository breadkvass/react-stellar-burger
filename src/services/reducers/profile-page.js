import {
    PROFILE_NAME_SET,
    PROFILE_NAME_TOGGLE_DISABLED,
    PROFILE_EMAIL_SET,
    PROFILE_EMAIL_TOGGLE_DISABLED,
    PROFILE_PASSWORD_SET,
    PROFILE_PASSWORD_TOGGLE_DISABLED,
} from '../actions/profile-page';

const initialState = {
    name: {
        value: 'Анастасия',
        disabled: true
    },
    email: {
        value: 'breadkvass@gmail.com',
        disabled: true
    },
    password: {
        value: 'password',
        disabled: true
    },
};

export const profileInputsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_NAME_SET: {
            return {
                ...state,
                name: {
                    ...state.name,
                    value: action.value
                }
            };
        }
        case PROFILE_NAME_TOGGLE_DISABLED: {
            return {
                ...state,
                name: {
                    ...state.name,
                    disabled: !state.name.disabled
                }
            };
        }
        case PROFILE_EMAIL_SET: {
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.value
                }
            };
        }
        case PROFILE_EMAIL_TOGGLE_DISABLED: {
            return {
                ...state,
                email: {
                    ...state.email,
                    disabled: !state.email.disabled
                }
            };
        }
        case PROFILE_PASSWORD_SET: {
            return {
                ...state,
                password: {
                    ...state.password,
                    value: action.value
                }
            };
        }
        case PROFILE_PASSWORD_TOGGLE_DISABLED: {
            return {
                ...state,
                password: {
                    ...state.password,
                    disabled: !state.password.disabled
                }
            };
        }
        default: {
            return state;
        }
    }
};

