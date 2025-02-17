import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { makeStyles } from "tss-react/mui";

import type { ContextMenuItemProps } from "./ContextMenuItem";
import { ContextMenuItem } from "./ContextMenuItem";
import { ContextMenuTab } from "./ContextMenuTab";

interface StyleProps {
  width?: number | string;
}

const useStyles = makeStyles<StyleProps>()((theme, { width }) => ({
  root: {
    backgroundColor: theme.palette.neutral[90],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    width: width || 232,
    overflow: "hidden",
  },
  tabs: {
    display: "flex",
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  section: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(1),
    },
  },
  divider: {
    backgroundColor: theme.palette.neutral[70],
    margin: theme.spacing(1, 0),
  },
}));

export interface ContextMenuTab {
  label: string;
  sections: ContextMenuSection[];
}

export interface ContextMenuSection {
  items: ContextMenuItemProps[];
}

interface ContextMenuProps {
  sections?: ContextMenuSection[];
  tabs?: ContextMenuTab[];
  defaultTabIndex?: number;
  width?: number | string;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  sections = [],
  tabs = [],
  defaultTabIndex = 0,
  width,
}) => {
  const { classes } = useStyles({ width });
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabIndex);

  const activeSections =
    tabs.length > 0 ? tabs[activeTabIndex].sections : sections;

  return (
    <Paper className={classes.root} elevation={4}>
      {tabs.length > 0 && (
        <>
          <Box className={classes.tabs}>
            {tabs.map((tab, index) => (
              <ContextMenuTab
                key={index}
                label={tab.label}
                active={index === activeTabIndex}
                onClick={() => setActiveTabIndex(index)}
              />
            ))}
          </Box>
          <Divider className={classes.divider} />
        </>
      )}

      {activeSections.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          {sectionIndex > 0 && <Divider className={classes.divider} />}
          <div className={classes.section}>
            {section.items.map((item, itemIndex) => (
              <ContextMenuItem key={itemIndex} {...item} />
            ))}
          </div>
        </Fragment>
      ))}
    </Paper>
  );
};