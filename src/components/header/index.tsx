import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./menu";
import { menuOptions } from "../data/global-data";

export const Header = () => {
  return (
    <header className="p-3 w-full bg-white relative z-30">
      <Box className="max-w-screen-xl m-auto max-[600px]:flex items-center justify-between">
        <Box className="section-header flex justify-between">
          <Link href="/">
            <Image
              className="w-auto h-auto aspect-auto"
              src="/logo.png"
              alt="logo"
              width={254}
              height={80}
            />
          </Link>
        </Box>
        <Menu options={menuOptions} />
      </Box>
    </header>
  );
};
