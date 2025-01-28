import React, { Suspense } from "react";
import { AppCategory } from "../AppMenuList";
import { AiOutlineReload } from "react-icons/ai";

interface IAppCategory {
  appCategory: AppCategory;
}
const CMRight: React.FC<IAppCategory> = ({ appCategory }) => {
  return (
    <div className={`w-[60%] flex justify-center items-center`}>
      <Suspense
        fallback={
          <AiOutlineReload className="animate-spin absolute top-1/2 left-1/2" />
        }
      >
        <h2 className="text-3xl">{appCategory}</h2>
      </Suspense>
    </div>
  );
};

export default CMRight;
