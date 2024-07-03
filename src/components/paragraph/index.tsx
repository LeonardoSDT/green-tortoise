import { Typography } from "@mui/material";
import { PTypes } from "./types";

export const P = ({ children, className }: PTypes) => {
  return (
    <Typography
      paragraph={true}
      className={`text-sm ${className}`}
      sx={{ margin: 0, maxWidth: "720px" }}
    >
      {children}
    </Typography>
  );
};
