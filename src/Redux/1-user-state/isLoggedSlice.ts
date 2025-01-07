// Redux slice
import { createSlice } from '@reduxjs/toolkit';

const isLoggedSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogged: false,
    },
    reducers: {
        setLogin: (state) => {
            state.isLogged = true;
        },
        setLogout: (state) => {
            state.isLogged = false;
        },
    },
});

export const { setLogin, setLogout } = isLoggedSlice.actions;
export default isLoggedSlice.reducer;

// ! Note : this state management used for changing navigation router so the reason contextApi is not used for unnecessary re-rendering which might cause problems to routes