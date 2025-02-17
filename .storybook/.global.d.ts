import "@mui/material/Typography";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      white: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      100: string;
    };
    purple: {
      10: string; // color/purple/10
      20: string; // color/purple/20
    };
    orange: {
      10: string; // color/orange/10
      20: string; // color/orange/20
    };
    green: {
      10: string; // color/green/10
      20: string; // color/green/20
    };
    yellow: {
      10: string; // color/yellow/10
      20: string; // color/yellow/20
    };
    brown: {
      10: string; // color/brown/10
    };
    pink: {
      10: string; // color/pink/10
      20: string; // color/pink/20
    };
    blue: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
    };
    red: {
      10: string;
      20: string;
      30: string;
    };
    custom: {
      text: {
        subtle: string;
        standard: string;
        strong: string;
      };
      icon: {
        standard: string;
      };
      line: {
        standard: string;
      };
      border: {
        standard: string;
        selected: string;
      };
      background: {
        brand: string;
        selected: string;
      };
    };
  }

  interface PaletteOptions {
    neutral: {
      white: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      100: string;
    };
    purple?: {
      10: string;
      20: string;
    };
    orange?: {
      10: string;
      20: string;
    };
    green?: {
      10: string;
      20: string;
    };
    yellow?: {
      10: string;
      20: string;
    };
    brown?: {
      10: string;
    };
    pink?: {
      10: string;
      20: string;
    };
    blue?: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
    };
    red?: {
      10: string;
      20: string;
      30: string;
    };
    custom: {
      text: {
        subtle: string;
        standard: string;
        strong: string;
      };
      icon: {
        standard: string;
      };
      line: {
        standard: string;
      };
      border: {
        standard: string;
        selected: string;
      };
      background: {
        brand: string;
        selected: string;
      };
    };
  }

  interface TypographyVariants {
    h1?: never;
    h2?: never;
    h3?: never;
    h4?: never;
    h5?: never;
    h6?: never;
    subtitle1?: never;
    subtitle2?: never;
    body1?: never;
    body2?: never;
    caption?: never;
    button?: never;
    overline?: never;

    "body.standard": React.CSSProperties;
    "body.standard.bold": React.CSSProperties;
    "subtitle.standard": React.CSSProperties;
    "subtitle.standard.bold": React.CSSProperties;
    "caption.standard": React.CSSProperties;
    "caption.small": React.CSSProperties;
    "button.standard": React.CSSProperties;
    "button.standard.bold": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1?: never;
    h2?: never;
    h3?: never;
    h4?: never;
    h5?: never;
    h6?: never;
    subtitle1?: never;
    subtitle2?: never;
    body1?: never;
    body2?: never;
    caption?: never;
    button?: never;
    overline?: never;

    "body.standard": React.CSSProperties;
    "body.standard.bold": React.CSSProperties;
    "subtitle.standard": React.CSSProperties;
    "subtitle.standard.bold": React.CSSProperties;
    "caption.standard": React.CSSProperties;
    "caption.small": React.CSSProperties;
    "button.standard": React.CSSProperties;
    "button.standard.bold": React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // Disable default variants
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    button: false;
    overline: false;

    "body.standard": true;
    "body.standard.bold": true;
    "subtitle.standard": true;
    "subtitle.standard.bold": true;
    "caption.standard": true;
    "caption.small": true;
    "button.standard": true;
    "button.standard.bold": true;
  }
}