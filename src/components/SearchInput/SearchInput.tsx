import { type SyntheticEvent, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Search } from 'iconoir-react';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import type { MenuProps } from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  FilterOptionsState,
} from '@mui/material/useAutocomplete';
import useAutocomplete from '@mui/material/useAutocomplete';
import { makeStyles } from 'tss-react/mui';

import ListBox from  './ListBox';

const useStyles = makeStyles<{ focused: boolean; disabled?: boolean; width?: string | number }>()((theme, { focused, disabled, width }) => ({
  root: {
    height: theme.spacing(8), // 32px
    padding: theme.spacing(2), // 8px
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${focused ? theme.palette.blue[50] : theme.palette.neutral[40]}`,
    background: disabled ? theme.palette.neutral[10] : theme.palette.neutral.white,
    display: 'flex',
    alignItems: 'center',
    width: width || '100%',
    boxSizing: 'border-box',
  },
  label: {
    marginBottom: theme.spacing(1),
    ...theme.typography["subtitle.standard"],
    color: theme.palette.custom.text.standard,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
    height: '100%',
    width: '100%',
  },
  input: {
    ...theme.typography["caption.standard"],
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%',
    padding: 0,
    margin: 0,
    marginLeft: theme.spacing(1),
    height: '100%',
    '&::placeholder': {
      color: theme.palette.neutral[60],
    }
  },
  startAdornment: {
    color: theme.palette.neutral[60],
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    height: '100%',
  },
  endAdornment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexShrink: 0,
    minWidth: theme.spacing(5),
    height: '100%',
    marginLeft: 'auto',
  },
}));

export interface SearchInputProps<T> {
  id?: string;
  label?: string | ReactNode;
  inputValue: string;
  placeholder?: string;
  disabled?: boolean;
  options: readonly T[];
  getOptionLabel: (option: T) => string;
  loading?: boolean;
  value?: T;
  className?: string;
  containerClassName?: string;
  startAdornment?: () => ReactNode;
  endAdornment?: (props: { loading?: boolean }) => ReactNode;
  blurOnSelect?: boolean;
  disableClearable?: boolean;
  clearOnBlur?: boolean;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  filterOptions?: (options: readonly T[], state: FilterOptionsState<T>) => T[];
  onChange?: (
    event: SyntheticEvent,
    value: T | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>
  ) => void;
  onInputChange?: (
    event: SyntheticEvent,
    value: string,
    reason: string
  ) => void;
  MenuProps?: Partial<MenuProps>;
  width?: string | number;
}

const SearchInput = <T extends { id: string | number } = { id: string | number }>({
  id = 'search-input',
  label,
  inputValue,
  placeholder = 'Search...',
  disabled,
  options,
  getOptionLabel,
  loading,
  value,
  className,
  containerClassName,
  startAdornment,
  endAdornment,
  blurOnSelect,
  disableClearable,
  clearOnBlur,
  isOptionEqualToValue,
  filterOptions,
  onChange,
  onInputChange,
  MenuProps,
  width,
}: SearchInputProps<T>) => {
  const [focused, setFocused] = useState(false);
  const { classes, cx } = useStyles({ focused, disabled, width });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id,
    options,
    getOptionLabel,
    inputValue,
    onInputChange,
    onChange,
    value,
    blurOnSelect,
    isOptionEqualToValue,
    disableClearable,
    clearOnBlur,
    filterOptions,
  });

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    setDropdownOpen(true);
    getInputProps().onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    setDropdownOpen(false);
    getInputProps().onBlur?.(event);
  };

  return (
    <div className={containerClassName} {...getRootProps()}>
      <FormControl
        fullWidth
        variant="outlined"
        className={cx(classes.root, className)}
        ref={ref}
      >
        {typeof label === 'string' ? (
          <Typography
            variant="subtitle.standard"
            component="label"
            className={classes.label}
            {...getInputLabelProps()}
          >
            {label}
          </Typography>
        ) : (
          label
        )}
        <div className={classes.inputContainer}>
          <InputAdornment position="start" className={classes.startAdornment}>
            {startAdornment ? startAdornment() : <Search width={16} height={16} strokeWidth={1.2} />}
          </InputAdornment>
          <input
            {...getInputProps()}
            className={classes.input}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
          />
          <InputAdornment position="end" className={classes.endAdornment}>
            {endAdornment
              ? endAdornment({ loading })
              : loading
              ? <CircularProgress size={16} />
              : <span />}
          </InputAdornment>
        </div>
      </FormControl>
      <ListBox
        query={inputValue}
        groupedOptions={groupedOptions}
        getListboxProps={getListboxProps}
        getOptionProps={getOptionProps}
        getOptionLabel={getOptionLabel}
        open={dropdownOpen}
        setOpen={setDropdownOpen}
        anchorEl={ref}
        MenuProps={MenuProps}
      />
    </div>
  );
};

export default SearchInput;