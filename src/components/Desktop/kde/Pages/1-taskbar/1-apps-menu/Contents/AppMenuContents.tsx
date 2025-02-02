import React, { lazy, Suspense, useEffect, useRef } from "react";

import TopMenu from "./TopMenu";
import CenterMenu from "./CenterMenu";
import BottomMenu from "./BottomMenu";
import { AiOutlineReload } from "react-icons/ai";
const AppMenuContents = ({
  setToggle,
  toggle,
}: {
  setToggle: () => void;
  toggle: boolean;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setToggle();
      }, 1000);
    };

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener("mouseleave", handleMouseLeave);
      menuElement.addEventListener("mouseenter", handleMouseEnter);
    }

    // not removing event listener will increment eventListener stacks in every use
    return () => {
      if (menuElement) {
        menuElement.removeEventListener("mouseleave", handleMouseLeave);
        menuElement.removeEventListener("mouseenter", handleMouseEnter);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [setToggle]);

  return (
    <div
      // ref={menuRef}
      className={`bg-[#1e272c] h-[75vh] ct-default w-[50vw] absolute -z-50 left-0 bottom-[3.8vh] rounded-tr-sm
        overflow-hidden flex *:flex flex-col justify-center *:items-center *:overflow-hidden text-black noto-sans px-4
      *:motion-translate-y-in-100 *:motion-duration-[0.35s] *:motion-ease-spring-smooth realtive`}
    >
      <Suspense
        fallback={
          <AiOutlineReload className="animate-spin absolute top-1/2 left-1/2" />
        }
      >
        <TopMenu styles={"h-[8%]"} />
        <hr className="w-full  absolute top-[7.3%]  border-[#616167] text-pink-700  left-0 z-30  *:motion-translate-y-in-100 *:motion-duration-[0.35s] *:motion-ease-spring-smooth" />
        <CenterMenu styles={"h-[84%]"} />
        <hr className="w-full  absolute top-[92.6%] border-[#616167] text-pink-700 left-0 z-30  *:motion-translate-y-in-100 *:motion-duration-[0.35s] *:motion-ease-spring-smooth" />
        <BottomMenu styles={"h-[8%] "} />
        <hr className="w-full  absolute bottom-[0.012%]   border-[#616167] text-pink-700 left-0 z-30  *:motion-translate-y-in-100 *:motion-duration-[0.35s] *:motion-ease-spring-smooth" />
      </Suspense>
    </div>
  );
};

export default AppMenuContents;
