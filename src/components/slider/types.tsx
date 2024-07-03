export interface Slide {
  title: string;
  description: string;
  image: string;
  subImages?: string[];
  link?: { label: string; src: string };
}

export interface SliderProps {
  showDetail?: boolean;
  showMiniatures?: boolean;
  className?: string;
}
