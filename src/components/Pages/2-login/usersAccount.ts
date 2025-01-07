// ? Icons
import React, { ComponentType, SVGProps } from "react";
import { v7 as uuidv7 } from "uuid";
export type DesktopEnv = "kde" | "gnome" | "xfce"
export type DataList = "username" | "password" | "id" | "imgPP" | "desktopEnv" | "gifLogin" | "sysUname"
export interface Users {
    username: string,
    password: string,
    sysUname?: string,
    imgPP?: string
    id?: string,
    gifLogin?: string,
    // ? desktop
    desktopEnv?: DesktopEnv
    desktopIcon?: DesktopEnv
}
export type IUsers = Users[]

export const sysUser: IUsers = [{
    username: "Naruto-Uzumaki",
    password: "naruto2003",
    sysUname: "naruto",
    id: uuidv7(),
    imgPP: "https://cdn.pixabay.com/photo/2023/09/04/03/24/ai-generated-8231889_960_720.png",
    desktopEnv: "xfce",
}, {
    username: "Tanjiro",
    password: "DT2003",
    sysUname: "tKamado",
    id: uuidv7(),
    imgPP: "https://preview.redd.it/9oj53qb4rms91.jpg?auto=webp&s=38235c65658c1e3b3857054c9cfe8e1ec0574492",
    desktopEnv: "kde",

},
{
    username: "Ichigo",
    password: "DT2003",
    sysUname: "getsuga",
    id: uuidv7(),
    imgPP: "https://i.pinimg.com/736x/a6/33/00/a633005571e8dcb13fc41cea010fcfb1.jpg",
    desktopEnv: "gnome",

}
]

// ? Get values list
export const getUsersCertainDataList = (data: DataList, users: IUsers) => {
    return users.map((user) => user[data])
}

// TODO : setting up default user or prevent default error to program
export type DefaultUserValue = {
    idx: number,
    getWhat: DataList
}
export const defaultIndex = 0
// ? set default parameter
export const getDefaultUser$What = (prop: DefaultUserValue = { idx: defaultIndex, getWhat: "username" }): string | number => {
    return sysUser[prop.idx][prop.getWhat]
}


// ? export LogType
export type LoginType = {
    username: string
    password: any
    loggedFullDate?: Date
}






// ? Icons Desktop | SVG TYpe
export type DesktopIcon = ComponentType<SVGProps<SVGSVGElement>>
