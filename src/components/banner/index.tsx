import { Box } from "@mui/material";
import { BannerProps } from "./types";
import Image from "next/image";
import { Title } from "../title";

export const Banner = ({ title, image }: BannerProps) => {
  return (
    <Box className="relative w-full h-[454px] overflow-hidden">
      <Box className="w-full h-full z-10 flex justify-center items-center bg-gray-900/40">
        {title && (
          <Title className="text-gray-200 font-extrabold text-8xl merienda">
            {title}
          </Title>
        )}
      </Box>
      <Image
        src={image}
        alt={title}
        width={1343}
        height={454}
        className="absolute w-full h-full object-cover top-1/2 -translate-y-1/2 -z-10"
      />
    </Box>
  );
};
