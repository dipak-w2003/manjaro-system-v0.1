import { lazy } from "react";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
const TbPowerBtn = lazy(() => import("./1-TaskBar/TbPowerBtn"));
const TbAccessibility = lazy(() => import("./1-TaskBar/TbAccessibility"));
const TbDesktopChange = lazy(() => import("./1-TaskBar/TbDesktopChange"));
const TbLangChange = lazy(() => import("./1-TaskBar/TbLangChange"));
const LoginTaskBar = () => {
  const currentUser = useSelector(
    (state: RootState) => state.activeUser.user[0].sysUname
  );
  const Icon = useSelector(
    (state: RootState) => state.activeUser.user[0].desktopEnv
  );

  return (
    <div className="*:h-full h-full w-full *:w-[45%] flex justify-between items-center *:px-2 *:text-[#c7c7c7]">
      <h2 className="text-sm">{currentUser}-system</h2>
      <section className=" flex  justify-end *:h-full *:min-w-[5%]  *:flex *:justify-center *:items-center  *:cursor-pointer">
        {/* ? this is commented for future development */}
        {/* <TbDesktopChange IconKey={Icon} />
        <TbLangChange />
        <TbAccessibility /> */}
        <TbPowerBtn />
      </section>
    </div>
  );
};

export default LoginTaskBar;

// TODO Note:
// ! State Changing from Taskbar Menu Development for functionality is not made yet so, its just ui/ux without state management system
// ! The Shadcn DropDown menu is also not dynamically used as Arr.map method
// ! Read Line: 20 or 21 `comments`
