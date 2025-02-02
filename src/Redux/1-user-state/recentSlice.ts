import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for a recent item
export interface RecentPkg {
    pkgId: string;
    appName: string;
    appIcon: string;
}

// Define the initial state type
type RecentsState = RecentPkg[];

// Load initial state from sessionStorage
const storedRecents = sessionStorage.getItem("recents");
const initialState: RecentsState = storedRecents ? JSON.parse(storedRecents) : [];

const recentsSlice = createSlice({
    name: "recents",
    initialState,
    reducers: {
        addRecent: (state, action: PayloadAction<RecentPkg>) => {
            const checkDuplicate = state.find((pkg) => pkg.pkgId === action.payload.pkgId);

            if (!checkDuplicate) {
                state.push(action.payload);
                // Save the updated state to sessionStorage
                sessionStorage.setItem("recents", JSON.stringify(state));
            }
        },
        clearRecents: () => {
            sessionStorage.removeItem("recents");
            return [];
        }
    }
});

export const { addRecent, clearRecents } = recentsSlice.actions;
export default recentsSlice.reducer;
