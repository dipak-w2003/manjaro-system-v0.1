import { configureStore } from '@reduxjs/toolkit';

// Create the Redux store
// ? user logging related slices
import activeUserSlice from './1-user-state/activeUserSlice';
import isLoggedSlice from './1-user-state/isLoggedSlice';
import recentSlice from './1-user-state/recentSlice';
const store = configureStore({
    reducer: {
        activeUser: activeUserSlice,
        isLoggedSlice: isLoggedSlice,
        recents: recentSlice
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
