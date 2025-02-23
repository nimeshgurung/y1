import { ButtonBase, Collapse, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useState } from "react";
import { Plus, Minus } from "iconoir-react";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 320,
    display: "flex",
    flexDirection: "column",
  },
  section: {
    borderBottom: `1px solid ${theme.palette.neutral[40]}`,
  },
  titleArea: {
    width: "100%",
    height: 44,
    padding: theme.spacing(4, 5, 0, 4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: "1 1 0",
    textAlign: "left",
  },
  iconButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.neutral[60],
  },
  content: {
    padding: theme.spacing(4, 4, 5, 4),
  },
  inputRow: {
    display: "flex",
    gap: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

interface FormAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export const FormAccordion = ({
  title,
  children,
  defaultExpanded = false,
  className,
}: FormAccordionProps) => {
  const { classes, cx } = useStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.section}>
        <ButtonBase
          onClick={toggleExpand}
          className={classes.titleArea}
          disableRipple
        >
          <Typography
            variant="subtitle.standard"
            className={classes.title}
            sx={{ color: (theme) => isExpanded ? theme.palette.neutral[100] : theme.palette.neutral[60] }}
          >
            {title}
          </Typography>
          <div className={classes.iconButton}>
            {isExpanded ? (
              <Minus />
            ) : (
              <Plus />
            )}
          </div>
        </ButtonBase>
        <Collapse in={isExpanded}>
          <div className={classes.content}>
            {children}
          </div>
        </Collapse>
      </div>
    </div>
  );
};