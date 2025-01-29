import React, { Suspense } from "react";
import { AppCategory, AppLists } from "../AppMenuList";
import { AiOutlineReload } from "react-icons/ai";

interface IAppCategory {
  appCategory: AppCategory;
}
const CMRight: React.FC<IAppCategory> = ({ appCategory }) => {
  const apps_listByCategory = React.useMemo(
    () => AppLists.find((e) => e.appCategory === appCategory),
    [appCategory],
    // Recalculate only when appCategory changes
  );
  console.log(apps_listByCategory.childrens);
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
