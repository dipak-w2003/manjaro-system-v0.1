import { CheckTriangle } from "@/components/Desktop/Themes/SVG/reusableSVGs";
import React from "react";
import { AppLists, IAppMenu } from "../AppMenuList";
import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
const CMLeft: React.FC<IStyleClassProps> = (props) => {
  console.log(AppLists[0].appIcon);

  return (
    <div className={`${props.styles} relative flex flex-col  `}>
      {AppLists.map((e, _) => {
        return (
          <span
            key={e.appName}
            className="h-[70px] overflow-hidden flex w-full  relative items-center hover:border-[#4d9a91d5] border-transparent bg-[] p-3 border-[3px]"
          >
            <img
              className="ct-pointer -left-10 text-sm absolute"
              src={e.appIcon}
            />
            <h3 className="text-sm w-fit ml-9">{e.appName}</h3>

            {!e.isSelected ? (
              <CheckTriangle
                className="absolute right-[1px]"
                height="6px"
                width="10px"
              />
            ) : (
              <CheckTriangle
                className="absolute right-[1px]"
                height="5px"
                width="10px"
                fill="white"
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default CMLeft;
