import React, { ComponentType, ReactNode, SVGProps } from "react";
import { SiGnome, SiKde, SiXfce } from "react-icons/si";
import { Users } from "../usersAccount";
import { User } from "lucide-react";
// ? Icons Desktop | SVG TYpe
export type DesktopIcon = ComponentType<SVGProps<SVGSVGElement>>;
export const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  gnome: SiGnome,
  kde: SiKde,
  xfce: SiXfce,
};

export const DesktopIcon: React.FC<{ iconKey: string }> = ({ iconKey }) => {
  const Icon = iconMap[iconKey];
  return Icon ? <Icon /> : null;
};
