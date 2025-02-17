import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import type { SVGProps } from "react";

interface StyleProps {
  isActive: boolean;
}

const useStyles = makeStyles<StyleProps>()((theme, { isActive }) => ({
  CardHeader: {
    height: "36px",
    padding: "6px 8px 6px 6px",
    backgroundColor: theme.palette.neutral[10],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconLabel: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  signpostingIcon: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
  cardType: {
    color: theme.palette.neutral[70],
  },
  actionIcon: {
    width: 16,
    height: 16,
    color: isActive ? theme.palette.blue[50] : theme.palette.neutral[60],
    fill: isActive ? theme.palette.blue[50] : "none",
  }
}));

export interface CardHeaderProps {
  type:
    | "Objective"
    | "Key Result"
    | "Initiative"
    | "Work"
    | "Assignment"
    | "Other";
  actionIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  onActionClick?: () => void;
  isActionActive?: boolean;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  type,
  actionIcon: ActionIcon,
  onActionClick,
  isActionActive = false,
}) => {
  const typeToIconMap: { [key in CardHeaderProps["type"]]: string } = {
    Objective: "🎯",
    "Key Result": "📈",
    Initiative: "🚀",
    Work: "📖",
    Assignment: "✏️",
    Other: "🖌️",
  };

  const icon = typeToIconMap[type];
  const { classes } = useStyles({ isActive: isActionActive });

  return (
    <div className={classes.CardHeader}>
      <div className={classes.iconLabel}>
        <div className={classes.signpostingIcon}>
          <Typography component="span" variant="emoji">
            {icon}
          </Typography>
        </div>
        <Typography variant="subtitle.standard" className={classes.cardType}>
          {type}
        </Typography>
      </div>
      {ActionIcon && onActionClick && (
        <IconButton
          onClick={onActionClick}
          size="small"
        >
          <ActionIcon className={classes.actionIcon} />
        </IconButton>
      )}
    </div>
  );
};

export default CardHeader;