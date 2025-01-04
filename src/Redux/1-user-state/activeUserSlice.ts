import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsers, Users as User } from "@/components/Pages/2-login/usersAccount";

interface ActiveUserState {
    user: User[];
}

const initialState: ActiveUserState = {
    user: [],
};

const activeUserSlice = createSlice({
    name: "activeUser",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.user.push(action.payload);
        },
        clearUser: (state) => {
            state.user = [];
        },
    },
});

export const { addUser, clearUser } = activeUserSlice.actions;

export default activeUserSlice.reducer;

// updateUser: (state, action: PayloadAction<User>) => {
//     const index = state.user.findIndex((user) => user.id === action.payload.id);
//     if (index !== -1) {
//         state.user[index] = action.payload;
//     }
// },

// removeUser: (state, action: PayloadAction<string>) => {
//     state.user = state.user.filter((user) => user.id !== action.payload);
// },