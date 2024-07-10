"use client";
import Link from "next/link";
import { MenuOption } from "./types";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { List, ListItem } from "@mui/material";
import { Li } from "./styles";

export const MenuItem = ({ label, to, subOptions, footer }: MenuOption) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const path = usePathname();
  const isActive = (path: string, to: string) => {
    return path.replace("/", "") === to.replace("/", "")
      ? "text-green-600"
      : "";
  };

  const menuOptionClases = [
    "relative",
    "px-3",
    "leading-8",
    "cursor-pointer",
    footer ? "bg-black" : "bg-white",
    footer ? "text-gray-600" : "text-black",
    "text-xs",
    "text-nowrap",
    "max-sm:text-wrap",
  ];

  const subMenuOptionClasses = [
    "absolute",
    "px-3",
    footer ? "bottom-0" : "top-full",
    footer ? "left-full" : "left-0",
    "z-10",
    footer ? "bg-black" : "bg-white",
    "shadow-xl",
  ];

  return (
    <Li className={`${menuOptionClases.join(" ")}`}>
      <Link href={to} className={`hover:text-green-800 ${isActive(path, to)}`}>
        {label.toUpperCase()}
      </Link>
      {subOptions && (
        <List className={subMenuOptionClasses.join(" ")}>
          {subOptions.map(({ label, to }, i) => (
            <Li key={i}>
              <Link href={to} className={`${isActive(path, to)}`}>
                {label}
              </Link>
            </Li>
          ))}
        </List>
      )}
    </Li>
  );
};
