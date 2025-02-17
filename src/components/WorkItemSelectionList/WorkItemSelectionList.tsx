import type { ReactNode } from "react";
import { makeStyles } from "tss-react/mui";

interface WorkItemSelectionList {
  children: ReactNode;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    border: `1px solid ${theme.palette.custom.border.standard}`,
    borderRadius: theme.spacing(1),

    "& > div": {
      borderBottom: `1px solid ${theme.palette.custom.border.standard}`,
    },
    "& > :last-child": {
      borderWidth: `0px`,
    },
  },
}));

export const WorkItemSelectionList: React.FC<WorkItemSelectionList> = ({
  children,
}) => {
  const { classes } = useStyles();

  return <div className={classes.root}>{children}</div>;
};