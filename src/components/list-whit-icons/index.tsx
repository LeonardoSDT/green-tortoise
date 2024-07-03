import { Box } from "@mui/material";
import { data } from "./data";
import Image from "next/image";
import { Title } from "../title";
import { P } from "../paragraph";

export const ListWhitIcons = ({
  title,
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
  clasNameList?: string;
}) => {
  return (
    <Box className={`${className} flex flex-col gap-5`}>
      {title && <Title>{title}</Title>}
      <ul className={`flex flex-wrap gap-y-20 text-center`}>
        {data.map((item, i) => (
          <li key={i} className="flex flex-col items-center flex-1 basis-1/3">
            <Image src={item.icon} alt={item.label} width={60} height={60} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      {description && <P className="text-sm max-w-[450px]">{description}</P>}
    </Box>
  );
};
