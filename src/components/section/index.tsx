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
    <Box className={`relative w-full overflow-hidden ${mainClassName}`}>
      <Box
        className={`max-w-screen-xl m-auto ${
          background ? "text-gray-200" : "text-gray-700"
        } ${className}`}
      >
        {children}
      </Box>
      {background && (
        <Image
          className={`w-full h-full object-cover absolute left-0 top-0 -z-10`}
          src="https://static.wixstatic.com/media/a4f49d_36933d16026844909505f590f0646117~mv2_d_2839_1218_s_2.jpg/v1/fill/w_1159,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a4f49d_36933d16026844909505f590f0646117~mv2_d_2839_1218_s_2.jpg"
          alt="Next.js Logo"
          width={1800}
          height={500}
          priority
        />
      )}
    </Box>
  );
};
