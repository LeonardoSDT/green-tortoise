import { Box } from "@mui/material";
import { Menu } from "../header/menu";
import { menuOptions } from "../data/global-data";
import Image from "next/image";
import { ContactCard } from "../contact-card";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <Box className="max-w-screen-xl m-auto flex justify-between py-7 px-20 max-md:flex-wrap max-sm:px-4 max-sm:flex-col-reverse max-sm:gap-10">
        <Box className="max-lg:hidden">
          <Menu options={menuOptions} footer />
        </Box>
        <Box className="flex max-md:flex-1">
          <Image
            className="object-contain w-auto h-auto max-sm:w-full"
            src="/footer-logo.png"
            alt="footer-logo"
            width={209}
            height={231}
          />
        </Box>
        <ContactCard className="text-gray-100" />
      </Box>
    </footer>
  );
};
