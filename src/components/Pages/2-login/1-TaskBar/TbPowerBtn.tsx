import { AppDispatch } from "@/Redux/store";
import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setLogout } from "@/Redux/1-user-state/isLoggedSlice";

const TbPowerBtn = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <p title="p">
        <FaPowerOff />
      </p>
    </div>
  );
};

export default TbPowerBtn;
