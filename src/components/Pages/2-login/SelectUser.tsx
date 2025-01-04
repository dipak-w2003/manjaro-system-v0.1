import * as React from "react";
import {
  Users as USER,
  getUsersCertainDataList,
  sysUser as sysUserArray,
} from "./usersAccount";
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

type IPROPS = {
  // ....
  getSrcImg: (imgSrc: string) => void;
  // ....
};
export const SelectUser: React.FC<IPROPS> = ({ getSrcImg }) => {
  const [username, setUsername] = React.useState<string>(sysUser[0].username);
  const [password, setPassword] = React.useState<string>("");
  const [user, setUser] = React.useState<USER | undefined>(undefined);

  const getUsersList = getUsersCertainDataList("username", sysUser);

  // ? setUser & pass props(....)
  function handleUserName(Iusername: string) {
    if (!Iusername && Iusername.length < 0) return;
    setUsername((prev) => (prev = Iusername));
    console.log("woorked", Iusername);

    // get filtered data from specific one
    const tempArray: USER[] = sysUserArray;
    const foundUserArray = tempArray.filter((e) => e.username === Iusername);
    const imgSrc = foundUserArray[0].imgPP;
    getSrcImg(imgSrc);
  }

  // ? Handle Login
  const handleLogin = (data: USER) => {
    setPassword("");
  };

  // ? default
  //   getSrcImg(sysUser[0].imgPP);
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
    </main>
  );
};
