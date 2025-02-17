import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...theme.typography["caption.standard"],
    color: theme.palette.neutral[60],
  },
}));

interface CountAdornmentProps {
  inputValue: string;
  loading?: boolean;
  minimumCharacterCount?: number;
}

const CountAdornment = ({
  loading,
  inputValue,
  minimumCharacterCount = 3,
}: CountAdornmentProps) => {
  const { classes } = useStyles();

  if (loading) {
    return <CircularProgress size={16} />;
  }

  return inputValue.length < minimumCharacterCount ? (
    <span className={classes.root}>{`${inputValue.length}/${minimumCharacterCount}`}</span>
  ) : null;
};

export default CountAdornment;