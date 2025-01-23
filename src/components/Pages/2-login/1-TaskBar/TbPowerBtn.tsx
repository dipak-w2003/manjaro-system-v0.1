// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { FaPowerOff } from "react-icons/fa6";
import { setNotBooted } from "@/constants/sessionStorage";
const TbPowerBtn = () => {
  return (
    <div className=" relative overflow-hidden">
      <FaPowerOff onClick={setNotBooted} />
      {/* 
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-transparent    focus:ring-0 focus:ring-offset-0
          focus-visible:ring-0 focus-visible:ring- focus-visible:ring-offset-0
          "
          >
            <FaPowerOff />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56  rounded-none  -mb-[9px]">
          <DropdownMenuLabel>Power</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Suspend
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Hibernate
              <DropdownMenuShortcut>F2</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Restart
              <DropdownMenuShortcut>Alt+Delete</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Shut Down
              <DropdownMenuShortcut>Alt+F4</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};

export default TbPowerBtn;
