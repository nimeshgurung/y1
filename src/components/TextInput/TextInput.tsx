import { InputBase, InputBaseProps } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 296,
    height: 32,
    padding: theme.spacing(2), // 8px
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.neutral[40]}`,
    display: "inline-flex",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      borderColor: theme.palette.blue[60],
    },

    "&.Mui-focused": {
      borderColor: theme.palette.blue[60],
    },

    "&.Mui-disabled": {
      background: theme.palette.neutral[10],
      borderColor: theme.palette.neutral[40],
    },
  },
  input: {
    ...theme.typography["caption.standard"],
    color: theme.palette.neutral[70],
    padding: 0,

    "&::placeholder": {
      color: theme.palette.neutral[60],
      opacity: 1,
    },

    "&.Mui-disabled": {
      WebkitTextFillColor: theme.palette.neutral[60],
    },
  },
}));

export interface TextInputProps extends Omit<InputBaseProps, "classes"> {
  className?: string;
}

export const TextInput = ({ className, ...props }: TextInputProps) => {
  const { classes, cx } = useStyles();

  return (
    <InputBase
      classes={{
        root: cx(classes.root, className),
        input: classes.input,
      }}
      {...props}
    />
  );
};