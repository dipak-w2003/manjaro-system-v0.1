import React, { ReactNode, useEffect } from "react";
import ManjaroLoading1 from "./ManjaroLoading1";
import SystemBooting2 from "./SystemBooting2";
import { ProjectCopyDisclaimer } from "../ProjectCopyDisclaimer";

const SystemLoadMain: React.FC = () => {
  const enrollTSXui: ReactNode[] = [
    <ProjectCopyDisclaimer key="disclaimer" />,
    <BlinkBlack key="blink" />,
    <ManjaroLoading1 key="manjaro" />,
    <BlinkBlack key="blink" />,
    <SystemBooting2 key="system" />,
  ];
  const [queueNode, setQueueNode] = React.useState<number>(0);
  useEffect(() => {
    // Stop incrementing at the last index
    if (queueNode >= enrollTSXui.length - 1) return;
    const timer = setTimeout(() => {
      // Increment or stay at last index
      setQueueNode((prev) => Math.min(prev + 1, enrollTSXui.length - 1));
    }, 3000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, [queueNode, enrollTSXui.length]);

  return (
    <div className="text-white bg-black h-[100vh] w-full *:cursor-none fira-sans">
      {enrollTSXui[queueNode]}
    </div>
  );
};

// BlinkBlack Component
function BlinkBlack() {
  return <div className=" motion-bg-in-black  h-full "></div>;
}

export default SystemLoadMain;
