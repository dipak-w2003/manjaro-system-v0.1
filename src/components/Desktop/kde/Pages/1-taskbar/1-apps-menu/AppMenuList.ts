export type AppCategory =
    | "favorites"
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
        appName?: string;
        appIcon?: string;
        isSelected?: boolean;
    }[]

}

import { applications, bookmarks, developments, games, graphics, internets, offices, settings, systems, utilitiess } from "@/components/Desktop/Themes/SVG/Apps/SVGs";
export const AppLists: IAppMenu[] = [
    {
        appName: "Favorites",
        appCategory: "favorites",
        appIcon: bookmarks,
        isSelected: true,
        childrens: [{ appName: "Vs Code" }, { appName: "Chrome" }, { appName: "Pubg" }]

    },
    {
        appName: "All Applications",
        appCategory: "all-applications",
        appIcon: applications
    },
    {
        appName: "Development",
        appCategory: "development",
        appIcon: developments
    },
    {
        appName: "Games",
        appCategory: "game",
        appIcon: games
    },
    {
        appName: "Graphics",
        appCategory: "graphics",
        appIcon: graphics
    },
    {
        appName: "Internet",
        appCategory: "internet",
        appIcon: internets
    },
    {
        appName: "Office",
        appCategory: "office",
        appIcon: offices
    },
    {
        appName: "Settings",
        appCategory: "settings",
        appIcon: settings
    },
    {
        appName: "System",
        appCategory: "system",
        appIcon: systems
    },
    {
        appName: "Utilities",
        appCategory: "utilities",
        appIcon: utilitiess
    },
];
