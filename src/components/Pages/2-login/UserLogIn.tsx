import React from "react";
import { sysUser } from "./usersAccount";
const UserLogIn = () => {
  const collectIds = [];
  collectIds.push(sysUser.map((e) => e.id));
  console.log(collectIds);

  return <div>UserLogIn</div>;
};

export default UserLogIn;