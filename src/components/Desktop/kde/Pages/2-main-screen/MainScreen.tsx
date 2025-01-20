import React from "react";
import { IStyleClassProps } from "../../KdeApp";

const MainScreen: React.FC<IStyleClassProps> = ({ styles }) => {
  return (
    // ? background image added from index css as id
    <div id="main-screen" className={`${styles}`}>
      MainScreen
    </div>
  );
};

export default MainScreen;
