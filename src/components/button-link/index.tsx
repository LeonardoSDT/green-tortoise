import Link from "next/link";

export const ButtonLink = ({
  link,
  label,
  className = "",
}: {
  link: string;
  label: string;
  className?: string;
}) => (
  <Link className={className} href={link}>
    {label}
  </Link>
);
