import React from "react";
import { AppCategory, AppLists } from "../AppMenuList";
import { AppDispatch } from "@/Redux/store";
import { useDispatch } from "react-redux";
import {
  addRecent,
  RecentPkg,
  toggleRecent,
} from "@/Redux/1-user-state/recentSlice";

interface IAppCategory {
  appCategory: AppCategory;
}

const CMRight: React.FC<IAppCategory> = ({ appCategory }): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  // Find the app category details
  const apps_listByCategory = React.useMemo(
    () => AppLists.find((e) => e.appCategory === appCategory),
    [appCategory],
  );

  function AppCategoryLists() {
    async function handleAddRecent(app: RecentPkg) {
      dispatch(addRecent(app));
      dispatch(toggleRecent(app));
    }

    if (
      !apps_listByCategory?.childrens ||
      !Array.isArray(apps_listByCategory.childrens)
    )
      return null;

    return apps_listByCategory.childrens.map((app) => (
      <span
        onClick={() => handleAddRecent(app)}
        title={app.desc}
        key={app.pkgId}
        className="flex cursor-pointer h-[6vh] w-[28vw] justify-start gap-2 items-center ml-3"
      >
        <img
          src={app.appIcon}
          alt={app.appName}
          className="object-fill inline-block w-5 h-5"
        />
        <h4 className="hidden lg:inline xl:inline text-left w-[10vw] bg-none">
          {app.appName}
        </h4>
        <h6 className="hidden lg:inline xl:inline text-[.8vw] bg-none lg:flex-1">
          {app.desc}
        </h6>
      </span>
    ));
  }

  return (
    <div className="w-[60%] flex flex-col justify-start items-center relative">
      {apps_listByCategory?.childrens?.length > 0 ? (
        <AppCategoryLists />
      ) : (
        "Nothing here"
      )}
    </div>
  );
};

export default CMRight;
