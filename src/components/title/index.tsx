import { Typography } from "@mui/material";
import { TitleProps } from "./types";

export const Title = ({ className, children }: TitleProps) => {
  return (
    <Typography variant="h2" className={`text-3xl max-w-96 ${className}`}>
      {children}
    </Typography>
  );
};
