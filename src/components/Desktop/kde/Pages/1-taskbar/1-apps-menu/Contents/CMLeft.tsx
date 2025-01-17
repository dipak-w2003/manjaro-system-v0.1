import { CheckTriangle } from "@/components/Desktop/Themes/SVG/reusableSVGs";
import React, { useEffect, useState } from "react";
import { AppLists, IAppMenu } from "../AppMenuList";

interface SelectType {
  //  same as below but over complex
  // setSelected: React.Dispatch<React.SetStateAction<IAppMenu | null>>;
  // check down Comment

  // ? param type and logic with its types
  selectedOption: IAppMenu;
  setSelected: (value: IAppMenu | null) => void;
}
const CMLeft: React.FC<SelectType> = ({ setSelected, selectedOption }) => {
  const handleSelection = (appOption: IAppMenu) => {
    setSelected({
      ...appOption,
      isSelected: true,
    });
  };

  return (
    <div className={` w-[40%]  relative flex flex-col`}>
      {AppLists.map((e, _) => {
        return (
          <span
            onMouseEnter={() => handleSelection(e)}
            key={e.appName}
            className="h-[70px] overflow-hidden flex w-full  relative items-center hover:border-[#4d9a91d5] border-transparent bg-[] p-3 border-[1.5px] rounded"
          >
            <img
              className="ct-pointer -left-10 text-sm absolute"
              src={e.appIcon}
            />
            <h3 className="text-sm w-fit ml-9">{e.appName}</h3>

            {e.appName === selectedOption.appName ? (
              <CheckTriangle
                className="absolute right-[1px]"
                height="6px"
                width="10px"
                fill="white"
              />
            ) : (
              <CheckTriangle
                className="absolute right-[1px]"
                height="5px"
                width="10px"
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default CMLeft;

// ?
// setSelected: React.Dispatch<React.SetStateAction<IAppMenu | null>>;
// * setSelected -> a state updateer function designed to update the state of a value that can either be of IAppMenu or null
// * React.Dispatch<React.SetStateAction<IAppMenu | null >>
//   ------------> ensures the function works like the one returned by React's useState meaning:
//  ----------------> 1) It can directly accept a new state (IAppMenu | null)
//  ----------------> 2) Or it can accept a function that calculates the new state based on the current state
