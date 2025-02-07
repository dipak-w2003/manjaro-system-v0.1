// ? Provides apps categories
import {
  vscode,
  terminal,
  musicplayer,
} from "@/components/Desktop/Themes/SVG/Apps/Categories/categoryAppsSvgs";

export interface AppCategoryList {
  pkgId: string;
  appName: string;
  appIcon: string;
  desc?: string;
  isFocused: boolean;
}

// Favorites (Set as readonly with `as const`)
export const FavoritesApps = [
  {
    pkgId: "development-vscode",
    appName: "VS Code",
    appIcon: vscode,
    desc: "Code editor powerhouse.",
    isFocused: false,
  },
  {
    pkgId: "system-terminal",
    appName: "Terminal",
    appIcon: terminal,
    desc: "Audio playback tool.",
    isFocused: false,
  },
  {
    pkgId: "entertainment-musicplayer",
    appName: "Music Player",
    appIcon: musicplayer,
    desc: "Command-line interface hub.",
    isFocused: false,
  },
] as const; // ✅ `as const` ensures pkgId values are inferred as literals

// Dynamically generate a union type
export type AppPkgId = (typeof FavoritesApps)[number]["pkgId"];

