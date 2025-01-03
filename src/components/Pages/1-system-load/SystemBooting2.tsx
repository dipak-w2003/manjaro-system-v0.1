import { sysLoad } from "./systemBootings";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import videoF from "./loading.mp4";
import { useIsBootedContext } from "@/context/1-isBooted/isBootedContext";
type ISysLoad = {
  id: number;
  isSuccess: boolean;
  comment: string;
};
const SystemLogInfo1 = () => {
  const [sys, setSys] = useState<ISysLoad[]>(sysLoad);
  const [sysIndex, setSysIndex] = useState<number>(0);
  const { setIsBoot, isBoot } = useIsBootedContext();

  useEffect(() => {
    // Stop incrementing at the last index
    if (sysIndex >= sys.length - 1) {
      setIsBoot();
      return;
    }
    const timer = setTimeout(() => {
      // Increment or stay at last index
      setSysIndex((prev) => Math.min(prev + 1, sys.length - 1));
    }, 133);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [sysIndex, sys.length]);

  return (
    <div className="bg-black h-full w-full  max-h[100vh]  flex items-center justify-center overflow-hidden relative">
      <span className=" relative p-2 left-[40px] max-w-[700px] w-[580px] z-50 rounded-md bg-[#1963603e] ">
        <div
          className={`  h-full w-[200px] rounded flex items-center absolute left-[0] bottom-[.5px] `}
        >
          <h2 className="text-xl px-2 text-cyan-300 font-bold mt-1 text-left">
            {sysIndex + 1}%
          </h2>
        </div>
        <h2 className="text-2xl text-cyan-300 font-bold text-left relative left-16 z-50  min-w-[full]  ">
          {sys[sysIndex].comment}
        </h2>

        {/* ? video */}
        <video
          className={`
            w-full h-full left-0 rounded-lg object-cover absolute opacity-35 top-0
         `}
          autoPlay={true}
          loop
          muted
          src={videoF} // Replace with your video URL
          controls={false} // Custom controls instead of browser defaults
        />
      </span>
    </div>
  );
};

export default SystemLogInfo1;
