"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { slides } from "../data/slider-data";
import { useEffect, useRef, useState } from "react";
import { Slide, SliderProps } from "./types";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { SlideDetail } from "./slide-detail";

export const Slider = ({
  showDetail,
  showMiniatures,
  className,
}: SliderProps) => {
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
      className={`w-full ${className}`}
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <Box className="h-[415px] w-full overflow-hidden relative">
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
            className={`absolute inset-0 transition-opacity duration-1000 h-[415px] ${
              index === step ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 object-cover h-full"
              src={slide.image}
              alt="slider-image"
              height={415}
              width={1870}
            />
            {showDetail && <SlideDetail {...slide} />}
          </Box>
        ))}
      </Box>
      {showMiniatures && (
        <Box className="flex justify-center overflow-auto mt-3">
          {slides.map((slide, i) => (
            <Image
              key={i}
              src={slide.image}
              alt={slide.title}
              width={80}
              height={60}
              className={`border-2 ${
                i === step ? "border-gray-200" : "border-gray-800"
              } cursor-pointer`}
              onClick={() => setStep(i)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
