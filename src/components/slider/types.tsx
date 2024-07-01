export interface Slide {
  title: string;
  description: string;
  image: string;
  subImages?: string[];
  link?: { label: string; src: string };
}
