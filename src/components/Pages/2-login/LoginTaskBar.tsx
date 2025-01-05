import React, { useState } from "react";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
const LoginTaskBar = () => {
  const currentUser = useSelector(
    (state: RootState) => state.activeUser.user[0].sysUname
  );

  return (
    <div className="*:h-full h-full w-full *:w-[45%] flex justify-between items-center overflow-hidden *:px-2 *:text-[#c7c7c7]">
      <h2 className="text-sm">{currentUser}-system</h2>
      <section className="bg-cyan-900"></section>
    </div>
  );
};

export default LoginTaskBar;
