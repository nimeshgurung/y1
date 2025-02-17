import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "tss-react/mui";

interface StyleProps {
  dotColor: string;
}

const useStyles = makeStyles<StyleProps>()((theme, { dotColor }) => ({
  iconButton: {
    padding: 0,
    borderRadius: theme.spacing(2),
  },
  chip: {
    backgroundColor: theme.palette.neutral.white,
    border: "1px solid",
    borderColor: theme.palette.neutral[40],
    borderRadius: theme.spacing(5),
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)} ${theme.spacing(0.5)} ${theme.spacing(0.25)}`,
    height: theme.spacing(6),
    display: "inline-flex",
    alignItems: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.neutral[30],
    },
    "& .MuiChip-icon": {
      margin: 0,
      marginRight: theme.spacing(1),
      padding: 0,
      color: theme.palette.neutral.white,
    },
  },
  dot: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: dotColor,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    marginRight: theme.spacing(0.5),
    flexShrink: 0,
    color: theme.palette.neutral.white,
    fontSize: theme.spacing(3),
    fontWeight: "bold",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  label: {
    color: theme.palette.neutral[70],
    padding: 0,
    ...theme.typography["caption.small"],
  },
}));

export interface TeamNameChipProps {
  name?: string;
  dotColor?: string;
  dotChar?: string;
  onClick?: () => void;
}

export default function TeamNameChip({
  name = "TEAM NAME",
  dotColor = "#9155FD",
  dotChar = "",
  onClick,
}: TeamNameChipProps) {
  const { classes } = useStyles({ dotColor });

  // Ensure we only use the first character and capitalize it
  const displayChar = dotChar.charAt(0).toUpperCase();

  return (
    <IconButton onClick={onClick} className={classes.iconButton}>
      <Chip
        icon={<span className={classes.dot}>{displayChar}</span>}
        label={name.toUpperCase()}
        classes={{
          root: classes.chip,
          label: classes.label,
        }}
      />
    </IconButton>
  );
}