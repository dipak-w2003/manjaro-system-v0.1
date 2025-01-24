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

// Key Points:

//     1. Valid Desktop Environments:
//         The code defines valid environments as xfce, kde, and gnome.

//     2. Getting Parameters:
//         desktopEnv: Comes from the URL path (e.g., /xfce or /kde).
//         userId: Comes from the query parameter in the URL (e.g., ?u=123).

//     3. Validation:
//         If desktopEnv is missing or not in the list of valid environments, it shows:
//         "Invalid Desktop Environment".
//         If userId is missing, it shows:
//         "Invalid Desktop Environment or Missing User ID".

//     4. Switch Statement:
//         Depending on the value of desktopEnv, it renders one of the following components:
//             XfceMain for xfce.
//             KdeMain for kde.
//             GnomeMain for gnome.
//         If none of these match, it shows:
//         "Desktop Environment Not Supported".

//     5. Default Behavior:
//         If anything goes wrong or the parameters are invalid, error messages are displayed to the user.
