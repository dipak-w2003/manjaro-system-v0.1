import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for a recent item
export interface RecentPkg {
  pkgId: string;
  appName: string;
  appIcon: string;
  isFocused: boolean;
  desc?: string;
}

// Define the initial state type
type RecentsState = RecentPkg[];

// Load initial state from sessionStorage
const storedRecents = sessionStorage.getItem("recents");
const initialState: RecentsState = storedRecents
  ? JSON.parse(storedRecents)
  : [];

const recentsSlice = createSlice({
  name: "recents",
  initialState,
  reducers: {
    addRecent: (state, action: PayloadAction<RecentPkg>) => {
      const checkDuplicate = state.find(
        (pkg) =>
          pkg.pkgId === action.payload.pkgId &&
          pkg.appName === action.payload.appName,
      );

      if (!checkDuplicate) {
        state.push(action.payload);
        // Save the updated state to sessionStorage
        sessionStorage.setItem("recents", JSON.stringify(state));
      }
    },

    removeRecent: (state, action: PayloadAction<string>) => {
      const findIndex = state.findIndex((app) => app.pkgId === action.payload);
      state.splice(findIndex, 1);
      
      
      // ? adding a feature where a isfocused app is closed we will automatically set isFocused to last elem of state so we 
      // can view "MainScreen.tsx => components(APP)" 
      if(state.length>0 && state.every(pkg=>pkg.isFocused==false)) 
        state[state.length-1] = {...state[state.length-1],isFocused:true};
     
      sessionStorage.setItem("recents", JSON.stringify(state));
    },

    toggleRecent: (state, action: PayloadAction<RecentPkg>) => {
      const findPkg = state.find((app) => app.pkgId === action.payload.pkgId);

      if (findPkg) {
        // Find index of the app to focus
        const pkgIndex = state.findIndex(
          (app) => app.pkgId === action.payload.pkgId,
        );

        // First, reset isFocused to false for all items
        state.forEach((app) => {
          app.isFocused = false;
        });

        
        // Now, update the found app's isFocused to true
        const focused = { ...findPkg, isFocused: true };
        state.splice(pkgIndex, 1, focused);


        // Save the updated state to sessionStorage
        sessionStorage.setItem("recents", JSON.stringify(state));
      }else {
        // If the package is not found, just return the state as it is
        sessionStorage.setItem("recents", JSON.stringify(state));
        return state;
      }
    },


    clearRecents: () => {
      sessionStorage.removeItem("recents");
      return [];
    },
  },
});

export const { addRecent, clearRecents, removeRecent, toggleRecent } =
  recentsSlice.actions;
export default recentsSlice.reducer;

// ? Prototype : Recent Taskbar and Show functionality
// This functionality is being mostly in every smart computers like mobile, laptop, else where we open an app anc we open other
// app without closing previous one so the previous one and the current one apps are being stored in some array / storage in order to access previous not closed apps
// ! Note : For now we will allow only one time open for every apps/components
