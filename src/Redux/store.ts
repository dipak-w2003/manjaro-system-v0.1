import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

// Create the Redux store
import activeUserSlice from './1-user-state/activeUserSlice';
const store = configureStore({
    reducer: {
        // Add reducers here
        counter: counterReducer,
        activeUser: activeUserSlice
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
