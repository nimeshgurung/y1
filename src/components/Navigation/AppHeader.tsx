import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  appHeader: {
    width: "100%",
    height: 56,
    paddingRight: theme.spacing(2),
    justifyContent: "flex-start",
    alignItems: "center",
    display: "inline-flex",
    backgroundColor: theme.palette.neutral[20],
  },
  breadcrumb: {
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
  },
  signpostingIcon: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "inline-flex",
  },
  iconTypography: {
    width: 16,
    height: 16,
    textAlign: "center",
    color: theme.palette.neutral[70],
    fontSize: 16,
    fontFamily: "Roboto Flex",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0.32px",
    wordWrap: "break-word",
  },
  links: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: theme.spacing(1),
    display: "flex",
  },
  breadcrumbItem: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),
    display: "flex",
  },
  breadcrumbItemTypography: {
    color: theme.palette.neutral[100],
    fontSize: 16,
    fontFamily: "Roboto Flex",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "0.32px",
    wordWrap: "break-word",
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.appHeader}>
      <Box className={classes.breadcrumb}>
        <Box className={classes.signpostingIcon}>
          <Typography className={classes.iconTypography}>🚀</Typography>
        </Box>
        <Box className={classes.links}>
          <Box className={classes.breadcrumbItem}>
            <Typography className={classes.breadcrumbItemTypography}>
              Initiatives
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;