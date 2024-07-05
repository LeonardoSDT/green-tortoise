import { Box } from "@mui/material";
import Link from "next/link";
import { info } from "../data/footer-data";

export const ContactCard = ({ className }: { className: string }) => {
  const lastColumn = (value: string, type: string) => {
    switch (type) {
      case "mail":
        return <Link href={`mailto:${value}`}>{value}</Link>;

      default:
        return <p>{value}</p>;
    }
  };
  return (
    <Box className={className}>
      {info.map((item, i) => (
        <Box
          className={`leading-7 ${
            item.bold ? "font-bold text-sm" : "font-light text-xs"
          }`}
          key={i}
        >
          {lastColumn(item.value, item.type)}
        </Box>
      ))}
    </Box>
  );
};
