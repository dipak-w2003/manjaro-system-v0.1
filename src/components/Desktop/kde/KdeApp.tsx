import React, { lazy, Suspense } from "react";
import LazyKdeLoad from "./Pages/LazyKdeLoad";
import MainScreen from "./Pages/2-main-screen/MainScreen";
import TaskbarApp from "./Pages/1-taskbar/TaskbarApp";

export const standardViewPortHeight = { appScreen: "96vh", taskBar: "4vh" };
const KdeApp = () => {
  return (
    <Suspense fallback={<LazyKdeLoad />}>
      <div className="h-[100vh] w-full ct-default  *:w-full bg-slate-900 *:noto-sans text-white relative  selection:bg-transparent flex flex-col  overflow-hidden ">
        <MainScreen styles={`h-[96vh] ]`} />
        <TaskbarApp styles={`h-[4vh] ]`} />
      </div>
    </Suspense>
  );
};

export default KdeApp;

export interface IStyleClassProps {
  styles?: string;
}
