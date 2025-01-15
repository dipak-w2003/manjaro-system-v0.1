import Toggling from "@/constants/Toggling";
import React, { useState } from "react";
import { SiKdeplasma } from "react-icons/si";

const AppMenu = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="relative flex px-2 items-center  ">
      <button
        title="App Menu"
        className="p-1 text-sm relative z-10"
        onClick={() => setToggle(!toggle)}
      >
        <SiKdeplasma />
      </button>
      {toggle && <AppsDropMenu />}
    </div>
  );
};

export default AppMenu;

function AppsDropMenu() {
  return (
    <div className="bg-white h-[450px] p-2  w-[500px] absolute left-0 text-red-600 bottom-[3.6vh] rounded-tr-sm motion-preset-confetti overflow-y-scroll">
      {/* ? App List & Categories and power options */}
    </div>
  );
}
