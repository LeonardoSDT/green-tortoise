"use client";
import { Box, Button, Input } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface DataItem {
  label: string;
  value: string;
  cols: string;
}
interface DataObject {
  firstName: DataItem;
  lastName: DataItem;
  groupName: DataItem;
  checkInCheckOutDates: DataItem;
  numberOfPeople: DataItem;
  email: DataItem;
  phone: DataItem;
  addres: DataItem;
  message: DataItem;
}

export const GetInTouch = () => {
  const [data, setData] = useState<DataObject>({
    firstName: { label: "First Name", value: "", cols: "2" },
    lastName: { label: "Last Name", value: "", cols: "2" },
    groupName: { label: "Group Name", value: "", cols: "" },
    checkInCheckOutDates: {
      label: "Check-in and Chek-out dates",
      value: "",
      cols: "2",
    },
    numberOfPeople: { label: "Number of people", value: "", cols: "2" },
    email: { label: "Email", value: "", cols: "2" },
    phone: { label: "Phone", value: "", cols: "2" },
    addres: { label: "Address", value: "", cols: "" },
    message: { label: "Type here your message", value: "", cols: "" },
  });

  const change = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const value = e.target.value;
    setData((data) => ({ ...data, [key]: value }));
  };

  return (
    <form
      className="flex flex-col gap-10 items-start"
      onSubmit={(e) => e.preventDefault()}
    >
      <Box className="flex flex-wrap gap-4">
        {Object.entries(data).map(([key, object], i) => (
          <Input
            key={key + i}
            placeholder={object.label}
            value={object.value}
            onChange={(e) => change(e, key)}
            className={`flex-1 bg-green-200/50 p-3 rounded-md ${
              [3, 8, 9].includes(i) ? "basis-full" : "basis-1/3"
            }`}
            sx={{
              "&:hover:before": {
                borderBottom: "1px solid #166534 !important",
              },
              "&.Mui-focused:after": {
                borderBottom: "2px solid #16a34a !important",
              },
            }}
            multiline={key == "message"}
          />
        ))}
      </Box>
      <Button
        className="bg-green-800 text-gray-200 px-10 hover:bg-green-100 hover:text-gray-800"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};
