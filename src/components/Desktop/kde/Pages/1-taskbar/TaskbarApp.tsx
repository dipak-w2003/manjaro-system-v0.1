import React from "react";
import { IStyleProps } from "../../KdeApp";
import AppMenu from "./1-AppsMenu/AppMenu";
const TaskbarApp: React.FC<IStyleProps> = ({ styles }) => {
  return (
    <div
      className={` ${styles} ct-pointer *:h-full *:w-1/2 w-full   flex *:flex items-center *:items-center `}
    >
      {/* s1 : App Menu & Apps Recent */}
      <section className="bg-yellow-500 motion-preset-fade">
        <AppMenu />
      </section>

      {/* s2 : Power Sections */}
      <section className="bg-cyan-900"></section>
    </div>
  );
};

export default TaskbarApp;
