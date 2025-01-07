import { sysUser as userDB, Users, } from "@/components/Pages/2-login/usersAccount";
export const checkAuthSysUser = (user: Users): boolean => {
    if (!user) return;
    const check = userDB.find((e) => e.username === user.username && e.password === user.password)
    if (!check) {
        return false
    } else {
        return true
    }
}