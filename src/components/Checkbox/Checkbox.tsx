import type { CheckboxProps as MaterialUiCheckboxProps } from "@mui/material/Checkbox";
import MaterialUiCheckbox from "@mui/material/Checkbox";
import { Check } from "iconoir-react";
import { makeStyles } from "tss-react/mui";

import { theme } from "../../theme/theme";

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: 0,
    verticalAlign: "top",

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    width: 16,
    height: 16,
    border: `1px solid ${theme.palette.custom.border.standard}`,
    borderRadius: theme.spacing(1),

    "input:hover ~ &": {
      border: `1px solid ${theme.palette.blue["50"]}`,
    },
    "input:active ~ &": {
      border: `1px solid ${theme.palette.blue["50"]}`,
    },
    "input:disabled ~ &": {
      backgroundColor: theme.palette.neutral["30"],
    },
  },
  checkedIcon: {
    width: 16,
    height: 16,
    backgroundColor: theme.palette.blue["50"],
    border: `1px solid ${theme.palette.blue["50"]}`,
    position: "relative",
    borderRadius: theme.spacing(1),

    "& svg": {
      position: "absolute",
      top: 1,
      left: 1,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.blue["50"],
      border: `1px solid ${theme.palette.blue["50"]}`,
    },
    "input:active ~ &": {
      backgroundColor: theme.palette.blue["50"],
      border: `1px solid ${theme.palette.blue["50"]}`,
    },
    "input:disabled ~ &": {
      backgroundColor: theme.palette.neutral["30"],
      border: `1px solid ${theme.palette.custom.border.standard}`,

      "& svg": {
        color: theme.palette.neutral["60"],
      },
    },
  },
}));

export type CheckboxProps = MaterialUiCheckboxProps & {
  overrideClasses?: Record<string, string>;
};

export const Checkbox = ({ overrideClasses, ...props }: CheckboxProps) => {
  const { classes, cx } = useStyles();

  return (
    <MaterialUiCheckbox
      disableRipple
      icon={<span className={classes.icon} />}
      checkedIcon={
        <span className={classes.checkedIcon}>
          <Check width={12} height={12} color={theme.palette.neutral.white} />
        </span>
      }
      classes={{
        root: cx(classes.root, overrideClasses?.root),
      }}
      {...props}
    />
  );
};