import { Box } from "@mui/material";
import { Slide } from "./types";
import Link from "next/link";
import Image from "next/image";
import { DateRange } from "../date-range";
export const SlideDetail = ({ title, description, subImages, link }: Slide) => {
  return (
    <Box className="absolute right-40 z-20 p-3 h-full w-[440px] bg-gray-300/75 max-sm:right-0 max-sm:w-full">
      <h2 className="text-3xl max-w-96">{title}</h2>
      <DateRange />
      {description && <p className="mt-3">{description}</p>}
      {link && (
        <Box className="bg-gray-300 py-1 px-2 rounded-md mt-8 w-fit">
          <Link href={link.src}>{link.label}</Link>
        </Box>
      )}
      {subImages && (
        <Box className="flex justify-between mt-20 px-10">
          {subImages.map((img, i) => (
            <Image key={i} src={img} alt={`img-${i}`} width={80} height={80} />
          ))}
        </Box>
      )}
    </Box>
  );
};
