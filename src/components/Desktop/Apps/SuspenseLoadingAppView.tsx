import { RecentPkg } from "@/Redux/1-user-state/recentSlice";
import React from "react";
interface SuspenseLoadingAppViewProps {
  app: RecentPkg;
}
const SuspenseLoadingAppView: React.FC<SuspenseLoadingAppViewProps> = ({
  app,
}) => {
  return (
    <section className="h-full w-full bg-gray-900 flex flex-col justify-center items-center transition-all gap-6">
      <img
        src={app.appIcon}
        className="h-1/2 object-contain animate-pulse "
        alt={app.appName}
      />
      <h2 className="text-3xl">{app.appName}</h2>
    </section>
  );
};

export default SuspenseLoadingAppView;
