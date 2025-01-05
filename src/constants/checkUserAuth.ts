import { sysUser as userDB, Users, } from "@/components/Pages/2-login/usersAccount";
import { setIsLogged } from "./sessionStorage";
import { useIsLoggedContext } from "@/context/1-isBooted/isLoggedContext";
import { useIsBootedContext } from "@/context/1-isBooted/isBootedContext";

export const checkAuthSysUser = (user: Users): boolean => {
    if (!user) return;
    const check = userDB.find((e) => e.username === user.username && e.password === user.password)
    if (!check) {
        return false
    } else {
        return true
    }
}