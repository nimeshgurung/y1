import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    height: theme.spacing(3.5), // 14px
    display: "inline-flex",
    alignItems: "center",
    textTransform: "uppercase",
  },
}));

interface DateChipProps {
  date?: string;
  className?: string;
}

export const DateChip: React.FC<DateChipProps> = ({
  date = "DD MMM YY",
  className,
}) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="caption.small" color="neutral.60">
        {date}
      </Typography>
    </div>
  );
};