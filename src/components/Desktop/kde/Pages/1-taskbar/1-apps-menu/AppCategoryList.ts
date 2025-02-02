// ? provides apps categories
import { vscode, terminal, musicplayer } from "@/components/Desktop/Themes/SVG/Apps/Categories/categoryAppsSvgs";

export interface AppCategoryList {
    pkgId: string,
    appName: string;
    appIcon: string;
    desc?: string
}


// Favorites
export const FavoritesApps: AppCategoryList[] = [
    {
        pkgId: "development-vscode",
        appName: "VS Code",
        appIcon: vscode,
        desc: "Code editor powerhouse."
    },
    {
        pkgId: "system-terminal",
        appName: "Terminal",
        appIcon: terminal,
        desc: "Audio playback tool."
    },
    {
        pkgId: "entertainment-musicplayer",
        appName: "Music Player",
        appIcon: musicplayer,
        desc: "Command-line interface hub."
    },
];