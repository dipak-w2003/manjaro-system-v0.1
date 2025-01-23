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
import {
  getDefaultUser$What,
  getUsersCertainDataList,
  HandleEventLoginType,
  sysUser,
} from "./usersAccount";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Toast
import { ToastContainer } from "react-toastify";
// Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setUserById } from "@/Redux/1-user-state/activeUserSlice";
import { checkAuthSysUser } from "@/constants/checkUserAuth";
import { setLogin } from "@/Redux/1-user-state/isLoggedSlice";
import { DelayLog } from "@/components/Utils/Buttons/delayLog";
import { useToast } from "@/constants/toast";

// Optimized SelectUser Component
export const SelectUser = () => {
  const dispatch: AppDispatch = useDispatch();
  const { SuccessToast, UnsuccessToast } = useToast();

  const [username, setUsername] = React.useState<string>(
    React.useMemo(() => getDefaultUser$What().toString(), [])
  );
  const [password, setPassword] = React.useState<string>("");

  const getUsersList = React.useMemo(
    () => getUsersCertainDataList("username", sysUser),
    [sysUser]
  );

  const handleUserName = React.useCallback(
    (Iusername: string) => {
      if (!Iusername) return;
      setUsername(Iusername);

      const foundUser = sysUser.find((e) => e.username === Iusername);
      if (foundUser) dispatch(setUserById(foundUser.id));
    },
    [dispatch]
  );

  const handleLogin = React.useCallback(
    ({ event, user }: HandleEventLoginType) => {
      const isKeyEvent = "key" in event && event.key === "Enter";
      const isClickEvent = "type" in event && event.type === "click";

      if (isKeyEvent || isClickEvent) {
        event.preventDefault();
        const authStatus = checkAuthSysUser({
          username: user.username,
          password: user.password,
        });

        if (authStatus) {
          SuccessToast();
          DelayLog(dispatch, setLogin);
        } else {
          UnsuccessToast();
        }
        setPassword("");
      }
    },
    [dispatch, SuccessToast, UnsuccessToast]
  );

  return (
    <main className="flex flex-col space-y-1 *:w-full relative mb-12">
      <Select value={username} onValueChange={handleUserName}>
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

      <div className="log-password">
        <Input
          autoFocus
          type="password"
          placeholder="password"
          className="rounded-md border-gray-400 text-gray-500 cursor-pointer"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) =>
            handleLogin({ event: e, user: { username, password } })
          }
        />
        <Button
          className="mt-1 absolute -bottom-[64%] right-0"
          type="submit"
          onClick={(e) =>
            handleLogin({ event: e, user: { username, password } })
          }
        >
          Login
        </Button>
      </div>

      <ToastContainer />
    </main>
  );
};
