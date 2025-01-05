import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sysUser } from "./usersAccount";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// ? Toast
import { ToastContainer, toast } from "react-toastify";
// ? ⬆️ Packages : Hooks or basic utils ⬇️
import {
  Users as USER,
  getUsersCertainDataList,
  sysUser as sysUserArray,
  getDefaultUser$What,
  LoginType,
} from "./usersAccount";
// ? Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setUserById } from "@/Redux/1-user-state/activeUserSlice";
import { checkAuthSysUser } from "@/constants/checkUserAuth";
import { useIsLoggedContext } from "@/context/1-isBooted/isLoggedContext";
import { setIsLogged } from "@/constants/sessionStorage";
// ? return jsx
export const SelectUser = () => {
  const { setIsLog } = useIsLoggedContext();
  const [username, setUsername] = React.useState<string>(
    getDefaultUser$What().toString()
  );
  const [password, setPassword] = React.useState<string>("");
  const getUsersList = getUsersCertainDataList("username", sysUser);
  const dispatch: AppDispatch = useDispatch();

  // ? setUser & pass props(....)
  function handleUserName(Iusername: string) {
    if (!Iusername && Iusername.length < 0) return;
    setUsername((prev) => (prev = Iusername));
    console.log("woorked", Iusername);
    const tempArray: USER[] = sysUserArray;
    const foundUserArray = tempArray.filter((e) => e.username === Iusername);
    // Dispatch
    dispatch(setUserById(foundUserArray[0].id));
  }

  // ? Handle Login
  const handleLogin = (user: LoginType) => {
    const stat = checkAuthSysUser({
      username: user.username,
      password: user.password,
    });
    if (stat) {
      // ? context & session
      setIsLog();
      setIsLogged();
      toast.success("Successfully Logged", {
        position: "bottom-right",
        delay: 100,
        autoClose: 2500,
      });
    } else {
      toast.error("Login Error", {
        position: "bottom-right",
        autoClose: 2500,
        delay: 100,
      });
    }
    setPassword("");
  };
  React.useEffect(() => {}, [password, sysUser, username]);
  return (
    <main className=" flex flex-col space-y-1 *:w-full ">
      <Select
        value={username}
        onValueChange={(Iusername) => handleUserName(Iusername)}
      >
        <SelectTrigger className=" *:text-gray-700 w-[180px]">
          <SelectValue placeholder="Select a user.." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>User Names</SelectLabel>
            {getUsersList.map((e) => {
              return (
                <SelectItem key={e} value={e}>
                  {e}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="log-password">
        <Input
          type="password"
          placeholder="password"
          className="rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className=" mt-1"
          type="submit"
          onClick={() => handleLogin({ username, password })}
        >
          Login
        </Button>
      </div>

      <ToastContainer />
    </main>
  );
};
