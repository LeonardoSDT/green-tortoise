import { Box } from "@mui/material";

export const FadingScreen = () => {
  return (
    <Box
      className="fixed w-full h-dvh bg-white z-[1000]"
      sx={{
        opacity: 1,
        transition: "opacity .5s ease-in",
      }}
    ></Box>
  );
};
