import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import XfceMain from "./xfce/XfceMain";
import KdeMain from "./kde/KdeMain";
import GnomeMain from "./gnome/GnomeMain";
import { DesktopEnv } from "../Pages/2-login/usersAccount";
import "./Themes/CSS/CursorTheme.css";
// Add all valid environments based on your union type

const DesktopMain: React.FC = () => {
  const validEnvs = ["xfce", "kde", "gnome"] as const;
  const { desktopEnv } = useParams<{ desktopEnv: string }>();

  // not includes same with both party
  if (!desktopEnv || !validEnvs.includes(desktopEnv as DesktopEnv)) {
    return <p>Invalid Desktop Environment</p>;
  }
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("u");

  if (!desktopEnv || !userId) {
    return <p>Invalid Desktop Environment or Missing User ID</p>;
  }

  switch (desktopEnv) {
    case "xfce":
      return <XfceMain />;
    case "kde":
      return <KdeMain />;
    case "gnome":
      return <GnomeMain />;
    default:
      return <p>Desktop Environment Not Supported</p>;
  }
};

export default DesktopMain;
