import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import type { MenuProps } from '@mui/material/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { makeStyles } from 'tss-react/mui';
import type { AutocompleteGroupedOption } from '@mui/material/useAutocomplete';
import type { HTMLAttributes } from 'react';

const useStyles = makeStyles<{ anchorEl: HTMLDivElement | null }>()((theme, { anchorEl }) => ({
  popupPaper: {
    width: anchorEl?.clientWidth ?? '200px',
    margin: '0px',
    padding: '0px',
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.neutral.white,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.neutral[40]}`,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  popupList: {
    margin: '0px',
    padding: '0px',
  },
  listbox: {
    width: '100%',
    margin: 0,
    padding: 0,
    maxHeight: 200,
    overflow: 'auto',
  },
  option: {
    ...theme.typography["caption.standard"],
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.blue[10],
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.blue[20],
      '&:hover': {
        backgroundColor: theme.palette.blue[20],
      },
    },
  },
  highlight: {
    fontWeight: 500,
    color: theme.palette.blue[50],
  },
}));

interface HighlightedTextProps {
  text: string;
  query: string;
}

const HighlightedText = ({ text, query }: HighlightedTextProps) => {
  const { classes } = useStyles({ anchorEl: null });

  // Only attempt to match if there's a query
  if (!query) {
    return <span>{text}</span>;
  }

  const matches = match(text, query, { insideWords: true, findAllOccurrences: true });
  const parts = parse(text, matches);

  return (
    <div>
      {parts.map((part: { text: string; highlight?: boolean }, index: number) => (
        <span
          key={`${part.text}-${index}`}
          className={part.highlight ? classes.highlight : undefined}
        >
          {part.text}
        </span>
      ))}
    </div>
  );
};

export interface ListBoxProps<T> {
  groupedOptions: T[] | AutocompleteGroupedOption<T>[];
  getOptionProps: (props: { option: T; index: number }) => HTMLAttributes<HTMLLIElement>;
  getListboxProps: () => HTMLAttributes<HTMLUListElement>;
  getOptionLabel: (option: T) => string;
  query: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  anchorEl: React.RefObject<HTMLDivElement | null>;
  MenuProps?: Partial<MenuProps>;
}

const ListBox = <T extends { id?: string | number }>({
  query,
  groupedOptions,
  getListboxProps,
  getOptionProps,
  getOptionLabel,
  open,
  setOpen,
  anchorEl,
  MenuProps = {},
}: ListBoxProps<T>) => {
  const { classes } = useStyles({ anchorEl: anchorEl.current });

  return (
    <Menu
      anchorEl={anchorEl.current}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      disableEnforceFocus
      disableAutoFocus
      open={Boolean(open && groupedOptions?.length)}
      onClose={() => setOpen(false)}
      classes={{
        paper: classes.popupPaper,
        list: classes.popupList,
        root: classes.popupList,
      }}
      hideBackdrop
      {...MenuProps}
    >
      <ul className={classes.listbox} {...getListboxProps()}>
        {groupedOptions.map((option, index) => {
          const item = 'options' in option ? option.options[0] : option;
          return (
            <MenuItem
              classes={{
                root: classes.option,
              }}
              {...getOptionProps({ option: item, index })}
              key={item.id ?? index}
            >
              <HighlightedText text={getOptionLabel(item)} query={query} />
            </MenuItem>
          );
        })}
      </ul>
    </Menu>
  );
};

export default ListBox;