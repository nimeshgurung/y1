import ButtonBase from "@mui/material/ButtonBase";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      padding: theme.spacing(3), // 8px padding
      borderRadius: theme.shape.borderRadius, // use theme token for border radius (usually 4px)
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      boxSizing: "border-box",
      overflow: "hidden",
      border: "1px solid transparent", // avoids content jump on hover effect
      transition: "border 0.2s ease-in-out", // smoother hover effect
      /**
       * This drives the color of the ripple effect on press
       */
      color: theme.palette.neutral[70],
      "&:hover": {
        backgroundColor: theme.palette.neutral[30],
      },
      "&.active": {
        color: theme.palette.neutral[70],
        background: theme.palette.neutral.white,
        boxShadow: "0px 2px 1px -1px rgba(28, 28, 28, 0.08)",
        border: `1px solid ${theme.palette.neutral[40]}`,
      },
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

interface IconButtonProps {
  icon: React.ReactNode;
  isActive: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, isActive }) => {
  const { classes, cx } = useStyles();

  return (
    <ButtonBase
      component="div"
      className={cx([classes.root, { active: isActive }])}
      sx={{
        "> .MuiTouchRipple-child": {
          backgroundColor: (theme) => theme.palette.neutral[70],
        },
      }}
    >
      <div className={classes.icon}>{icon}</div>
    </ButtonBase>
  );
};