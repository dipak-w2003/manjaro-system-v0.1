import { sysLoad, ISysLoad } from "./systemBootings";
import React, { useEffect, useState } from "react";
// ? context
import { useIsBootedContext } from "@/context/1-isBooted/isBootedContext";
// ? session
import { getIsBooted, setIsBooted } from "@/constants/sessionStorage";
import videoF from "./loading.mp4";
const SystemLogInfo1 = () => {
  const [sys, _] = useState<ISysLoad[]>(sysLoad);
  const [sysIndex, setSysIndex] = useState<number>(0);
  const { setIsBoot } = useIsBootedContext();

  useEffect(() => {
    // Stop incrementing at the last index
    if (sysIndex >= sys.length - 1) {
      setIsBooted();
      setIsBoot();
      return;
    }
    const timer = setTimeout(() => {
      // Increment or stay at last index
      setSysIndex((prev) => Math.min(prev + 1, sys.length - 1));
    }, 133);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, [sysIndex, sys.length]);

  return (
    <div className="bg-black h-full w-full  max-h[100vh]  flex items-center justify-center overflow-hidden relative">
      <span className=" relative p-2 left-[40px] max-w-[700px] w-[580px] z-50 rounded-md bg-[#1963603e] ">
        <div
          className={`  h-full w-[200px] rounded flex items-center absolute left-[0] bottom-[.5px] `}
        >
          <h2 className="text-xl px-2 text-cyan-300 font-bold mt-1 text-left">
            {sysIndex}%
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
          // Replace with your video URL
          src={videoF}
          // Custom controls instead of browser defaults
          controls={false}
        />
      </span>
    </div>
  );
};

export default SystemLogInfo1;
