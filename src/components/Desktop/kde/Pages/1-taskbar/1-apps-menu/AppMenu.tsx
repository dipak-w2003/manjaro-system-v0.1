import React, { lazy, Suspense } from "react";
import { SiKdeplasma } from "react-icons/si";
import AppMenuContents from "./Contents/AppMenuContents";
const AppMenu = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  return (
    <div className=" flex items-center">
      <button
        title="App Menu "
        className="py-1 px-2 text-sm relative z-10 ct-pointer "
        onClick={() => setToggle(!toggle)}
      >
        <SiKdeplasma />
      </button>
      {toggle && (
        <AppMenuContents toggle={toggle} setToggle={() => setToggle(false)} />
      )}
    </div>
  );
};

export default AppMenu;
