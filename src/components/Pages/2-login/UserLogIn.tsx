import { SelectUser } from "./SelectUser";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const UserLogIn = () => {
  const userImPP = useSelector(
    (state: RootState) => state.activeUser.user[0].imgPP
  );

  return (
    <div className="flex h-ful justify-center space-x-6 items-center">
      <img
        src={userImPP}
        alt="img"
        className="object-cover rounded-full h-[120px] w-[120px] mb-2"
      />
      <div className="user-log w-[50%] *:w-full">
        <SelectUser />
      </div>
    </div>
  );
};

export default UserLogIn;
// https://www.specfictionshop.com/cdn/shop/products/MAIN-ICHIGO_6e485844-362b-4304-b5ce-462ead404369_2000x.png?v=1678306501
