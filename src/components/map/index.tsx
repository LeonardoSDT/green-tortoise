"use client";
import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";

interface MapProps {
  center?: { lng: any; lat: any };
}

export const Map = ({
  center = { lat: 37.7912388, lng: -122.4190861 },
}: MapProps) => {
  function handleApiLoaded(map: any, maps: any) {}

  function handleOnChange(bounds: any) {}

  return (
    <Box className="flex-1 absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-md">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_KEY!,
          version: "weekly",
          libraries: [],
        }}
        center={center}
        defaultZoom={13.5}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }: { map: any; maps: any }) =>
          handleApiLoaded(map, maps)
        }
        onChange={({ bounds }: any) => handleOnChange(bounds)}
      />
    </Box>
  );
};
