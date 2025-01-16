import React, { useState } from "react";
import { SiKdeplasma } from "react-icons/si";
import AppMenuContents from "./Contents/AppMenuContents";

const AppMenu = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className="relative flex items-center  ">
      <button
        title="App Menu "
        className="py-1 px-3 text-sm relative z-10 ct-pointer "
        onClick={() => setToggle(!toggle)}
      >
        <SiKdeplasma />
      </button>
      {toggle && <AppMenuContents setToggle={() => setToggle(false)} />}
    </div>
  );
};

export default AppMenu;
