"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { MenuItem } from "./menu-item";
import { MenuOptions } from "./types";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../button-link";
import { usePathname } from "next/navigation";
export default function SwipeableTemporaryDrawer({ options }: MenuOptions) {
  const [state, setState] = React.useState(false);

  const path = usePathname();

  const isActive = (path: string, to: string) => {
    return path.replace("/", "") === to.replace("/", "")
      ? "text-green-600"
      : "";
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const DrawerList = (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Link className="block p-3" href="/">
        <Image
          className="w-auto h-auto"
          src="/logo.png"
          alt="logo"
          width={254}
          height={80}
        />
      </Link>
      <List>
        {options.map((item, index) => (
          <ListItem
            className="flex flex-wrap text-xs"
            key={index}
            disablePadding
          >
            <ListItemButton className="py-0">
              <Link className={`p-2 ${isActive(path, item.to)}`} href={item.to}>
                {item.label.toUpperCase()}
              </Link>
            </ListItemButton>
            {item.subOptions && (
              <List>
                {item.subOptions.map((subitem, i) => (
                  <ListItemButton
                    key={i}
                    className="max-w-full max-sm:pl-8 py-0"
                  >
                    <Link
                      className={`p-2 ${isActive(path, subitem.to)}`}
                      href={subitem.to}
                    >
                      {subitem.label.toUpperCase()}
                    </Link>
                  </ListItemButton>
                ))}
              </List>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="hidden max-[600px]:block">
      <Button onClick={toggleDrawer(true)}>
        <Menu className="text-green-800 text-4xl" />
      </Button>
      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {DrawerList}
      </SwipeableDrawer>
    </div>
  );
}
