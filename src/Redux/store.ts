import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

// Create the Redux store
const store = configureStore({
    reducer: {
        counter: counterReducer, // Add reducers here
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
