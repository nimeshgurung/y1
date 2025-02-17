import { Tooltip as MuiTooltip, type TooltipProps as MuiTooltipProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  tooltip: {
    padding: theme.spacing(1.5, 2),
    background: theme.palette.neutral[100],
    boxShadow: '0px 0px 16px rgba(28, 28, 28, 0.16)',
    borderRadius: theme.shape.borderRadius,
    ...theme.typography['caption.standard'],
    color: theme.palette.neutral.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jumbo: {
    padding: theme.spacing(4),
    background: theme.palette.neutral[80],
    maxWidth: 240,
    minHeight: 56,
    borderRadius: theme.spacing(2),
    ...theme.typography['caption.standard'],
    lineHeight: theme.spacing(4),
    letterSpacing: '0.22px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: theme.palette.neutral[100],
    '&::before': {
      boxShadow: '0px 0px 16px rgba(28, 28, 28, 0.16)',
    },
  }
}));

export interface TooltipProps extends Omit<MuiTooltipProps, 'classes'> {
  /**
   * The variant of the tooltip.
   * @default "standard"
   */
  variant?: 'standard' | 'jumbo';
}

export const Tooltip = ({
  children,
  variant = 'standard',
  enterDelay = 100,
  leaveDelay = 0,
  ...props
}: TooltipProps) => {
  const { classes, cx } = useStyles();

  return (
    <MuiTooltip
      {...props}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      disableFocusListener={false}
      disableHoverListener={false}
      disableTouchListener={false}
      arrow={variant === 'standard' ? true : false}
      PopperProps={{
        ...props.PopperProps,
      }}
      classes={{
        tooltip: cx(classes.tooltip, {
          [classes.jumbo]: variant === 'jumbo'
        }),
        arrow: cx(classes.arrow),
      }}
    >
      {children}
    </MuiTooltip>
  );
};