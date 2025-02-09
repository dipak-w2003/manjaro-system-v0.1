import React, { Suspense, useCallback, useMemo } from "react";
import { IStyleClassProps } from "../../KdeApp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { AppPkgId } from "../1-taskbar/1-apps-menu/AppCategoryList";
import { removeRecent } from "@/Redux/1-user-state/recentSlice";
import RenderApp from "@/components/Desktop/Apps/RenderAppComponent";

const MainScreen: React.FC<IStyleClassProps> = React.memo(({ styles }) => {
  const appsOpened = useSelector((state: RootState) => state.recents);
  const dispatch: AppDispatch = useDispatch();

  // Memoize removeApp to prevent unnecessary function recreation
  const removeApp = useCallback((pkgId: AppPkgId) => {
    dispatch(removeRecent(pkgId));
  }, [dispatch]);

  // Use useMemo to avoid unnecessary filtering computation on each render
  const focusedApps = useMemo(() => {
    return appsOpened.filter((app) => app.isFocused);
  }, [appsOpened]);

  return (
    <Suspense fallback={<div className="motion-preset-confetti"></div>}>
      <main id="main-screen" className={styles}>
        {focusedApps.map((app) => (
          <RenderApp key={app.pkgId} app={app} removeApp={removeApp} />
        ))}
      </main>
    </Suspense>
  );
});

export default MainScreen;
