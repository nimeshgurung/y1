import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    cursor: "pointer",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["background-color"]),
    "&:hover": {
      backgroundColor: theme.palette.neutral[80],
    },
    "&.active": {
      backgroundColor: theme.palette.neutral[70],
    },
  },
  label: {
    color: theme.palette.neutral.white,
    ...theme.typography["caption.standard"],
  },
}));

export interface ContextMenuTabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const ContextMenuTab: React.FC<ContextMenuTabProps> = ({
  label,
  active,
  onClick,
}) => {
  const { classes } = useStyles();

  return (
    <div
      className={`${classes.root} ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <Typography className={classes.label}>{label}</Typography>
    </div>
  );
};