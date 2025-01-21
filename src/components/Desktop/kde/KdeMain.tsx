import React, { lazy, Suspense } from "react";
import LazyKdeLoad from "./Pages/LazyKdeLoad";
import KdeApp from "./KdeApp";
const KdeMain = () => {
  return (
    <Suspense fallback={<LazyKdeLoad />}>
      <KdeApp />
    </Suspense>
  );
};

export default KdeMain;
