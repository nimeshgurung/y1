import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { theme } from "../theme/theme";

export default {
  title: "Design/Colors",
};

type ColorSwatchProps = {
  name: string;
  colorValue: string;
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, colorValue }) => (
  <Box
    sx={{
      backgroundColor: colorValue,
      width: 100,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      m: 1,
      borderRadius: 1,
    }}
  >
    <Typography
      variant="caption.standard"
      sx={{ color: theme.palette.neutral.white, textAlign: "center" }}
    >
      {name}
      <br />
      {colorValue}
    </Typography>
  </Box>
);

const ColorsStory: React.FC = () => {
  // Manually list out the groups defined in your theme
  const colorGroups = [
    { key: "neutral", colors: theme.palette.neutral },
    { key: "purple", colors: theme.palette.purple },
    { key: "orange", colors: theme.palette.orange },
    { key: "green", colors: theme.palette.green },
    { key: "yellow", colors: theme.palette.yellow },
    { key: "brown", colors: theme.palette.brown },
    { key: "pink", colors: theme.palette.pink },
    { key: "blue", colors: theme.palette.blue },
    { key: "red", colors: theme.palette.red },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2 }}>
        {colorGroups.map((group) => (
          <Box key={group.key} sx={{ mb: 4 }}>
            <Typography variant="body.standard.bold" gutterBottom>
              {group.key.charAt(0).toUpperCase() + group.key.slice(1)}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {Object.entries(group.colors).map(([shade, value]) => (
                <ColorSwatch
                  key={shade}
                  name={`${group.key} ${shade}`}
                  colorValue={value}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export const Colors = ColorsStory;