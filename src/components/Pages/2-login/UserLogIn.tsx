import { useState } from "react";
import { SelectUser } from "./SelectUser";
import { sysUser } from "./usersAccount";
const UserLogIn = () => {
  const [imgPP, setImgPP] = useState<string>(sysUser[0].imgPP);
  function setSrcImg(prop: string): void {
    if (!imgPP && prop.length < 0) return;
    setImgPP((prev) => (prev = prop));
  }
  return (
    <div className="flex h-ful justify-center space-x-6 items-center">
      <img
        src={imgPP}
        alt="img"
        className="object-cover rounded-full h-[130px] w-[130px]"
      />
      <div className="user-log w-[50%] *:w-full">
        <SelectUser getSrcImg={setSrcImg} />
      </div>
    </div>
  );
};

export default UserLogIn;
// https://www.specfictionshop.com/cdn/shop/products/MAIN-ICHIGO_6e485844-362b-4304-b5ce-462ead404369_2000x.png?v=1678306501
