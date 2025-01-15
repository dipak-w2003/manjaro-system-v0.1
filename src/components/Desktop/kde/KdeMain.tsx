import React, { lazy, Suspense } from "react";
import LazyKdeLoad from "./Pages/LazyKdeLoad";
const LazyKdeApp = lazy(() => import("./KdeApp"));
const KdeMain = () => {
  return (
    <Suspense fallback={<LazyKdeLoad />}>
      <LazyKdeApp />
    </Suspense>
  );
};

export default KdeMain;
