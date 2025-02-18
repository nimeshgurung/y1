import {  useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

interface DropdownInputProps {
  value?: string;
  placeholder?: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: (value: string) => void;
  disabled?: boolean;
  width?: number | string;
}

interface StyleProps {
  width?: number | string;
}

const useStyles = makeStyles<StyleProps>()((theme, { width }) => ({
  wrapper: {
    position: "relative",
    width: width || 264,
  },
  dropdown: {
    height: 32,
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.custom.border.standard}`,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    cursor: "pointer",
    backgroundColor: theme.palette.neutral.white,
    "&:hover": {
      backgroundColor: theme.palette.neutral[10],
    },
  },
  dropdownFilled: {
    color: theme.palette.custom.text.standard,
    ...theme.typography["caption.standard"],
  },
  dropdownPlaceholder: {
    color: theme.palette.custom.text.subtle,
    ...theme.typography["caption.standard"],
  },
  text: {
    flex: 1,
  },
  contextMenuWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  icon: {
    width: 16,
    height: 16,
    color: theme.palette.custom.icon.standard,
  },
}));

const DropdownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.68284 6.68284C4.43086 6.43086 4.60932 6 4.96569 6L11.0343 6C11.3907 6 11.5691 6.43086 11.3172 6.68284L8.28284 9.71716C8.12663 9.87337 7.87337 9.87337 7.71716 9.71716L4.68284 6.68284Z"
      fill="currentColor"
    />
  </svg>
);

export const DropdownInput: React.FC<DropdownInputProps> = ({
  value,
  placeholder = "Select...",
  options,
  onChange,
  disabled = false,
  width,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const { classes, cx } = useStyles({ width });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={classes.wrapper}>
      <div
        ref={anchorRef}
        className={classes.dropdown}
        onClick={handleClick}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      >
        <span
          className={cx(
            classes.text,
            selectedOption ? classes.dropdownFilled : classes.dropdownPlaceholder
          )}
        >
          {selectedOption?.label || placeholder}
        </span>
        <DropdownIcon />
      </div>

      <Menu
        anchorEl={anchorRef.current}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        TransitionComponent={Fade}
        TransitionProps={{
          timeout: {
            enter: 150,
            exit: 100
          }
        }}
        slotProps={{
          paper: {
            style: {
              width: width || 264,
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
            },
            sx: {
              marginTop: "-4px",
              "& .MuiMenu-list": {
                padding: 0,
              }
            }
          }
        }}
      >
        <ContextMenu
          width={width || 264}
          sections={[
            {
              items: options.map((option) => ({
                label: option.label,
                onClick: () => handleOptionSelect(option.value),
              })),
            },
          ]}
        />
      </Menu>
    </div>
  );
};