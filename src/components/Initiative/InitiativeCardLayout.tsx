import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";

import AppHeader from "../Navigation/AppHeader";
import { PrimaryNavigation } from "../Navigation/PrimaryNavigation";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.neutral[10],
    border: "1px solid",
    borderColor: theme.palette.neutral[40],
    borderTopLeftRadius: theme.spacing(1),
  },
  childrenContainer: {
    flex: 1,
    padding: theme.spacing(7),
    flexWrap: "wrap",
    overflow: "hidden",
  },
}));

interface InitiativeCardLayoutProps {
  children: React.ReactNode;
}

export const InitiativeCardLayout: React.FC<InitiativeCardLayoutProps> = ({
  children,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <PrimaryNavigation />
      <Box className={classes.content}>
        <AppHeader />
        <Box className={classes.main}>
          <div className={classes.childrenContainer}>{children}</div>
        </Box>
      </Box>
    </Box>
  );
};