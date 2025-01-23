import React, { useCallback, useMemo } from "react";
import { CheckTriangle } from "@/components/Desktop/Themes/SVG/reusableSVGs";
import { AppLists, IAppMenu } from "../AppMenuList";

interface SelectType {
  selectedOption: IAppMenu;
  setSelected: (value: IAppMenu | null) => void;
}

const CMLeft: React.FC<SelectType> = ({ setSelected, selectedOption }) => {
  // Optimized handleSelection
  const handleSelection = useCallback(
    (appOption: IAppMenu) => {
      setSelected({ ...appOption, isSelected: true });
    },
    [setSelected]
  );

  // Memoized app list to avoid re-rendering
  const appListItems = useMemo(
    () =>
      AppLists.map((app) => {
        const isSelected = app.appName === selectedOption.appName;
        return (
          <span
            onMouseEnter={() => handleSelection(app)}
            key={app.appName}
            className={`h-[70px] overflow-hidden flex w-full relative items-center border-[1.5px] p-3 rounded 
              ${isSelected ? "border-[#4d9a91d5]" : "border-transparent"}
              hover:border-[#4d9a91d5]`}
          >
            <img
              className="ct-pointer -left-10 text-sm absolute"
              src={app.appIcon}
              alt={`${app.appName} icon`}
            />
            <h3 className="text-sm w-fit ml-9">{app.appName}</h3>
            <CheckTriangle
              className="absolute right-[1px]"
              height={isSelected ? "6px" : "5px"}
              width="10px"
              fill={isSelected ? "white" : "none"}
            />
          </span>
        );
      }),
    [AppLists, handleSelection, selectedOption.appName]
  );

  return <div className="w-[40%] relative flex flex-col">{appListItems}</div>;
};

export default CMLeft;
