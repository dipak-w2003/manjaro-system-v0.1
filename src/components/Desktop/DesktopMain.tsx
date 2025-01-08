import React from "react";

// ? Desktops
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

// ? DesktopMain Component
const DesktopMain = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  // Logout Button Component
  const LogoutButton = () => (
    <button
      className="bg-cyan-800 text-xl px-3 py-2"
      onClick={() => DelayLog(dispatch, setLogout)}
    >
      Logout
    </button>
  );

  return <LogoutButton />;
};

export default DesktopMain;
