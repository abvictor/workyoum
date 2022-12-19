import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      "green.200": "#9AE6B4",
      "green.300": "#68D391",
      "green.400": "#48BB78",
      "green.500": "#38A169",
      "green.600": "#2F855A",
      "green.700": "#276749",
      "green.800": "#22543D",
      "green.900": "#1C4532",
    },
    gray: {
      "gray.300": "#CBD5E0",
      "gray.400": "#A0AEC0",
      "gray.500": "#718096",
      "gray.600": "#4A5568",
      "gray.700": "#2D3748",
      "gray.800": "#1A202C",
      "gray.900": "#171923",
    },
    white: {
      white: "#FFFF",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.700",
        color: "white",
      },
    },
  },
});
