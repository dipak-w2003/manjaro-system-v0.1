import React from "react";
import { IStyleClassProps } from "../../KdeApp";
import AppMenu from "./1-apps-menu/AppMenu";
const TaskbarApp: React.FC<IStyleClassProps> = ({ styles }) => {
  return (
    <div
      className={` ${styles} ct-pointer *:h-full *:w-1/2 w-full   flex *:flex items-center *:items-center relative z-50 *:z-50`}
    >
      {/* s1 : App Menu & Apps Recent */}
      <section>
        <AppMenu />
      </section>

      {/* s2 : Power Sections */}
      <section></section>
    </div>
  );
};

export default TaskbarApp;
