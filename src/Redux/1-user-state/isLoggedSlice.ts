// Redux slice



import { getIsLogged, setIsLogged, setLogout as setLoggedOut } from '@/constants/sessionStorage';
import { createSlice } from '@reduxjs/toolkit';
const isLoggedSlice = createSlice({
    name: 'auth',
    initialState: {
        // ! Note : session storage boolean value is added for constant loggedIn unless the setLogout -> reducer called helps to prevent from refresh
        isLogged: getIsLogged(),
    },
    reducers: {
        setLogin: (state) => {
            setIsLogged()
            state.isLogged = true;
        },
        setLogout: (state) => {
            setLoggedOut()
            state.isLogged = false;
        },
    },
});

export const { setLogin, setLogout } = isLoggedSlice.actions;
export default isLoggedSlice.reducer;

// ! Note : this state management used for changing navigation router so the reason contextApi is not used for unnecessary re-rendering which might cause problems to routes