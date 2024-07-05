import { Box } from "@mui/material";
import { data } from "./data";
import Image from "next/image";
import { Title } from "../title";
import { P } from "../paragraph";
import { ListWhitIconsProps } from "./types";

export const ListWhitIcons = ({
  title,
  titleClass,
  description,
  className,
  clasNameList,
  list = data,
}: ListWhitIconsProps) => {
  return (
    <Box className={`${className} flex flex-col gap-5`}>
      {title && <Title>{title}</Title>}
      <ul
        className={`flex flex-wrap text-center ${
          clasNameList ? clasNameList : "gap-y-5 gap-x-10"
        }`}
      >
        {list.map(({ label, image, description }, i) => (
          <li key={i} className={`flex flex-col items-center flex-1 gap-3`}>
            <Image src={image} alt={label} width={60} height={60} />
            {label && <span className={titleClass}>{label.toUpperCase()}</span>}
            {description && (
              <P className="w-48 text-gray-800 font-light">{description}</P>
            )}
          </li>
        ))}
      </ul>
      {description && <P className="text-sm max-w-[450px]">{description}</P>}
    </Box>
  );
};
