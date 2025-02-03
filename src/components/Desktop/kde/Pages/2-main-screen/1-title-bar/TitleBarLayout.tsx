import React, { useEffect } from "react";
export interface ITitleBarLayout {
  pkgId: string;
  //   children?: React.ReactNode;
}
const TitleBarLayout: React.FC<ITitleBarLayout> = ({ pkgId }) => {
  useEffect(() => {}, [pkgId]);
  return (
    <div
      className={`flex h-full w-full bg-amber-400 absolute *:motion-duration-[0.35s] *:motion-ease-spring-smooth`}
    >
      {pkgId}
    </div>
  );
};

export default TitleBarLayout;
