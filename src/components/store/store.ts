import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../slices/index';
import { feedWSStart, feedWSStop, setFeed, setFeedSocketStatus } from "../../slices/feed";
import { ordersWSStart, ordersWSStop, setOrders, setOrdersSocketStatus } from "../../slices/profile-orders";
import { socketMiddleware } from "../../utils/socketMiddleware";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(
        socketMiddleware({
          onStart: feedWSStart,
          onStop: feedWSStop,
          onOpen: setFeedSocketStatus,
          onMessage: setFeed,
          onClose: setFeedSocketStatus,
          onError: setFeedSocketStatus,
        }),
        socketMiddleware({
          onStart: ordersWSStart,
          onStop: ordersWSStop,
          onOpen: setOrdersSocketStatus,
          onMessage: setOrders,
          onClose: setOrdersSocketStatus,
          onError: setOrdersSocketStatus,
        }),
      ),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;