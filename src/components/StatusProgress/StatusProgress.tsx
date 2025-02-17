import { makeStyles } from "tss-react/mui";

import { theme } from "../../theme/theme";
import { DateChip } from "../DateChip/DateChip";
import { RAGStatusChip } from "../RAGStatusChip/RAGStatusChip";
import { StatusChip } from "../StatusChip/StatusChip";

const useStyles = makeStyles()({
  root: {
    width: 336,
    height: 86,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    border: `1px solid ${theme.palette.neutral[40]}`,
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(4),
  },
  statusBar: {
    alignSelf: "stretch",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tags: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
  progressContainer: {
    alignSelf: "stretch",
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: theme.spacing(5),
  },
  progressBar: {
    width: 253,
    height: 12,
    background: theme.palette.orange[10],
    borderRadius: 8,
    overflow: "hidden",
  },
  progress: {
    width: "75%",
    height: 12,
    background: theme.palette.orange[20],
    borderRadius: 8,
  },
  progressText: {
    color: theme.palette.neutral[70],
    fontSize: 11,
    fontWeight: 400,
    lineHeight: theme.spacing(3.5),
  },
});

const StatusProgress: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.statusBar}>
        <div className={classes.tags}>
          <StatusChip status="inProgress" />
          <RAGStatusChip status="green" label="On track" />
        </div>
        <DateChip date="Just now" />
      </div>
      <div className={classes.progressContainer}>
        <div className={classes.progressBar}>
          <div className={classes.progress} />
        </div>
        <span className={classes.progressText}>75%</span>
      </div>
    </div>
  );
};

export default StatusProgress;