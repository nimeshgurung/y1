import { makeStyles } from "tss-react/mui";

interface AppLogoProps {
  className?: string;
}

const useStyles = makeStyles()((theme) => ({
  appIcon: {
    width: theme.spacing(8), // 32px
    height: theme.spacing(8), // 32px
    borderRadius: theme.spacing(8), // 8px
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(2, "auto"),
  },
}));

export function AppLogo({ className }: AppLogoProps) {
  const { cx, classes } = useStyles();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx([classes.appIcon, className])}
    >
      <g id="Logomark">
        <circle id="Circle" cx="12" cy="12" r="12" />
        <path
          id="Shape"
          d="M9 6.49106C9 6.21986 9.21986 6 9.49106 6H13.5C15.1569 6 16.5 7.34315 16.5 9C16.5 10.6569 15.1569 12 13.5 12H9V6.49106Z"
          fill="white"
        />
        <path
          id="Shape_2"
          d="M9 12H13.5C15.1569 12 16.5 13.3431 16.5 15C16.5 16.6569 15.1569 18 13.5 18H9.49106C9.21986 18 9 17.7801 9 17.5089V12Z"
          fill="#C1D5F3"
        />
      </g>
    </svg>
  );
}