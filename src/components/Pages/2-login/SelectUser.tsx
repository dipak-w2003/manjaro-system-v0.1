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
import { HandleEventLoginType, sysUser } from "./usersAccount";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// ? Toast
import { ToastContainer } from "react-toastify";
// ? ⬆️ Packages : Hooks or basic utils ⬇️
import {
  Users as USER,
  getUsersCertainDataList,
  sysUser as sysUserArray,
  getDefaultUser$What,
} from "./usersAccount";
// ? Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setUserById } from "@/Redux/1-user-state/activeUserSlice";
import { checkAuthSysUser } from "@/constants/checkUserAuth";
import { setLogin, setLogout } from "@/Redux/1-user-state/isLoggedSlice";
import { DelayLog } from "@/components/Utils/Buttons/delayLog";
import { useToast } from "@/constants/toast";

// ? return tsx
export const SelectUser = () => {
  const [username, setUsername] = React.useState<string>(
    getDefaultUser$What().toString()
  );
  const [password, setPassword] = React.useState<string>("");
  const getUsersList = getUsersCertainDataList("username", sysUser);
  const dispatch: AppDispatch = useDispatch();
  const { SuccessToast, UnsuccessToast } = useToast();
  // ? setUser & pass props(....)
  function handleUserName(Iusername: string) {
    if (!Iusername && Iusername.length < 0) return;
    setUsername((prev) => (prev = Iusername));
    console.log("woorked", Iusername);
    const tempArray: USER[] = sysUserArray;
    const foundUserArray = tempArray.filter((e) => e.username === Iusername);
    dispatch(setUserById(foundUserArray[0].id));
  }

  // ? Handle Login : Form is not used so onenter listener is putted
  const HandleLogin = ({ event, user }: HandleEventLoginType) => {
    // Check if it's a valid event (either keyboard or mouse event)
    // Type Guarding ("key" or "type" in event)
    const isKeyEvent = "key" in event && event.key === "Enter";
    const isClickEvent = "type" in event && event.type === "click";
    // Proceed only if it's a valid key or click event
    if (isKeyEvent || isClickEvent) {
      event.preventDefault();
      const stat = checkAuthSysUser({
        username: user.username,
        password: user.password,
      });
      if (stat) {
        SuccessToast();
        DelayLog(dispatch, setLogin);
      } else {
        UnsuccessToast();
      }
      setPassword("");
    }
  };

  React.useEffect(() => {}, [password, sysUser, username]);
  return (
    <main className="flex flex-col space-y-1 *:w-full relative mb-12">
      <Select
        value={username}
        onValueChange={(Iusername) => handleUserName(Iusername)}
      >
        <SelectTrigger className="*:text-gray-700 w-[180px] border-gray-400 focus:ring-offset-0 text-gray-500">
          <SelectValue placeholder="Select a user.." />
        </SelectTrigger>
        <SelectContent className="*:text-gray-500">
          <SelectGroup>
            <SelectLabel>User Names</SelectLabel>
            {getUsersList.map((e) => (
              <SelectItem key={e} value={e}>
                {e}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="log-password ">
        <Input
          autoFocus
          type="password"
          placeholder="password"
          className="rounded-md border-gray-400 text-gray-500 cursor-pointer"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) =>
            HandleLogin({ event: e, user: { username, password } })
          }
        />
        <Button
          className="mt-1 absolute -bottom-[64%] right-0"
          type="submit"
          onClick={(e) =>
            HandleLogin({ event: e, user: { username, password } })
          }
        >
          Login
        </Button>
      </div>

      <ToastContainer />
    </main>
  );
};
