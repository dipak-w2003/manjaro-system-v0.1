import { SelectUser } from "./SelectUser";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { Suspense } from "react";

const UserLogIn = () => {
  const userImPP = useSelector(
    (state: RootState) => state.activeUser.user[0].imgPP,
  );

  return (
    <div className="flex h-ful justify-center space-x-6 items-center bg-[#eeeeee]">
      <Suspense fallback={<p>...img</p>}>
        <img
          src={userImPP}
          alt="...loading img"
          className="object-cover rounded-full h-[100px] w-[100px]  mb-12 p-1"
        />
      </Suspense>
      <div className="user-log w-[50%] *:w-full  relative *:h-full">
        <SelectUser />
      </div>
    </div>
  );
};

export default UserLogIn;
