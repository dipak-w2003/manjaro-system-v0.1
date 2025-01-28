import React, { ComponentType, SVGProps } from "react";
import { v7 as uuidv7 } from "uuid";
// ? Desktop Env & DataList('keys') Union Dictionary
export type DesktopEnv = "kde" | "gnome" | "xfce"
export type DataList = "username" | "password" | "id" | "imgPP" | "desktopEnv" | "gifLogin" | "sysUname"

// ? Users Strict Defined object data_types
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


// ? SystemUser List
export const sysUser: IUsers = [{
    username: "Naruto Uzumaki",
    password: "naruto2003",
    sysUname: "naruto",
    desktopEnv: "kde",
    imgPP: "https://cdn.pixabay.com/photo/2023/09/04/03/24/ai-generated-8231889_960_720.png",
}, {
    username: "Tanjiro",
    password: "DT2003",
    sysUname: "tKamado",
    imgPP: "https://preview.redd.it/9oj53qb4rms91.jpg?auto=webp&s=38235c65658c1e3b3857054c9cfe8e1ec0574492",
    desktopEnv: "xfce",

},
{
    username: "Ichigo",
    password: "DT2003",
    sysUname: "getsuga",
    imgPP: "https://i.pinimg.com/736x/a6/33/00/a633005571e8dcb13fc41cea010fcfb1.jpg",
    desktopEnv: "gnome",

},
{
    username: "Obito Uchiha",
    password: "mupeLeliya",
    sysUname: "Zinz",
    desktopEnv: "kde",
    imgPP: "https://artistsimages.b-cdn.net/johnny-sins/johnny-sins-1.jpg?width=3840&quality=75&format=webp&flop=false",
}
]
// ? ID duplicated Handling. Prototype -> 
// 1. Generated Unique which is not included : unique_UUI_Generater():string
// 2. forEach sysUser and user.id = 'unique_UUI_Generater' & map generated unique id
// conclusion : it helps to prevent duplicated id and user id changing frequently
// UUID
export function unique_UUI_Generater(existingIds: string[] = []): string {
    let unique = uuidv7();

    while (existingIds.includes(unique)) {
        unique = uuidv7();
    }

    return unique;
}

// Assign unique IDs to sysUser after initialization
sysUser.forEach((user) => {
    if (!user.id) {
        user.id = unique_UUI_Generater(sysUser.map((u) => u.id || ""))
    };
});


// ? Get key -> values list
// This method is used for the access all the keys values from the array of users like namesList, idsLists
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


// ? Mouse and Keyboard Event for Forms like login, comment else
export type HandleEventLoginType = {
    event:
    | React.KeyboardEvent<HTMLInputElement>
    | React.MouseEvent<HTMLButtonElement>;
    user: LoginType;
};



// ? Icons Desktop | SVG TYpe
export type DesktopIcon = ComponentType<SVGProps<SVGSVGElement>>
