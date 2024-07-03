import { Box } from "@mui/material";
import { list } from "./data";
export const DescriptionList = () => {
  return (
    <Box>
      <ul className="flex flex-wrap gap-10">
        {list.map((item, i) => (
          <li
            key={i}
            className="flex flex-col gap-3 flex-1 basis-1/3 relative pl-10"
          >
            <span className="absolute left-0 text-2xl text-green-900">
              {i + 1}.
            </span>
            <h3 className="text-xl text-green-900">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};
