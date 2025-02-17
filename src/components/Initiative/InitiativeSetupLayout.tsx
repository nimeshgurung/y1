import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";

import AppHeader from "../Navigation/AppHeader";
import { PrimaryNavigation } from "../Navigation/PrimaryNavigation";
import SecondaryNavigation from "../Navigation/SecondaryNavigation";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  secondary: {
    width: 240,
    paddingTop: theme.spacing(6),
    borderRight: `1px solid ${theme.palette.neutral[40]}`,
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
  },
}));

interface InitiativeSetupLayoutProps {
  children: React.ReactNode;
}

export const InitiativeSetupLayout: React.FC<InitiativeSetupLayoutProps> = ({
  children,
}) => {
  const { classes } = useStyles();

  // Example sections for the SecondaryNavigation. Update as needed.
  const sections = [
    {
      items: [
        { label: "Details", to: "/initiatives/setup/details" },
        { label: "Budgets & Costs", to: "/initiatives/setup/budgets" },
        { label: "Book of Work", to: "/initiatives/setup/book-of-work" },
      ],
    },
    {
      title: "Planning",
      items: [
        { label: "Timeline", to: "/initiatives/setup/timeline" },
        { label: "Resources", to: "/initiatives/setup/resources" },
        { label: "Dependencies", to: "/initiatives/setup/dependencies" },
      ],
    },
    {
      title: "Documentation",
      items: [
        { label: "Requirements", to: "/initiatives/setup/requirements" },
        { label: "Technical Specs", to: "/initiatives/setup/technical" },
        { label: "Guidelines", to: "/initiatives/setup/guidelines" },
      ],
    },
  ];

  return (
    <Box className={classes.root}>
      <PrimaryNavigation />
      <Box className={classes.content}>
        <AppHeader />
        <Box className={classes.main}>
          <SecondaryNavigation sections={sections} />
          <div className={classes.childrenContainer}>{children}</div>
        </Box>
      </Box>
    </Box>
  );
};