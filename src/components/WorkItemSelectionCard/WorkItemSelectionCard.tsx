import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

import TeamNameChip from "../AttributeChip/AttributeChip";
import type { CheckboxProps } from "../Checkbox/Checkbox";
import { Checkbox } from "../Checkbox/Checkbox";
import { DateChip } from "../DateChip/DateChip";

interface WorkItemSelectionCard {
  label: string;
  date?: string;
  team?: {
    id: string;
    name: string;
    type: string;
  };
  checkboxProps: CheckboxProps;
}

const useStyles = makeStyles<{ checked: boolean }>()((theme, { checked }) => ({
  card: {
    overflow: "hidden",
    backgroundColor: checked ? theme.palette.blue["10"] : "transparent",
  },
  checkbox: {
    padding: theme.spacing(0, 3),
  },
  cardHeader: {
    padding: theme.spacing(5, 6, 0, 0),
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(8),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(6),
  },
}));

export const WorkItemSelectionCard: React.FC<WorkItemSelectionCard> = ({
  label,
  date,
  team,
  checkboxProps,
}) => {
  const { classes } = useStyles({ checked: checkboxProps?.checked ?? false });

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <Checkbox className={classes.checkbox} {...checkboxProps} />
        <Typography variant="subtitle.standard">{label}</Typography>
      </div>
      <div className={classes.content}>
        {team && <TeamNameChip name={team.name} />}
        {date && <DateChip date={date} />}
      </div>
    </div>
  );
};