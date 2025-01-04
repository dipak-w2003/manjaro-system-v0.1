import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sysUser } from "./usersAccount";
export function InputPassword() {
  return (
    <div className="flex flex-col relative w-full bg-red-200  max-w-sm justify-start items-start gap-y-2 ">
      <Input type="email" placeholder="Email" className="rounded-lg" />
      <Button className="absolute top-[110%] right-0" type="submit">
        Login
      </Button>
    </div>
  );
}
