import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface ProgressCircleProps {
  progress?: number;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 43,
    height: 16,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(2)
  },
  iconWrapper: {
    width: 16,
    height: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const ProgressCircle = ({ progress = 0 }: ProgressCircleProps) => {
  const { classes } = useStyles();
  const radius = 7;
  const progressValue = Math.min(Math.max(progress, 0), 100);

  // Calculate coordinates for the arc
  const getCoordinates = (percentage: number) => {
    const angle = (percentage / 100) * 360;
    const angleInRadians = (angle - 90) * (Math.PI / 180);
    const x = 8 + radius * Math.cos(angleInRadians);
    const y = 8 + radius * Math.sin(angleInRadians);
    const largeArc = angle > 180 ? 1 : 0;

    return {
      x,
      y,
      largeArc
    };
  };

  const coords = getCoordinates(progressValue);
  const d = progressValue === 100
    ? `M 8 8 m -${radius} 0 a ${radius} ${radius} 0 1 1 ${radius * 2} 0 a ${radius} ${radius} 0 1 1 -${radius * 2} 0`
    : `M 8 8 L 8 1 A 7 7 0 ${coords.largeArc} 1 ${coords.x} ${coords.y} Z`;

  return (
    <div className={classes.root}>
      <div className={classes.iconWrapper}>
        <svg width="16" height="16" viewBox="0 0 16 16">
          <circle
            cx="8"
            cy="8"
            r={radius}
            fill="transparent"
            stroke="#2E90FA"
            strokeWidth="1"
            opacity={0.2}
          />
          <path
            d={d}
            fill="#2E90FA"
            style={{ transition: 'd 0.3s ease' }}
          />
        </svg>
      </div>
      <Typography variant="caption.standard" color="neutral.70">
        {progress}%
      </Typography>
    </div>
  );
};

export default ProgressCircle;