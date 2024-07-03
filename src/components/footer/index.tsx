import { Box } from "@mui/material";
import { Menu } from "../header/menu";
import { menuOptions } from "../data/global-data";
import Image from "next/image";
import { info } from "../data/footer-data";
import Link from "next/link";

export const Footer = () => {
  const lastColumn = (value: string, type: string) => {
    switch (type) {
      case "mail":
        return <Link href={`mailto:${value}`}>{value}</Link>;

      default:
        return <p>{value}</p>;
    }
  };
  return (
    <footer className="bg-black">
      <Box className="max-w-screen-xl m-auto flex justify-between py-7 px-20">
        <Box className="">
          <Menu options={menuOptions} footer />
        </Box>
        <Box className="flex">
          <Image
            className="object-contain w-auto h-auto"
            src="/footer-logo.png"
            alt="footer-logo"
            width={209}
            height={231}
          />
        </Box>
        <Box>
          {info.map((item, i) => (
            <Box
              className={`leading-7 ${
                item.bold
                  ? "font-bold text-sm text-gray-100"
                  : "font-light text-xs text-gray-400"
              }`}
              key={i}
            >
              {lastColumn(item.value, item.type)}
            </Box>
          ))}
        </Box>
      </Box>
    </footer>
  );
};
