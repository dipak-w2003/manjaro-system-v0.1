import React from "react";
import { RecentPkg } from "@/Redux/1-user-state/recentSlice";

interface VSCodeProps {
  app: RecentPkg;
}

const VSCode: React.FC<VSCodeProps> = ({ app }) => {
  return (
    <div className={`vscode-container   `}>
      <img src={app.appIcon} className={`h-1/2`} alt="" />
      <h2>{app.appName}</h2>
    </div>
  );
};

export default VSCode;
