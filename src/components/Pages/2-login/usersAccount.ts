import { v7 as uuidv7 } from "uuid";
export type DesktopEnv = "kde" | "gnome" | "xcfe"
export type DataList = "username" | "password" | "id" | "imgPP" | "desktopEnv" | "gifLogin"
export interface Users {
    username: string,
    password: string,
    imgPP?: string
    id?: string,
    desktopEnv?: DesktopEnv
    gifLogin?: string
}
export type IUsers = Users[]




export const sysUser: IUsers = [{
    username: "Naruto-Uzumaki",
    password: "DT2003",
    id: uuidv7(),
    desktopEnv: "gnome",
    imgPP: "https://cdn.pixabay.com/photo/2023/09/04/03/24/ai-generated-8231889_960_720.png",
    gifLogin: "https://www.gifcen.com/wp-content/uploads/2022/12/naruto-gif-11.gif"
}, {
    username: "Tanjiro",
    password: "DT2003",
    id: uuidv7(),
    imgPP: "https://preview.redd.it/9oj53qb4rms91.jpg?auto=webp&s=38235c65658c1e3b3857054c9cfe8e1ec0574492",
    desktopEnv: "kde"
    , gifLogin: ""

}, , {
    username: "Ichigo",
    password: "inoue",
    id: uuidv7(),
    imgPP: "https://www.specfictionshop.com/cdn/shop/products/MAIN-ICHIGO_6e485844-362b-4304-b5ce-462ead404369_2000x.png?v=1678306501",
    desktopEnv: "xcfe"
}]
export const getUsersCertainDataList = (data: DataList, users: IUsers) => {
    return users.map((user) => user[data])
}