import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { settings as SS } from "@/components/Desktop/Themes/SVG/Apps/SVGs";
const TopMenu: React.FC<IStyleClassProps> = ({ styles }) => {
  const activeUser = useSelector(
    (state: RootState) => state.activeUser.user[0]
  );
  return (
    <div className={`${styles} justify-start flex-row *:h-full`}>
      <section className="w-[40%] flex items-center gap-2">
        <img
          className="circle h-7 w-7 rounded-full object-cover  bg-yellow-500"
          src={activeUser.imgPP}
        />
        <h2>{activeUser.username}</h2>
      </section>
      <section className="w-[60%] flex justify-center items-center relative">
        <input
          type="text"
          placeholder="search somethings ..."
          className="text-[14px] px-3 py-[2px] w-[60%]  bg-slate-500"
        />
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
