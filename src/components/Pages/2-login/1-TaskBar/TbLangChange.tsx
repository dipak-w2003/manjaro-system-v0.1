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
import { languages } from "@/constants/languages";

import { LuLanguages } from "react-icons/lu";
const TbLangChange = () => {
  return (
    <div className=" relative overflow-hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-transparent    focus:ring-0 focus:ring-offset-0
          focus-visible:ring-0 focus-visible:ring- focus-visible:ring-offset-0
          "
          >
            <LuLanguages />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56  rounded-none ml-40 -mb-[9px] h-[80vh] overflow-y-auto">
          <DropdownMenuLabel>Choose your Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="text-sm">
            {languages.map((e) => {
              return (
                <DropdownMenuItem key={e.lang}>
                  <input
                    type="checkbox"
                    className="bg-slate-900"
                    name={"lang"}
                    id=""
                  />
                  {e.lang} - {e.motherTongue}
                  <DropdownMenuShortcut></DropdownMenuShortcut>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TbLangChange;
// ! Selecting functions are not added
