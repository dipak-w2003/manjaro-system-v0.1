import React, { Suspense, useEffect } from "react";
import { AppCategory, AppLists } from "../AppMenuList";
import { AiOutlineReload } from "react-icons/ai";
import { Action } from "@reduxjs/toolkit";
import { AppDispatch } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AppCategoryList } from "../AppCategoryList";
import { addRecent } from "@/Redux/1-user-state/recentSlice";

interface IAppCategory {
  appCategory: AppCategory;
}

const CMRight: React.FC<IAppCategory> = ({ appCategory }): JSX.Element => {
  // Find the app category details
  const apps_listByCategory = React.useMemo(
    () => AppLists.find((e) => e.appCategory === appCategory),
    [appCategory]
  );
  if (appCategory.length > 0) {
    // console.log(apps_listByCategory);
  }

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {}, []);
  function handleAddRecent(prop: any) {}
  function AppCategoryLists() {
    if (
      !apps_listByCategory?.childrens ||
      !Array.isArray(apps_listByCategory.childrens)
    )
      return null;

    return apps_listByCategory.childrens.map((app, index) => (
      <span
        onClick={() =>
          dispatch(
            addRecent({
              appIcon: app.appName,
              appName: app.appName,
              pkgId: app.pkgId,
            })
          )
        }
        title={app.desc}
        key={index}
        className="flex  ct-pointer  h-[6vh] w-[28vw]   justify-start gap-2 items-center motion-translate-y-in-50 ml-[4vw]"
      >
        <img
          src={app.appIcon}
          alt={app.appName}
          className=" object-fill inline-block w-7 h-7"
        />
        <h4 className="hidden lg:inline xl:inline text-left w-[10vw] bg-none">
          {app.appName}
        </h4>
        {/* Hide h6 on smaller screens, show on lg and xl */}
        <h6 className="hidden lg:inline xl:inline text-[.8vw] bg-none lg:flex-1">
          {app.desc}
        </h6>{" "}
      </span>
    ));
  }

  return (
    <div
      className={`w-[60%] flex flex-col justify-start items-center relative`}
    >
      <Suspense
        fallback={
          <AiOutlineReload className="animate-spin absolute top-1/2 left-1/2" />
        }
      >
        {apps_listByCategory?.childrens?.length > 0 ? (
          <AppCategoryLists />
        ) : (
          "Nothing here"
        )}
      </Suspense>
    </div>
  );
};

export default CMRight;
