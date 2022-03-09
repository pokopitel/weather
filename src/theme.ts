import { extendTheme } from "@chakra-ui/react";

const FONT_FAMILY = "Red Hat Display, sans-serif";

export const theme = extendTheme({
  colors: {
    orange: {
      50: "#fff1da",
      100: "#ffd6ae",
      200: "#ffbd7d",
      300: "#ffa24c",
      400: "#ff871a",
      500: "#e66e00",
      600: "#b45500",
      700: "#813c00",
      800: "#4f2400",
      900: "#200900",
    },

    purple: {
      50: "#efedfe",
      100: "#cfcde7",
      200: "#afabd3",
      300: "#8f8ac1",
      400: "#6f68ae",
      500: "#554f95",
      600: "#423d74",
      700: "#2f2c54",
      800: "#1c1a34",
      900: "#080817",
    },
    blue: {
      50: "#dff7ff",
      100: "#b3e4ff",
      200: "#85d1fd",
      300: "#58befb",
      400: "#35acfa",
      500: "#2693e1",
      600: "#1a72af",
      700: "#0e527e",
      800: "#00314d",
      900: "#00111e",
    },
  },
  fonts: {
    body: FONT_FAMILY,
    heading: FONT_FAMILY,
    mono: FONT_FAMILY,
  },
  components: {
    Text: {
      sizes: {
        md: {
          fontSize: "1rem",
        },
        sm: {
          fontSize: "0.875rem",
        },
        mdSb: {
          fontSize: "1rem",
          fontWeight: 600,
        },
        smSb: {
          fontSize: "0.875rem",
          fontWeight: 600,
        },

        mdSbBlue: {
          fontSize: "1rem",
          p: "0px 8px",
          borderRadius: 15,
          bg: "blue.200",
          fontWeight: 600,
        },
        smSbBlue: {
          fontSize: "0.875em",
          fontWeight: 600,
          p: "0px 8px",
          borderRadius: 15,
          bg: "blue.200",
        },
        xsSbBlue: {
          fontSize: "0.75rem",
          p: "0px 8px",
          borderRadius: 15,
          bg: "blue.200",
          fontWeight: 600,
        },
      },
    },
  },
});
