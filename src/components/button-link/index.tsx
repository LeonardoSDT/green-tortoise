import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";

export const ButtonLink = ({
  link,
  label,
  className,
  showIcon,
  target,
}: {
  link?: string;
  label: string;
  className?: string;
  showIcon?: boolean;
  target?: string;
}) => (
  <Link className={className} href={link || "#"} target={target}>
    {label && <span>{label}</span>}
    {showIcon && <ArrowForward className="text-lg" />}
  </Link>
);
