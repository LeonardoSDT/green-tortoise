import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { ButtonLink } from "../button-link";

export const DateRange = () => {
  const router = useRouter();
  const [checkIn, setCheckIn] = React.useState<Dayjs | null>(dayjs(new Date()));
  const [checkOut, setCheckOut] = React.useState<Dayjs | null>(
    dayjs(new Date()).add(1, "day")
  );
  const [url, setUrl] = useState("#");

  const today = dayjs(new Date());

  const handleCheckIn = (newDate: Dayjs | null) => {
    setCheckIn(newDate);
    if (checkOut && newDate && newDate >= checkOut) {
      setCheckOut(newDate.add(1, "days")); // Reset check-out date if it is before the new check-in date
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

  useEffect(() => {
    const checkInDate = checkIn?.format("YYYY-MM-DD");
    const checkOutDate = checkOut?.format("YYYY-MM-DD");
    setUrl(
      `https://hotels.cloudbeds.com/en/reservation/U6b4Vw?ga_sess_id=undefined&checkin=${checkInDate}&checkout=${checkOutDate}&currency=usd`
    );
  }, [checkIn, checkOut]);

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
        <ButtonLink
          link={url}
          label="GO"
          className="bg-gray-500 text-gray-100 border-2 border-white border-solid text-sm w-32 p-1 rounded-md text-center"
          target="_blank"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
