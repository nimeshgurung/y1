import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { theme } from "../theme/theme";

export default {
  title: "Design/Typography",
};

const TypographyStory: React.FC = () => {
  // List the typography variants used in your theme
  const variants: Array<{ variant: string; label: string }> = [
    { variant: "body.standard", label: "Body Standard" },
    { variant: "body.standard.bold", label: "Body Standard Bold" },
    { variant: "subtitle.standard", label: "Subtitle Standard" },
    { variant: "caption.standard", label: "Caption Standard" },
    { variant: "caption.small", label: "Caption Small" },
    { variant: "button.standard", label: "Button Standard" },
    { variant: "button.standard.bold", label: "Button Standard Bold" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2 }}>
        {variants.map(({ variant, label }) => (
          <Box key={variant} sx={{ mb: 2 }}>
            <Typography variant={variant as any}>
              {label}: The quick brown fox jumps over the lazy dog.
            </Typography>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export const TypographyVariants = TypographyStory;