import { Typography } from "@mui/material";
import { PTypes } from "./types";

export const P = ({ children, className = "text-xs" }: PTypes) => {
  return (
    <Typography
      paragraph={true}
      className={`font-light ${className}`}
      sx={{ margin: 0, maxWidth: "720px" }}
    >
      {children}
    </Typography>
  );
};
