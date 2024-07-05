import { Box, Button, ListItem, List as Ul } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { ListProps } from "./types";
import { Title } from "../title";
import { ButtonLink } from "../button-link";

export const List = ({
  list,
  className,
  showIcon,
  listItemClass,
  titleClass,
  descriptionClass,
  linkClass,
}: ListProps) => {
  return (
    <Ul className={`flex flex-wrap ${className}`}>
      {list.map(({ title, description, linkLabel, link }, i) => (
        <ListItem
          key={i}
          className={`flex flex-wrap flex-col max-w-[50%] gap-5 ${listItemClass}`}
        >
          <Box className="flex items-start flex-1 basis-1/2 w-full">
            {showIcon && <Circle className="text-[10px] mr-4 mt-[5px]" />}
            <Box className="flex flex-col gap-3">
              {title && <Title className={titleClass}>{title}</Title>}
              {description && (
                <span className={descriptionClass}>{description}</span>
              )}
            </Box>
          </Box>
          {link && (
            <ButtonLink
              link={link}
              label={linkLabel || ""}
              className={`text-sm ${linkClass}`}
              showIcon
            />
          )}
        </ListItem>
      ))}
    </Ul>
  );
};
