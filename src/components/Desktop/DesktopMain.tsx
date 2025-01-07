import React from "react";

// ? desktops
import XfceMain from "./xfce/XfceMain";
import GnomeMain from "./gnome/GnomeMain";
import KdeMain from "./kde/KdeMain";
// ? Routes
import { Route, Routes } from "react-router-dom";

// ? Redux
import { AppDispatch } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { setLogout } from "@/Redux/1-user-state/isLoggedSlice";
import { DelayLog } from "../Utils/Buttons/delayLog";
// ? Accept a user after logging
const DesktopMain = (): JSX.Element => {
  function Button() {
    const dispatch: AppDispatch = useDispatch();
    return (
      <button
        className="bg-cyan-800 text-xl px-3 py-2"
        onClick={() => DelayLog(dispatch, setLogout)}
      >
        Logout
      </button>
    );
  }
  const dispatch: AppDispatch = useDispatch();
  return (
    <Routes>
      <Route path="/" index element={<Button />} />
      <Route path="/desktop/xfce" index element={<XfceMain />} />
      <Route path="/desktop/kde" index element={<KdeMain />} />
      <Route path="/desktop/gnome" index element={<GnomeMain />} />
    </Routes>
  );
};

export default DesktopMain;
