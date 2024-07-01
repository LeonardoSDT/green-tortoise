import { ReactNode } from "react";

export interface SectionType {
  title?: string;
  description?: string[];
  background?: boolean;
  components?: ReactNode[];
  titleClass?: string;
  descClass?: string;
  className?: string;
  children?: ReactNode;
}
