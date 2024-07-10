import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Facebook, Instagram, Phone, Book } from "@mui/icons-material";
import Link from "next/link";

const actions = [
  {
    icon: <Facebook />,
    name: "Facebook",
    link: "https://www.facebook.com/sanfranciscohostel/",
  },
  {
    icon: <Instagram />,
    name: "Instagram",
    link: "https://www.instagram.com/greentortoisesf/?hl=en",
  },
  { icon: <Phone />, name: "Phone", link: "tel:1-800-867-8647" },
  { icon: <Book />, name: "Book Now", link: "https://hotels.cloudbeds.com/reservation/U6b4Vw" },
];

export const FloatingButton = () => {
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 50,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          button: {
            backgroundColor: "#15803d",
            "&:hover": { backgroundColor: "#16a34a" },
          },
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={
              <Link href={action.link} target="_blank">
                {action.icon}
              </Link>
            }
            tooltipTitle={action.name}
            className="text-gray-200"
            itemType="link"
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
