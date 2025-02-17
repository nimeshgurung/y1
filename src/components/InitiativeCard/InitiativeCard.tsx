import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { ChatBubble, RefreshDouble, Bookmark } from "iconoir-react";

import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardProgress";
import type { Status } from "../StatusChip/StatusChip";
import TeamNameChip from "../AttributeChip/AttributeChip";
import { DateChip } from "../DateChip/DateChip";
import { theme } from "../../theme/theme";

const useStyles = makeStyles()((theme) => ({
  card: {
    width: 336,
    backgroundColor: theme.palette.neutral.white,
    border: `1px solid ${theme.palette.neutral[40]}`,
    borderRadius: theme.spacing(2),
    overflow: "hidden",
  },
  content: {
    padding: theme.spacing(5, 6, 6, 6),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
    borderBottom: `1px solid ${theme.palette.neutral[40]}`,
  },
  header: {
    borderBottom: `1px solid ${theme.palette.neutral[40]}`,
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
  actions: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    color: theme.palette.neutral[70],
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    cursor: "pointer",
  },
  icon: {
    width: 16,
    height: 16,
    cursor: "pointer",
  },
  commentCount: {
    ...theme.typography["caption.small"],
    color: theme.palette.neutral[70],
  }
}));

interface InitiativeCardProps {
  name: string;
  teamName: string;
  teamInitial: string;
  date: string;
  status: Status;
  progress: number;
  commentCount: number;
  isBookmarked?: boolean;
  onCommentClick?: () => void;
  onRefresh?: () => void;
  onBookmarkClick?: () => void;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  name,
  teamName,
  teamInitial,
  date,
  status = "inProgress",
  progress = 75,
  commentCount = 1,
  isBookmarked = false,
  onCommentClick,
  onRefresh,
  onBookmarkClick,
}) => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.card} elevation={0}>
      <div className={classes.header}>
        <CardHeader
          type="Initiative"
          actionIcon={Bookmark}
          onActionClick={onBookmarkClick}
          isActionActive={isBookmarked}
        />
      </div>
      <div className={classes.content}>
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

          <div className={classes.actions}>
            <div className={classes.iconContainer} onClick={onCommentClick}>
              <ChatBubble className={classes.icon} />
              <Typography className={classes.commentCount}>{commentCount}</Typography>
            </div>
            <RefreshDouble className={classes.icon} onClick={onRefresh} />
          </div>
        </div>
      </div>
      <CardFooter
        status={status}
        ragStatus="green"
        ragLabel="ON TRACK"
        date="JUST NOW"
        progress={progress}
        progressType="initiative"
        progressVariant="normal"
      />
    </Paper>
  );
};

export default InitiativeCard;