import type { ReactNode } from "react";
import { makeStyles } from "tss-react/mui";

import { Button } from "../Button/Button";

const useStyles = makeStyles({
  name: "ControlGroup",
})((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.neutral[30],
      width: "max-content",
      borderRadius: theme.spacing(1),
      paddingBottom: 2,
    },
    active: { boxShadow: "0px 2px 1px -1px rgba(28, 28, 28, 0.08)" },
    inActive: {
      color: theme.palette.custom.text.subtle,
      "&:hover": {
        color: "inherit",
      },
    },
  };
});

export type ControlGroupProps = {
  options: { label: string; icon?: ReactNode }[];
  activeOption: string;
  onChange: (option: string) => void;
};

export const ControlGroup = ({
  options,
  activeOption,
  onChange,
}: ControlGroupProps) => {
  const { classes } = useStyles();

  if (options.length === 0) return;

  return (
    <>
      <div className={classes.root}>
        {options.map((option) => (
          <Button
            key={`control-${option.label}`}
            variant={option.label === activeOption ? "secondary" : "tertiary"}
            onClick={() => onChange(option.label)}
            className={
              option.label === activeOption ? classes.active : classes.inActive
            }
            startIcon={option.icon}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </>
  );
};