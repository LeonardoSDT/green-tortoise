"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { slides } from "../data/slider-data";
import { useEffect, useRef, useState } from "react";
import { Slide } from "./types";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { SlideDetail } from "./slide-detail";

export const Slider = () => {
  const [step, setStep] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startSlider();
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startSlider = () => {
    intervalRef.current = window.setInterval(() => {
      setStep((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
  };

  const stopSlider = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  const nextStep = () => {
    setStep((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevStep = () => {
    setStep((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const buttonClasses = [
    "absolute",
    "top-2/4",
    "-translate-y-2/4",
    "z-10",
    "text-white",
    "hover:bg-white/50",
    "hover:text-gray-500",
    "h-full",
    "rounded-none",
  ];

  return (
    <Box
      className="h-[415px] w-full overflow-hidden relative"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <Button
        className={`${buttonClasses.join(" ")} left-0`}
        onClick={nextStep}
      >
        <ArrowBackIos className="text-3xl" />
      </Button>
      <Button
        className={`${buttonClasses.join(" ")} right-0`}
        onClick={prevStep}
      >
        <ArrowForwardIos className="text-3xl" />
      </Button>
      {slides.map((slide: Slide, index) => (
        <Box
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === step ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 object-fill"
            src={slide.image}
            alt="slider-image"
            height={415}
            width={1870}
          />
          <SlideDetail {...slide} />
        </Box>
      ))}
    </Box>
  );
};
