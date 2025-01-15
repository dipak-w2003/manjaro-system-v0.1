export type AppCategory = "favorites" | "all-applications" | "development" | "game" | "graphics" | "internet" | "multimedia" | "office" | "settings" | "system" | "utilities"
export interface IAppMenu {
    appName: string,
    appIcon: string,
    appCategory: AppCategory,
    isAppOpen?: boolean,
}






export const AppLists: IAppMenu[] = [
    {
        appName: "Favorites",
        appIcon: "",
        appCategory: "favorites",
    }
]