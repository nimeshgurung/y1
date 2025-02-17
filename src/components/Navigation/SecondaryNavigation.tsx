import { Fragment } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

import SecondaryNavigationItem from "./SecondaryNavigationItem";

interface NavigationSection {
  title?: string;
  items: {
    label: string;
    to: string;
  }[];
}

interface SecondaryNavigationProps {
  sections: NavigationSection[];
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 224,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    height: "100%",
    borderRight: "1px solid",
    borderColor: theme.palette.neutral[40],
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    padding: theme.spacing(4),
  },
  sectionTitle: {
    padding: theme.spacing(3),
  },
  navigationList: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 3),
    gap: theme.spacing(1),
  },
  navigationListNoPadding: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: theme.spacing(1),
  },
}));

const SecondaryNavigation: React.FC<SecondaryNavigationProps> = ({
  sections,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      {sections.map((section, index) => (
        <Fragment key={section.title || `section-${index}`}>
          {index > 0 && <Divider />}
          <div className={classes.section}>
            {section.title && (
              <Typography
                variant="caption.standard"
                color="neutral.60"
                className={classes.sectionTitle}
              >
                {section.title}
              </Typography>
            )}
            <div
              className={
                section.title
                  ? classes.navigationList
                  : classes.navigationListNoPadding
              }
            >
              {section.items.map((item) => (
                <SecondaryNavigationItem
                  key={item.to}
                  label={item.label}
                  to={item.to}
                />
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </Box>
  );
};

export default SecondaryNavigation;