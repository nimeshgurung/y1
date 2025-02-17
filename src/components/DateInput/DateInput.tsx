import { InputBase } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "iconoir-react";
import { forwardRef, useState, useLayoutEffect } from "react";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 123,
    height: theme.spacing(8), // 32px
    padding: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.neutral[40]}`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.2s ease-in-out",
    background: theme.palette.neutral.white,
    position: "relative",

    "&:hover": {
      borderColor: theme.palette.blue[50],
    },

    "&:focus-within": {
      borderColor: theme.palette.blue[50],
    },

    "&.Mui-disabled": {
      background: theme.palette.neutral[10],
      borderColor: theme.palette.neutral[40],
      pointerEvents: "none",
    },
  },
  input: {
    flex: 1,
    height: theme.spacing(4.5), // 18px
    padding: theme.spacing(1),
    ...theme.typography["subtitle.standard"],
    color: theme.palette.neutral[70],
    letterSpacing: "0.22px",

    "&::placeholder": {
      color: theme.palette.neutral[60],
      opacity: 1,
    },

    "&.Mui-disabled": {
      WebkitTextFillColor: theme.palette.neutral[60],
    },

    "& input": {
      padding: 0,
      height: "100%",
    },
  },
  iconButton: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.neutral[60],
    cursor: "pointer",
    marginLeft: theme.spacing(1),

    "& svg": {
      width: theme.spacing(5), // 20px
      height: theme.spacing(5), // 20px
    },
  },
  wrapper: {
    width: '100%',
    '& .MuiInputBase-input': {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  popper: {
    '&[data-placement^="bottom"] .react-datepicker__triangle': {
      fill: theme.palette.neutral[10],
      color: theme.palette.neutral[10],
    },
    '& .react-datepicker__triangle': {
      stroke: theme.palette.neutral[40],
    },
  },
  calendar: {
    border: `1px solid ${theme.palette.neutral[40]} !important`,
    '& .react-datepicker__header__dropdown': {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-around',
    },
    '& .react-datepicker__header': {
      backgroundColor: theme.palette.neutral[10],
      borderBottom: 'none',
      paddingTop: theme.spacing(5), // 21pxa
    },
    '& .react-datepicker__month': {
      ...theme.typography["subtitle.standard"],
      marginBottom: theme.spacing(5), // 21px
    },
    '& .react-datepicker__current-month, .react-datepicker__month-dropdown-container--scroll, .react-datepicker__year-dropdown-container--scroll': {
      ...theme.typography["subtitle.standard.bold"],
      color: theme.palette.neutral[70],
    },
    '& .react-datepicker__month-dropdown-container--scroll, .react-datepicker__year-dropdown-container--scroll': {
      paddingBottom: theme.spacing(2.75), // 11px
      // For each option in the dropdown:
      '& .react-datepicker__month-option, & .react-datepicker__year-option': {
        backgroundColor: theme.palette.neutral[10],
        color: theme.palette.neutral[70],
        padding: theme.spacing(1),
        cursor: 'pointer',
        // Hover state for options:
        '&:hover': {
          backgroundColor: theme.palette.blue[50],
          color: theme.palette.neutral.white,
        },
        // Selected option styling:
        '&.react-datepicker__month-option--selected, &.react-datepicker__year-option--selected': {
          backgroundColor: theme.palette.blue[50],
          color: theme.palette.neutral.white,
        },
      },
    },
    '& .react-datepicker__current-month': {
      paddingBottom: theme.spacing(5), // 21px
    },
    '& .react-datepicker__navigation--previous': {
      borderRightColor: theme.palette.neutral[70],
      marginTop: theme.spacing(3), // 15px
      left: theme.spacing(6.25), // 25px
    },
    '& .react-datepicker__navigation--next': {
      borderLeftColor: theme.palette.neutral[70],
      marginTop: theme.spacing(3), // 15px
      right: theme.spacing(6.25), // 25px
    },
    '& .react-datepicker__day': {
      margin: theme.spacing(1.25), // 5px
      ...theme.typography["subtitle.standard"],
    },
    '& .react-datepicker__day-names': {
      backgroundColor: theme.palette.neutral[10],
      paddingTop: theme.spacing(2), // 8px
      color: theme.palette.neutral[60],
      ...theme.typography["subtitle.standard"],
    },
    '& .react-datepicker__day-name': {
      marginRight: theme.spacing(1.25), // 5px
      marginLeft: theme.spacing(1.25), // 5px
    },
    '& .react-datepicker__day--selected': {
      backgroundColor: `${theme.palette.blue[50]} !important`,
    },
    '& .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow': {
      top: theme.spacing(0.5), // 8px
    },
    '& .react-datepicker__day--keyboard-selected': {
      marginLeft: theme.spacing(1.25), // 5px
    },
    '& .react-datepicker-time__caption': {
      color: theme.palette.neutral[70],
      ...theme.typography["subtitle.standard"],
    },
    '& .react-datepicker-time__input': {
      color: theme.palette.neutral[70],
      ...theme.typography["subtitle.standard"],
      '& input': {
        width: '110px !important',
        border: `1px solid ${theme.palette.neutral[40]}`,
        boxShadow: 'none',
      },
    },
  },
}));

export interface DateInputProps {
  className?: string;
  onChange?: (name: string | undefined, date: Date | null) => void;
  value?: Date | null;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  label?: string;
  maxDate?: Date;
  minDate?: Date;
  showTimeInput?: boolean;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, className, disabled, placeholder, ariaLabel }, ref) => {
    const { classes, cx } = useStyles();

    return (
      <div className={cx(classes.root, className, { "Mui-disabled": disabled })}>
        <InputBase
          inputRef={ref}
          readOnly
          value={value || ""}
          disabled={disabled}
          placeholder={placeholder}
          inputProps={{
            "aria-label": ariaLabel || placeholder,
            onClick: !disabled ? onClick : undefined,
            style: { cursor: !disabled ? 'pointer' : 'default' }
          }}
          classes={{
            root: classes.input,
          }}
        />
        <div
          className={classes.iconButton}
          onClick={!disabled ? onClick : undefined}
        >
          <Calendar />
        </div>
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export const DateInput = ({
  className,
  onChange,
  value,
  disabled,
  placeholder = "DD/MM/YY",
  name,
  label,
  maxDate,
  minDate,
  showTimeInput = false,
}: DateInputProps) => {
  const { classes } = useStyles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

  useLayoutEffect(() => {
    if (document.getElementById('root-portal')) {
      return;
    }
    const portal = document.createElement('div');
    portal.setAttribute('id', 'root-portal');
    portal.style.position = 'absolute';
    portal.style.top = '0';
    portal.style.zIndex = '1400';
    document.body.appendChild(portal);
    return () => {
      portal.remove();
    };
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange?.(name, date);
  };

  const format = showTimeInput ? "dd/MM/yy HH:mm" : "dd/MM/yy";

  return (
    <ReactDatePicker
      name={name}
      selected={selectedDate}
      onChange={handleDateChange}
      disabled={disabled}
      placeholderText={placeholder}
      customInput={
        <CustomInput
          placeholder={placeholder}
          className={className}
          disabled={disabled}
          ariaLabel={label}
        />
      }
      dateFormat={format}
      wrapperClassName={classes.wrapper}
      calendarClassName={classes.calendar}
      popperClassName={classes.popper}
      popperPlacement="bottom-start"
      portalId="root-portal"
      maxDate={maxDate}
      minDate={minDate}
      showMonthDropdown
      showYearDropdown
      scrollableMonthYearDropdown
      dropdownMode="scroll"
      yearDropdownItemNumber={10}
    />
  );
};