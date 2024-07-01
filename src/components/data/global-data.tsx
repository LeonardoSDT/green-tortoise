import { MenuOption } from "../header/types";

export const menuOptions: MenuOption[] = [
  { label: "Home", to: "/" },
  {
    label: "Dorms and rooms",
    to: "san-francisco-hostel-dorm-beds",
    subOptions: [
      { label: "Shared rooms", to: "clean-san-francisco-hostel-shared" },
      { label: "Private rooms", to: "best-san-francisco-hostel-private" },
    ],
  },
  { label: "Events", to: "things-to-do-events-san-francisco" },
  { label: "Amenities", to: "best-san-fransisco-hostel-amenities" },
  {
    label: "San Francisco travel info",
    to: "#",
    subOptions: [
      { label: "Our Local Neighborhood", to: "our-local-neighborhood" },
      {
        label: "Useful Websites and Apps",
        to: "helpful-san-francisco-travel-website",
      },
      {
        label: "Cheap Eats Near Us",
        to: "sanfrancisco-cheap-eats",
      },
      {
        label: "Best San Francisco Galleries and Museums",
        to: "galleries-museums-sanfrancisco",
      },
      {
        label: "All The Best Attractions Close By",
        to: "san-francisco-hostel-neighborhood",
      },
    ],
  },
  { label: "Tours", to: "best-san-francisco-hostel-tours-to" },
  { label: "Location", to: "best-san-francisco-hostel-location" },
  { label: "Group stays", to: "group-stays-greentortoise-hostel" },
  { label: "Faq's", to: "best-san-francisco-hostel-1" },
];
