export type AppCategory =
    | "favorites"
    | "recents"
    | "all-applications"
    | "development"
    | "game"
    | "graphics"
    | "internet"
    | "multimedia"
    | "office"
    | "settings"
    | "system"
    | "utilities";




export interface IAppMenu {
    appName: string;
    appCategory: AppCategory;
    appIcon?: string;
    isSelected?: boolean;
    childrens?: {
        pkgId: string,
        appName?: string;
        appIcon?: string;
        desc?: string
    }[]
}

// For better package clarity : pkgId: string, -> "development-appName"


export const emptyArr = []
import { applications, bookmarks, developments, games, graphics, internets, offices, settings, systems, utilitiess } from "@/components/Desktop/Themes/SVG/Apps/SVGs";
import { FavoritesApps } from "./AppCategoryList";
export const AppLists: IAppMenu[] = [
    {
        appName: "Favorites",
        appCategory: "favorites",
        appIcon: bookmarks,
        childrens: FavoritesApps

    },
    {
        appName: "All Applications",
        appCategory: "all-applications",

        appIcon: applications,
        childrens: emptyArr
    },
    {
        appName: "Development",
        appCategory: "development",

        appIcon: developments,
        childrens: emptyArr
    },
    {
        appName: "Games",
        appCategory: "game",

        appIcon: games,
        childrens: emptyArr
    },
    {
        appName: "Graphics",
        appCategory: "graphics",

        appIcon: graphics,
        childrens: emptyArr
    },
    {
        appName: "Internet",
        appCategory: "internet",

        appIcon: internets,
        childrens: emptyArr
    },
    {
        appName: "Office",
        appCategory: "office",

        appIcon: offices,
        childrens: emptyArr
    },
    {
        appName: "Settings",
        appCategory: "settings",

        appIcon: settings,
        childrens: emptyArr
    },
    {
        appName: "System",
        appCategory: "system",

        appIcon: systems,
        childrens: emptyArr
    },
    {
        appName: "Utilities",
        appCategory: "utilities",

        appIcon: utilitiess,
        childrens: emptyArr
    },
];
