import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

import { theme } from "../../theme/theme";
import { DateChip } from "../DateChip/DateChip";
import ProgressBar from "../ProgressBar/ProgressBar";
import type { Status as RagStatus } from "../RAGStatusChip/RAGStatusChip";
import { RAGStatusChip } from "../RAGStatusChip/RAGStatusChip";
import type { Status } from "../StatusChip/StatusChip";
import { StatusChip } from "../StatusChip/StatusChip";

const useStyles = makeStyles()({
  root: {
    height: 86,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(5),
  },
  statusContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  statusChips: {
    display: "flex",
    gap: theme.spacing(1),
    flex: 1,
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  progressBar: {
    flex: 1,
    marginRight: theme.spacing(2),
  },
  progressText: {
    minWidth: 'fit-content',
    textAlign: 'right',
  },
  dateChipWrapper: {
    textAlign: 'right',
  },
});

interface CardProgressProps {
  status: Status;
  ragStatus: RagStatus;
  ragLabel: string;
  date: string;
  progress: number;
  progressType: "objective" | "crew" | "initiative" | "pod";
  progressVariant: "striped" | "normal";
}

const CardProgress: React.FC<CardProgressProps> = ({
  status,
  ragStatus,
  ragLabel,
  date,
  progress,
  progressType,
  progressVariant,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.statusContainer}>
        <div className={classes.statusChips}>
          <StatusChip status={status} />
          <RAGStatusChip status={ragStatus} label={ragLabel} />
        </div>
        <div className={classes.dateChipWrapper}>
          <DateChip date={date} />
        </div>
      </div>
      <div className={classes.progressContainer}>
        <div className={classes.progressBar}>
          <ProgressBar
            progress={progress}
            type={progressType}
            variant={progressVariant}
          />
        </div>
        <Typography variant="caption.standard" color="neutral.70" className={classes.progressText}>
          {progress}%
        </Typography>
      </div>
    </div>
  );
};

export default CardProgress;