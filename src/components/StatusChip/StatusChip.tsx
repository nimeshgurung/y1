import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import {
  Calendar as CalendarIcon,
  Check as CheckIcon,
  Clock as ClockIcon,
} from "iconoir-react";
import { makeStyles } from "tss-react/mui";

export type Status = "planned" | "inProgress" | "done";

interface StatusChipProps {
  status: Status;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "inline-flex",
    height: "20px", // var(--space-7, 20px)
    padding: "0px 8px 0px 4px", // padding: top 0, right 8px, bottom 0, left 4px
    alignItems: "center",
    gap: "4px", // var(--space-2, 4px)
    flexShrink: 0,
    borderRadius: "4px", // var(--border-radius-1, 4px)
    border: `1px solid ${theme.palette.neutral[40]}`, // var(--color-border-standard, #E4E4E4)
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    backgroundColor: "transparent",
  },
  label: {
    textAlign: "center",
    padding: "0",
    display: "flex",
    textTransform: "uppercase",
  },
  muiIcon: {
    marginLeft: "0 !important",
    marginRight: "0 !important",
    fontSize: "12px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 14,
    height: 14,
  },
}));

export const StatusChip: React.FC<StatusChipProps> = ({ status, ...rest }) => {
  const { classes } = useStyles();

  let icon;
  let label;

  switch (status) {
    case "planned":
      icon = <CalendarIcon style={{ width: 14 }} />;
      label = "Planned";
      break;
    case "inProgress":
      icon = <ClockIcon style={{ width: 14 }} />;
      label = "In Progress";
      break;
    case "done":
      icon = <CheckIcon style={{ width: 14 }} />;
      label = "Done";
      break;
    default:
      icon = null;
      label = "";
  }

  return (
    <Chip
      icon={icon ? icon : undefined}
      label={
        <Typography variant="caption.small" color="neutral.70">
          {label}
        </Typography>
      }
      className={classes.root}
      classes={{ icon: classes.muiIcon, label: classes.label }}
      {...rest}
    />
  );
};