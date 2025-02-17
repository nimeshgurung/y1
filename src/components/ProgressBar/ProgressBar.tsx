import { theme } from "../../theme/theme";

export interface ProgressBarProps {
  progress: number;
  type: "objective" | "crew" | "initiative" | "pod";
  variant: "striped" | "normal";
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, type, variant }) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const getLightFillColor = () => {
    switch (type) {
      case "crew":
        return theme.palette.purple[10];
      case "objective":
        return theme.palette.pink[10];
      case "pod":
        return theme.palette.blue[30];
      default:
        return theme.palette.orange[10];
    }
  };

  const getDarkFillColor = () => {
    switch (type) {
      case "crew":
        return theme.palette.purple[20];
      case "objective":
        return theme.palette.pink[20];
      case "pod":
        return theme.palette.blue[40];
      default:
        return theme.palette.orange[20];
    }
  };

  // Container style mimics the original SVG dimensions (200x12) and rounded edges
  const containerStyle: React.CSSProperties = {
    width: "200px",
    height: "12px",
    backgroundColor: getLightFillColor(),
    borderRadius: "6px",
    overflow: "hidden"
  };

  // Inner progress bar style
  const progressStyle: React.CSSProperties = {
    width: `${clampedProgress}%`,
    height: "100%",
    transition: "width 0.3s ease",
    borderRadius: "6px",
    ...(variant === "normal"
      ? { backgroundColor: getDarkFillColor() }
      : {
          backgroundImage: `repeating-linear-gradient(-45deg, ${getDarkFillColor()} 0, ${getDarkFillColor()} 2px, ${getLightFillColor()} 2px, ${getLightFillColor()} 4px)`
        })
  };

  return (
    <div style={containerStyle}>
      <div style={progressStyle} />
    </div>
  );
};

export default ProgressBar;