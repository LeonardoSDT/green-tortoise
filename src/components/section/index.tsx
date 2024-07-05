import { Box } from "@mui/material";
import { SectionType } from "./types";
import Image from "next/image";

export const Section = ({
  background,
  className = "",
  mainClassName,
  children,
}: SectionType) => {
  return (
    <Box className={`relative w-full ${mainClassName}`}>
      <Box
        className={`max-w-screen-xl m-auto ${
          background ? "text-gray-200" : "text-gray-700"
        } ${className} relative z-20`}
      >
        {children}
      </Box>
      {background && (
        <Box className={`${background ? "bg-[#103602]" : ""} `}>
          <Image
            className={`w-full h-full object-cover absolute left-0 top-0 z-10`}
            src="/background.jpg"
            alt="Next.js Logo"
            width={1367}
            height={995}
            priority
          />
        </Box>
      )}
    </Box>
  );
};
