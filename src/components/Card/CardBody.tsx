import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

import { theme } from "../../theme/theme";
import TeamNameChip from "../AttributeChip/AttributeChip";
import { DateChip } from "../DateChip/DateChip";
import { RAGStatusChip } from "../RAGStatusChip/RAGStatusChip";
import type { Status } from "../StatusChip/StatusChip";
import { StatusChip } from "../StatusChip/StatusChip";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

const useStyles = makeStyles()((theme) => ({
  content: {
    padding: theme.spacing(5, 6, 6, 6),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
  },
  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  statusTags: {
    display: "flex",
    gap: theme.spacing(1),
  },
  name: {
    color: theme.palette.neutral[70],
    fontSize: 12,
    lineHeight: theme.spacing(4),
    letterSpacing: 0.24,
  },
  attributes: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leading: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  progress: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    color: theme.palette.neutral[60],
    fontSize: 11,
    fontWeight: 500,
    lineHeight: theme.spacing(3.5),
  },
  progressCircle: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: "50%",
    border: `1px solid ${theme.palette.blue[50]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface CardBodyProps {
  status: Status;
  ragStatus: "green" | "amber" | "red";
  lastUpdated: string;
  name: string;
  teamName: string;
  teamInitial: string;
  date: string;
  progress: number;
}

const CardBody: React.FC<CardBodyProps> = ({
  status,
  ragStatus,
  lastUpdated,
  name,
  teamName,
  teamInitial,
  date,
  progress,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.statusBar}>
        <div className={classes.statusTags}>
          <StatusChip status={status} />
          <RAGStatusChip status={ragStatus} label={status.toUpperCase()} />
        </div>
        <DateChip date={lastUpdated} />
      </div>

      <Typography className={classes.name}>{name}</Typography>

      <div className={classes.attributes}>
        <div className={classes.leading}>
          <TeamNameChip
            name={teamName}
            dotColor={theme.palette.purple[20]}
            dotChar={teamInitial}
          />
          <DateChip date={date} />
        </div>

        <div className={classes.progress}>
          <ProgressCircle progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default CardBody;