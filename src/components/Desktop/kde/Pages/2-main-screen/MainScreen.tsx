import React, { Suspense } from "react";
import { IStyleClassProps } from "../../KdeApp";

const MainScreen: React.FC<IStyleClassProps> = ({ styles }) => {
  return (
    // ? background image added from index css as id
    <Suspense fallback={<div className="motion-preset-confetti "></div>}>
      <div id="main-screen" className={`${styles}`}>
        MainScreen
      </div>
    </Suspense>
  );
};

export default MainScreen;
