import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import { Button } from "@mui/material";

export const DateRange = () => {
  const [checkIn, setCheckIn] = React.useState<Dayjs | null>(dayjs(new Date()));
  const [checkOut, setCheckOut] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );
  const today = dayjs(new Date());

  const handleCheckIn = (newDate: Dayjs | null) => {
    setCheckIn(newDate);
    if (checkOut && newDate && newDate >= checkOut) {
      setCheckOut(newDate); // Reset check-out date if it is before the new check-in date
    }
  };

  const handleCheckOut = (newDate: Dayjs | null) => {
    setCheckOut(newDate);
    if (checkIn && newDate && newDate <= checkIn) {
      setCheckIn(newDate); // Reset check-out date if it is before the new check-in date
    }
  };

  const datePickerStyles = {
    "&.MuiFormControl-root": {
      minWidth: 0,
      width: "140px",
      flex: "1 1 30%",
    },
    ".MuiInputBase-root": { backgroundColor: "white" },
    ".MuiInputBase-input": {
      padding: "8px",
      fontSize: "12px",
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DatePicker"]}
        sx={{
          overflow: "hidden",
          marginTop: "10px",
          alignItems: "center",
          display: "flex",
          gap: "10px",
          flexDirection: "row !important",
          "&>* + *": { margin: "0 !important" },
        }}
      >
        <DatePicker
          label="Check-in"
          value={checkIn}
          onChange={handleCheckIn}
          minDate={today}
          sx={datePickerStyles}
        />
        <DatePicker
          label="Check-out"
          value={checkOut}
          onChange={handleCheckOut}
          minDate={checkIn ? checkIn : today}
          sx={datePickerStyles}
        />
        <Button
          className="bg-gray-500 text-gray-100 border-2 border-white border-solid text-sm w-32"
          sx={{ "&.MuiButtonBase-root": { padding: "5px" } }}
        >
          Go
        </Button>
      </DemoContainer>
    </LocalizationProvider>
  );
};
