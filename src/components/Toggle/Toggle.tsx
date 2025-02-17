import { Switch, SwitchProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { theme } from '../../theme/theme';

const useStyles = makeStyles()(() => ({
  root: {
    width: theme.spacing(8), // 32px
    height: theme.spacing(6), // 20px
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: theme.spacing(0.5),
      margin: 0,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.blue[60],
          opacity: 1,
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.neutral.white,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
      backgroundColor: theme.palette.neutral.white,
    },
    '& .MuiSwitch-track': {
      borderRadius: 12,
      backgroundColor: theme.palette.neutral[40],
      opacity: 1,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
    },
  },
}));

export interface ToggleProps extends Omit<SwitchProps, 'classes'> {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = ({ checked, onChange, ...props }: ToggleProps) => {
  const { classes } = useStyles();

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={classes.root}
      {...props}
    />
  );
};