import { Box } from "@mui/material";
import { CardType } from "./types";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "../button-link";
import { Title } from "../title";
import { P } from "../paragraph";

export const Card = ({
  title,
  description,
  image,
  link,
  className,
}: CardType) => {
  const buttonLinkClasses = [
    "text-gray-800",
    "w-fit",
    "min-w-36",
    "py-1",
    "text-center",
    "flex",
    "gap-2",
    "items-center",
    "justify-end",
  ];

  return (
    <Box
      className={`flex gap-5 text-left rounded-xl overflow-hidden flex-1 p-2 ${className}`}
    >
      <Box className="rounded-xl overflow-hidden w-52 h-64 border-4 border-green-800">
        <Link href={link} className="block h-full">
          <Image
            className="w-full h-full object-fill aspect-auto"
            src={image}
            alt="miniature-image"
            width={195}
            height={220}
          />
        </Link>
      </Box>
      <Box className="flex-1 flex flex-col items-end justify-between px-4 rounded-b-sm">
        <Box className="flex flex-col gap-5 pt-5">
          <Title className="text-2xl font-semibold text-green-700">
            {title}
          </Title>
          <P className="text-sm text-gray-600">{description}</P>
        </Box>
        <ButtonLink
          className={`${buttonLinkClasses.join(" ")}`}
          link={link}
          label="More info"
          showIcon
        />
      </Box>
    </Box>
  );
};
