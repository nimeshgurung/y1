import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

export type Status = "green" | "amber" | "red";

interface StatusConfig {
  chipBackground: string;
  dotColor: string;
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
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: theme.palette.neutral[20],
    },
  },
  dot: {
    width: theme.spacing(2), // 6px
    height: theme.spacing(2), // 6px
    borderRadius: "50%",
  },
  label: {
    textAlign: "center",
    padding: "0",
    textTransform: "uppercase",
    display: "flex",
  },
  muiIcon: {
    marginLeft: "0 !important",
    marginRight: "0 !important",
    fontSize: "12px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface RAGStatusChipProps {
  status: Status;
  label: string;
  className?: string;
}

export const RAGStatusChip: React.FC<RAGStatusChipProps> = ({
  status,
  label,
  className,
}) => {
  const { classes, cx } = useStyles();
  const theme = useTheme();

  const STATUS_CONFIG: Record<Status, StatusConfig> = {
    green: {
      chipBackground: theme.palette.green[10],
      dotColor: theme.palette.green[20],
    },
    red: {
      chipBackground: theme.palette.red[10],
      dotColor: theme.palette.red[20],
    },
    amber: {
      chipBackground: theme.palette.orange[10],
      dotColor: theme.palette.orange[20],
    },
  };

  const config = STATUS_CONFIG[status];

  const chipLabel = (
    <>
      <Typography variant="caption.small" color="neutral.70">
        {label}
      </Typography>
    </>
  );

  return (
    <Chip
      icon={
        <div
          className={classes.dot}
          style={{ backgroundColor: config.dotColor }}
        />
      }
      label={chipLabel}
      className={cx(classes.root, className)}
      classes={{ label: classes.label, icon: classes.muiIcon }}
      style={{ backgroundColor: config.chipBackground }}
      variant="filled"
    />
  );
};