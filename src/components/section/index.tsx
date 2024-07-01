import { Box } from "@mui/material";
import { SectionType } from "./types";
import Image from "next/image";

export const Section = ({
  title,
  description = [],
  background,
  titleClass,
  descClass,
  className = "",
  children,
}: SectionType) => {
  return (
    <Box className={`relative p-10 w-full overflow-hidden`}>
      <Box
        className={`max-w-screen-xl m-auto ${
          background ? "text-gray-200" : "text-gray-700"
        } ${className}`}
      >
        {title && (
          <h2
            className={`z-10 text-xl max-w-96 border-b-2 pb-5 ${titleClass} ${
              background ? "border-gray-200" : "border-gray-800"
            }`}
          >
            {title}
          </h2>
        )}
        {description.map((desc) => (
          <p className={`z-10 mt-10 max-w-[750px]  ${descClass}`}>{desc}</p>
        ))}
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
