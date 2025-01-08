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

import { MdAccessibilityNew } from "react-icons/md";
const TbAccessibility = () => {
  return (
    <div className=" relative overflow-hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-transparent    focus:ring-0 focus:ring-offset-0
          focus-visible:ring-0 focus-visible:ring- focus-visible:ring-offset-0
          "
          >
            <MdAccessibilityNew />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56  rounded-none  -mb-[9px]">
          <DropdownMenuLabel>Accessibility</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <input type="checkbox" /> Large Text
              <DropdownMenuShortcut>F1</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <input type="checkbox" /> High Contrast
              <DropdownMenuShortcut>F2</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TbAccessibility;
