// components/ProGallery.tsx
"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import Image from "next/image";

const images = [
  {
    original:
      "https://static.wixstatic.com/media/a4f49d_3678c3a727a148c4b4cbe3da525032e0~mv2.jpg",
    thumbnail:
      "https://static.wixstatic.com/media/a4f49d_3678c3a727a148c4b4cbe3da525032e0~mv2.jpg",
    link: "www.facebook.com",
  },
  {
    original:
      "https://static.wixstatic.com/media/a4f49d_7aa19efb73c6413c8a1261b8892ebaca~mv2.jpg",
    thumbnail:
      "https://static.wixstatic.com/media/a4f49d_94c8bd11da254986a0f4b804e727de7e~mv2.jpg",
    link: "www.facebook.com",
  },
  // Add more images here
];

const ProGallery = ({ className }: { className?: string }) => {
  const renderItem = (item: any) => {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <Image src={item.original} alt="Gallery item" />
      </a>
    );
  };

  return (
    <Box className={`w-full relative max-w-screen-xl ${className}`}>
      <ImageGallery items={images} renderItem={renderItem} />
    </Box>
  );
};

export default ProGallery;
