"use client";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

const Page = () => {
  const path = usePathname();
  return <Box>{path}</Box>;
};

export default Page;
