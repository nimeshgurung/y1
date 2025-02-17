import { useState } from "react";
import { NavLink } from "react-router";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

interface SecondaryNavigationItemProps {
  label: string;
  to: string;
}

const useStyles = makeStyles()((theme) => ({
  container: {
    minWidth: 184,
    width: "100%",
    padding: theme.spacing(2),
    overflow: "hidden",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none", // Remove default anchor underline
    border: "1px solid transparent",
    borderRadius: theme.spacing(1),
    /**
     * This drive the color of the ripple effect on press
     */
    color: theme.palette.neutral[70],
    outline: "none",
    "&:hover": {
      background: theme.palette.neutral[30],
    },
    "&.active": {
      background: theme.palette.neutral.white,
      boxShadow: "0px 2px 1px -1px rgba(28, 28, 28, 0.08)",
      border: `1px solid ${theme.palette.neutral[40]}`,
    },
  },
  iconLabel: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    flex: "1 1 0",
    padding: theme.spacing(0.5),
    justifyContent: "flex-start",
  },
}));

const SecondaryNavigationItem: React.FC<SecondaryNavigationItemProps> = ({
  label,
  to,
}) => {
  const { classes, cx } = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      to={to}
      end
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {({ isActive }: { isActive: boolean }) => (
        <ButtonBase
          component="div"
          className={cx([classes.container, { active: isActive }])}
          sx={{
            "& .MuiTouchRipple-child": {
              backgroundColor: (theme) => theme.palette.neutral[70],
            },
          }}
        >
          <div className={classes.iconLabel}>
            <Typography
              variant={
                isActive ? "subtitle.standard.bold" : "subtitle.standard"
              }
              sx={{
                color: isActive || isHovered ? "neutral.100" : "neutral.70",
              }}
            >
              {label}
            </Typography>
          </div>
        </ButtonBase>
      )}
    </NavLink>
  );
};

export default SecondaryNavigationItem;