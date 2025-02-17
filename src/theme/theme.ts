import { createTheme } from "@mui/material/styles";

const colours = {
  neutral: {
    white: "#FFFFFF",
    10: "#FAFAFA",
    20: "#F5F5F5",
    30: "#EAEAEA",
    40: "#E4E4E4",
    50: "#BABABA",
    60: "#8C8C8C",
    70: "#4D4D4D",
    80: "#383838",
    90: "#2A2A2A",
    100: "#1C1C1C",
  },
  purple: {
    10: "#DFD3F9",
    20: "#6F30F6",
  },
  orange: {
    10: "#FBECE5",
    20: "#E07524",
  },
  green: {
    10: "#E6F7F1",
    20: "#32BA8A",
  },
  yellow: {
    10: "#FFFBEB",
    20: "#FFDB5C",
  },
  brown: {
    10: "#6B4F3B",
  },
  pink: {
    10: "#FFECFE",
    20: "#FF61F9",
  },
  blue: {
    10: "#F8FAFF",
    20: "#E4F3FE",
    30: "#CFE6FA",
    40: "#1E99F9",
    50: "#5E86F6",
    60: "#517CF5",
    70: "#4B73E3",
  },
  red: {
    10: "#FFEEEB",
    20: "#FF705C",
    30: "#E60000",
  },
};

export const theme = createTheme({
  palette: {
    ...colours,
    custom: {
      text: {
        subtle: colours.neutral["60"],
        standard: colours.neutral["70"],
        strong: colours.neutral["100"],
      },
      icon: {
        standard: colours.neutral["60"],
      },
      line: {
        standard: colours.neutral["40"],
      },
      border: {
        standard: colours.neutral["40"],
        selected: colours.blue["50"],
      },
      background: {
        brand: colours.blue["50"],
        selected: colours.blue["10"],
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ["Roboto Flex", "Roboto", "sans-serif"].join(","),

    "body.standard": {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: 0.32,
      wordWrap: "break-word",
    },

    "body.standard.bold": {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: 0.32,
      wordWrap: "break-word",
    },

    "subtitle.standard": {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: "0.24px",
    },

    "subtitle.standard.bold": {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      letterSpacing: "0.24px",
    },

    "caption.standard": {
      fontSize: "11px",
      fontWeight: 500,
      lineHeight: "14px",
      letterSpacing: "0.11px",
    },

    "caption.small": {
      fontSize: "9px",
      fontWeight: 500,
      lineHeight: "14px",
      letterSpacing: "0.36px",
    },

    "button.standard": {
      fontSize: "12px",
      fontWeight: 400,
      textTransform: "none",
    },

    "button.standard.bold": {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      letterSpacing: "0.24px",
      textTransform: "none",
    },

    emoji: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "16px",
      width: 16,
      height: 16,
      letterSpacing: 0.32,
      wordWrap: "break-word",
    },
  },
  spacing: (factor: number) => {
    const spacingValues =
      {
        1: 4, // 4px - quarter spacing
        2: 6, // 6px - for tight spacing like gaps
        3: 8, // 8px - standard padding
        4: 12, // 12px
        5: 16, // 16px
        6: 20, // 20px - standard height for chips
        7: 24, // 24px
        8: 32, // 32px
        9: 40, // 40px
        10: 48, // 48px
        11: 56, // 56px
        12: 64, // 64px
        13: 80, // 80px
        14: 96, // 96px
        15: 120, // 120px
      }[factor] ?? factor * 4;

    return `${spacingValues}px`;
  },
});