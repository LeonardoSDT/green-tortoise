import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQsType } from "./types";
import { data } from "./data";
import { Title } from "../title";
import { P } from "../paragraph";

export const FAQs = ({ list = data }: FAQsType) => {
  return (
    <div>
      {list.map((item, i) => (
        <Accordion
          key={i}
          className="bg-green-900/90 "
          sx={{ "&.Mui-expanded": { margin: 0 } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i + 1}-content`}
            id={`panel${i + 1}-header`}
          >
            <Title className="max-w-fit p-3 merienda font-bold text-3xl text-gray-200">
              {item.label}
            </Title>
          </AccordionSummary>
          <AccordionDetails>
            <P className="text-xl max-w-fit p-3 text-gray-200 font-extralight">
              {item.description}
            </P>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
