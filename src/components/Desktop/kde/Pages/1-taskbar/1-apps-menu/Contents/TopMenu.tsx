import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import { RootState } from "@/Redux/store";
import React from "react";
import { CiSearch } from "react-icons/ci";

import { useSelector } from "react-redux";
import { settings as SS } from "@/components/Desktop/Themes/SVG/Apps/SVGs";
const TopMenu: React.FC<IStyleClassProps> = ({ styles }) => {
  const activeUser = useSelector(
    (state: RootState) => state.activeUser.user[0],
  );
  const handleSearchBar = () => {};
  return (
    <div
      className={`${styles} justify-start items-center flex-row *:h-full text-gray-200 relative`}
    >
      <section className="lg:w-[40%] flex items-center gap-2 font-medium ">
        <img
          className="circle h-7 w-7 rounded-full object-cover  bg-yellow-500"
          src={activeUser.imgPP}
        />
        <h2>{activeUser.username}</h2>
      </section>
      <section className="w-[60%]  hidden lg:flex justify-center items-center relative ">
        <span className="relative w-[70%]">
          <CiSearch className="absolute text-gray-200 top-[20%] left-2 text-md" />
          <input
            onChange={() => handleSearchBar}
            type="text"
            placeholder="search somethings ..."
            className="text-[13px] text-gray-200 px-8 py-[4px] h-7  w-[100%] rounded-[2px]  bg-black border-0 focus:outline-none  "
          />
        </span>
        <img
          src={SS}
          height="30px"
          className="object-cover absolute -right-6 ct-pointer"
          width={"80px"}
          alt=""
        />
      </section>
    </div>
  );
};

export default TopMenu;
