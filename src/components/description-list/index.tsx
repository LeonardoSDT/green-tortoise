import { Box } from "@mui/material";
import { list as array } from "./data";
import { DescriptionListProps } from "./types";
import { P } from "../paragraph";
export const DescriptionList = ({
  list = array,
  titleClass,
  descriptionClass,
  className,
}: DescriptionListProps) => {
  return (
    <Box>
      <ul className={`flex flex-wrap gap-10 ${className}`}>
        {list.map((item, i) => (
          <li
            key={i}
            className="flex flex-col gap-2 flex-1 basis-1/3 relative pl-8"
          >
            <span className={`absolute left-0 text-3xl ${titleClass}`}>
              {i + 1}.
            </span>
            <h3 className={`text-xl ${titleClass}`}>{item.title}</h3>
            <P className={`leading-6 ${descriptionClass}`}>
              {item.description}
            </P>
          </li>
        ))}
      </ul>
    </Box>
  );
};
