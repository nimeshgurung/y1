import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { ChatBubble, RefreshDouble, Bookmark } from "iconoir-react";

import type { Status as RAGStatus } from "../RAGStatusChip";
import type { Status } from "../StatusChip/StatusChip";
import CardHeader from "./CardHeader";
import CardProgress from "./CardProgress";
import TeamNameChip from "../AttributeChip/AttributeChip";
import { DateChip } from "../DateChip/DateChip";

export interface CardProps {
  type: "Key Result" | "Objective" | "Initiative";
  status?: Status;
  ragStatus?: RAGStatus;
  lastUpdated?: string;
  name?: string;
  teamName?: string;
  teamInitial?: string;
  date?: string;
  progress?: number;
  commentCount?: number;
  isBookmarked?: boolean;
  onCommentClick?: () => void;
  onRefresh?: () => void;
  onBookmarkClick?: () => void;
}

const useStyles = makeStyles()((theme) => ({
  card: {
    backgroundColor: theme.palette.neutral.white,
    border: `1px solid ${theme.palette.neutral[40]}`,
    borderRadius: theme.spacing(2),
    overflow: "hidden",
  },
  header: {
    borderBottom: `1px solid ${theme.palette.neutral[40]}`,
  },
  content: {
    padding: theme.spacing(5, 6, 6, 6),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
    borderBottom: `1px solid ${theme.palette.neutral[40]}`,
  },
  name: {
    color: theme.palette.neutral[70],
    ...theme.typography["subtitle.standard"],
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

export const Card: React.FC<CardProps> = ({
  type = "Initiative",
  status = "inProgress",
  ragStatus = "green",
  lastUpdated = "Just now",
  name = "Name",
  teamName = "TEAM NAME",
  teamInitial = "T",
  date = "DD MMM YY",
  progress = 0,
  commentCount = 0,
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
          type={type}
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
      <CardProgress
        status={status}
        ragStatus={ragStatus}
        ragLabel={ragStatus === "green" ? "ON TRACK" : ragStatus === "amber" ? "NEEDS ATTENTION" : "AT RISK"}
        date={lastUpdated}
        progress={progress}
        progressType="initiative"
        progressVariant="normal"
      />
    </Paper>
  );
};