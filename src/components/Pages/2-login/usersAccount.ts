import { v7 as uuidv7 } from "uuid";
export type DesktopEnv = "kde" | "gnome" | "xcfe"
export interface Users {
    username: string,
    password: string,
    id?: string,
    desktopEnv?: DesktopEnv
}
export type IUsers = Users[]




export const sysUser: IUsers = [{
    username: "Naruto-Uzumaki",
    password: "DT2003",
    id: uuidv7(),
    desktopEnv: "gnome"
}, {
    username: "Tanjiro",
    password: "DT2003",
    id: uuidv7(),
    desktopEnv: "kde"
},]
