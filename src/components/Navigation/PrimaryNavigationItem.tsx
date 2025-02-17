import { NavLink } from "react-router";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

import { IconButton } from "../IconButton/IconButton";

const useStyles = makeStyles()((theme) => {
  return {
    navItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: theme.palette.custom.text.standard,
      gap: theme.spacing(1), // 4px gap between icon and label
    },
    label: {
      color: theme.palette.custom.text.standard,
      textAlign: "center",
      width: "100%",
    },
  };
});

interface PrimaryNavigationItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

export const PrimaryNavigationItem: React.FC<PrimaryNavigationItemProps> = ({
  icon,
  label,
  to,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.navItem}>
      <NavLink to={to}>
        {({ isActive }) => <IconButton isActive={isActive} icon={icon} />}
      </NavLink>
      <Typography className={classes.label} variant="caption.standard">
        {label}
      </Typography>
    </div>
  );
};