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
              className="w-auto h-auto"
              src="/logo.png"
              alt="logo"
              width={254}
              height={80}
            />
          </Link>
          <Box className="social flex max-[600px]:hidden">
            <Link
              className="mr-2"
              href="https://www.facebook.com/sanfranciscohostel/"
            >
              <Image src="/face.png" alt="facebook" width={30} height={30} />
            </Link>
            <Link
              className="mr-2"
              href="https://www.instagram.com/greentortoisesf/?hl=en"
            >
              <Image src="/insta.png" alt="instagram" width={30} height={30} />
            </Link>
          </Box>
        </Box>
        <Menu options={menuOptions} />
      </Box>
    </header>
  );
};
