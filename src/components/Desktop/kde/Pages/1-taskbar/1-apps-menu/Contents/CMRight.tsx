import { IStyleClassProps } from "@/components/Desktop/kde/KdeApp";
import React from "react";
import { setLogout } from "@/Redux/1-user-state/isLoggedSlice";
import { AppDispatch } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { AppCategory } from "../AppMenuList";

interface IAppCategory {
  appCategory: AppCategory;
}
const CMRight: React.FC<IAppCategory> = ({ appCategory }) => {
  const dispatch: AppDispatch = useDispatch();
  const logout = () => {
    dispatch(setLogout());
  };
  return (
    <div className={`w-[60%]`}>
      <button onClick={logout}>logout</button>
      <h2 className="text-3xl">{appCategory}</h2>
    </div>
  );
};

export default CMRight;
