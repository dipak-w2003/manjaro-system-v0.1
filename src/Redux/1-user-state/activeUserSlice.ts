import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Constant array with objects
import { sysUser as UserArr } from "@/components/Pages/2-login/usersAccount";

// Initial state
const initialState = {
    // Default user is the first one from UserArr
    user: [UserArr[0]],
};

const activeUserSlice = createSlice({
    name: "activeUser",
    initialState,
    reducers: {
        setUserById: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const foundUser = UserArr.find((item) => item.id === id);
            if (foundUser) {
                state.user[0] = foundUser
            }
        },

        removeUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUserById, removeUser } = activeUserSlice.actions;
export default activeUserSlice.reducer;
