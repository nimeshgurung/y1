import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import MuiButton from "@mui/material/Button";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "Button",
})((theme) => {
  return {
    root: {
      padding: theme.spacing(3),
      borderRadius: theme.spacing(1),
      backgroundColor: "transparent",
      border: "1px solid transparent",
      cursor: "pointer",
    },
    text: {
      textTransform: "none",
      ...theme.typography["button.standard"],
    },
    primary: {
      backgroundColor: theme.palette.blue[60],
      color: theme.palette.neutral.white,
      "& path": {
        color: theme.palette.neutral.white,
      },
      "&:hover": {
        backgroundColor: theme.palette.blue[50],
      },
      "&:active": {
        backgroundColor: theme.palette.blue[70],
        border: `1px solid ${theme.palette.custom.border.standard}`,
        ...theme.typography["button.standard.bold"],
      },
      "&:disabled": {
        backgroundColor: theme.palette.neutral[30],
        color: theme.palette.neutral[60],
      },
    },
    secondary: {
      // color: theme.palette.custom.text.strong,
      border: `1px solid ${theme.palette.custom.border.standard}`,
      backgroundColor: theme.palette.neutral.white,
      "&:hover": {
        backgroundColor: theme.palette.neutral[20],
      },
      "&:active": {
        backgroundColor: theme.palette.neutral.white,
      },
      "&:disabled": {
        backgroundColor: theme.palette.neutral[30],
        color: theme.palette.neutral[60],
      },
    },
    tertiary: {
      color: theme.palette.custom.text.strong,
      "&:hover": {
        backgroundColor: theme.palette.neutral[20],
      },
      "&:active": {
        backgroundColor: theme.palette.neutral.white,
        border: `1px solid ${theme.palette.custom.border.standard}`,
        color: theme.palette.custom.text.strong,
      },
      "&:disabled": {
        backgroundColor: theme.palette.neutral[30],
        color: theme.palette.neutral[60],
      },
    },
    startIcon: {
      marginLeft: 0,
      marginRight: theme.spacing(1),
    },
    endIcon: {
      marginRight: 0,
      marginLeft: theme.spacing(1),
    },
  };
});

export type ButtonProps = Omit<MuiButtonProps, "variant"> & {
  variant?: "primary" | "secondary" | "tertiary";
};

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const { classes, cx } = useStyles();

  return (
    <MuiButton
      variant="text"
      classes={{
        root: cx([
          classes.root,
          variant === "primary" && classes.primary,
          variant === "secondary" && classes.secondary,
          variant === "tertiary" && classes.tertiary,
        ]),
        text: classes.text,
        startIcon: classes.startIcon,
        endIcon: classes.endIcon,
      }}
      disableRipple
      {...props}
    >
      {children}
    </MuiButton>
  );
};