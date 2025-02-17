import ButtonBase from "@mui/material/ButtonBase";
import { makeStyles } from "tss-react/mui";
import React from "react";

interface ToggleItemData {
  title: string;
  description: string;
  value: string;
}

interface ToggleGroupInputProps {
  items: ToggleItemData[];
  defaultValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    minWidth: 296,
    maxWidth: "100%",
    minHeight: 60,
    background: theme.palette.neutral.white,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.neutral[40]}`,
    display: "flex",
    position: "relative",
  },
  toggleItem: {
    flex: "1 1 auto",
    minWidth: 0,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transition: "all 0.2s ease-in-out",
    "&:not(:last-child)": {
      borderRight: `1px solid ${theme.palette.neutral[40]}`,
    },
    "&[data-selected='true']": {
      background: theme.palette.blue[10],
      zIndex: 1,
      "&::after": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        border: `1px solid ${theme.palette.blue[60]}`,
        pointerEvents: "none",
        zIndex: 1,
      },
      "&:first-of-type": {
        "&::after": {
          borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
        }
      },
      "&:last-of-type": {
        "&::after": {
          borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
        }
      },
    },
    "&[data-disabled='true']": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  title: {
    width: "100%",
    textAlign: "center",
    ...theme.typography["caption.standard"],
    color: theme.palette.neutral[70],
    "[data-selected='true'] &": {
      color: theme.palette.blue[60],
      fontWeight: 600,
    },
  },
  description: {
    width: "100%",
    textAlign: "center",
    ...theme.typography["caption.standard"],
    color: theme.palette.neutral[60],
    marginTop: theme.spacing(3),
  },
}));

export const ToggleGroupInput: React.FC<ToggleGroupInputProps> = ({
  items,
  defaultValue,
  onChange,
  disabled = false,
}) => {
  const { classes } = useStyles();
  const [selectedValue, setSelectedValue] = React.useState<string>(
    defaultValue || (items?.length > 0 ? items[0].value : "")
  );

  if (!items?.length) {
    return null;
  }

  return (
    <div
      className={classes.root}
      role="radiogroup"
      aria-orientation="horizontal"
    >
      {items.map((item) => (
        <ButtonBase
          key={item.value}
          component="div"
          disabled={disabled}
          data-description-empty={!item.description ? "true" : undefined}
          onClick={() => {
            if (!disabled) {
              setSelectedValue(item.value);
              onChange(item.value);
            }
          }}
          className={classes.toggleItem}
          data-selected={item.value === selectedValue ? "true" : undefined}
          data-disabled={disabled ? "true" : undefined}
          role="radio"
          aria-checked={item.value === selectedValue}
          sx={{
            "&:hover": {
              backgroundColor: (theme) =>
                disabled ? "transparent" : theme.palette.neutral[20],
            },
            "& .MuiTouchRipple-child": {
              backgroundColor: (theme) => theme.palette.neutral[40],
            },
          }}
        >
          <div className={classes.title}>{item.title}</div>
          {item.description && (
            <div className={classes.description}>{item.description}</div>
          )}
        </ButtonBase>
      ))}
    </div>
  );
};