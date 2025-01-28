import React from "react";
import { AppCategory } from "../AppMenuList";

interface IAppCategory {
  appCategory: AppCategory;
}
const CMRight: React.FC<IAppCategory> = ({ appCategory }) => {
  return (
    <div className={`w-[60%] flex justify-center items-center`}>
      <h2 className="text-3xl">{appCategory}</h2>
    </div>
  );
};

export default CMRight;
