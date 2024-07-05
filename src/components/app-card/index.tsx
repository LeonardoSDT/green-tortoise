import { Box } from "@mui/material";
import { AppCardProps } from "./types";
import Image from "next/image";
import { Title } from "../title";
import { P } from "../paragraph";
import { ButtonLink } from "../button-link";
import Link from "next/link";

export const AppCard = async ({
  boldInTitle,
  title,
  description,
  link,
  linkLabel,
  image,
}: AppCardProps) => {
  const getRandomImg = async () => {
    const response = await fetch("https://picsum.photos/200/300/?blur");
    //const img = await response.json();
    return response;
  };

  const img = getRandomImg();
  console.log(img);

  return (
    <Link
      href={link}
      target="_blank"
      className="flex-1 basis-1/5 flex flex-col items-center gap-5 px-8 pt-8 pb-4 rounded-xl shadow-lg shadow-green-800 max-w-72 min-w-56 min-h-96 hover:shadow-green-600"
    >
      <Box className="rounded-full overflow-hidden w-24 h-24">
        <Image
          src={image ? `/icons/${image}` : `https://picsum.photos/200/300`}
          alt={boldInTitle}
          width={80}
          height={80}
          className="w-full h-full object-fill"
        />
      </Box>
      <Box className="flex flex-col justify-between flex-1">
        <Box className="flex flex-col gap-8">
          <Title className="text-sm">
            <span className="font-semibold">{boldInTitle}</span>
            {title ? `: ${title}` : ""}
          </Title>
          <P className="">{description}</P>
        </Box>
      </Box>
    </Link>
  );
};
