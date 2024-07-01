import { Box } from "@mui/material";
import { CardType } from "./types";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "../button-link";

export const Card = ({ title, description, image, link }: CardType) => {
  const buttonLinkClasses = [
    "bg-green-800",
    "text-gray-200",
    "block",
    "w-fit",
    "min-w-36",
    "border-2",
    "border-gray-800",
    "py-1",
    "text-center",
    "mt-8",
    "rounded-md",
    "hover:bg-white",
    "hover:text-gray-800",
    "hover:border-white",
  ];

  return (
    <Box className="text-left">
      <h3 className="mb-4 text-2xl text-green-800">{title}</h3>
      <Box className="flex">
        <Box className="flex-1 flex flex-col justify-between w-60">
          <p>{description}</p>
          <ButtonLink
            className={`${buttonLinkClasses.join(" ")}`}
            link={link}
            label="More info >"
          />
        </Box>
        <Link
          href={link}
          className="w-48 h-[220px] border-4 border-green-800 ml-5"
        >
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt="miniature-image"
            width={195}
            height={220}
          />
        </Link>
      </Box>
    </Box>
  );
};
