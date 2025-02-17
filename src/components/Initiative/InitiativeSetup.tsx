import { makeStyles } from "tss-react/mui";

import { Card } from "../Card/Card";

import { MOCK_INITIATIVES } from "./InitiativeCardPage";
import { InitiativeSetupLayout } from "./InitiativeSetupLayout";

const useStyles = makeStyles()((theme) => ({
  setupSection: {
    display: "flex",
    gap: theme.spacing(4),
  },
  cardIcon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.text.secondary,
  },
  cardContent: {
    flex: 1,
  },
  detailsSection: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.neutral[30]}`,
    padding: theme.spacing(4),
  },
  detailsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: theme.spacing(2),
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing(6),
  },
}));

export const InitiativeSetup: React.FC = () => {
  const { classes } = useStyles();

  return (
    <InitiativeSetupLayout>
      <div className={classes.gridContainer}>
        {MOCK_INITIATIVES.map((initiative, index) => (
          <Card key={index} {...initiative} />
        ))}
      </div>
    </InitiativeSetupLayout>
  );
};