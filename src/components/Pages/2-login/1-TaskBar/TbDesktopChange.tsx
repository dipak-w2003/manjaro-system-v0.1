import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ?
import { DesktopIcon } from "./RenderDesktopIcon";
import { SiGnome, SiKde, SiMatterdotjs, SiXfce } from "react-icons/si";
import { PiGearFineLight } from "react-icons/pi";
const TbDesktopChange = ({ IconKey }: { IconKey: string }) => {
  return (
    <div className=" relative overflow-hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-transparent    focus:ring-0 focus:ring-offset-0
          focus-visible:ring-0 focus-visible:ring- focus-visible:ring-offset-0
          "
          >
            <DesktopIcon iconKey={IconKey} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56  rounded-none ml-60 -mb-[9px]">
          <DropdownMenuLabel>Manjaro Desktops</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Kde
              <DropdownMenuShortcut>
                <SiKde />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Gnome
              <DropdownMenuShortcut>
                <SiGnome />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Xfce
              <DropdownMenuShortcut>
                <SiXfce />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Mate
              <DropdownMenuShortcut>
                <SiMatterdotjs />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>
                <PiGearFineLight />{" "}
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TbDesktopChange;
