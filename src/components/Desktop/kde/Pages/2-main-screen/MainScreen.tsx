import React from "react";
import { IStyleProps } from "../../KdeApp";

const MainScreen: React.FC<IStyleProps> = ({ styles }) => {
  return <div className={`${styles} bg-red-700 `}>MainScreen</div>;
};

export default MainScreen;
