import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { imagesList } from "./data";
import Image from "next/image";
import { Box } from "@mui/material";
import { Title } from "../title";

export const Gallery = () => {
  return (
    <ImageList cols={3} rowHeight={164}>
      {imagesList.map((item) => (
        <ImageListItem className="relative" key={item.image}>
          <img
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <Box className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:bg-gray-800/50 hover:opacity-100 cursor-pointer">
            <Title className="text-lg text-gray-200">{item.title}</Title>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
};
