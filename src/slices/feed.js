import { createSlice } from "@reduxjs/toolkit";

export const feedWSStart = 'FEED_WS_CONNECTION_START';
export const feedWSStop = 'FEED_WS_CONNECTION_STOP';

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        success: false,
        orders: [],
        total: '',
        totalToday: '',
        socketStatus: '',
    },
    reducers: {
        setFeed: (state, action) => {
            state.success = action.payload.success;
            state.orders = action.payload.orders;
            state.total = action.payload.total;
            state.totalToday = action.payload.totalToday;
        },
        setFeedSocketStatus: (state, action) => {
            state.socketConnectionStatus = action.payload;
        },
    },
});

export const { setFeed, setFeedSocketStatus } = actions;
export default reducer;