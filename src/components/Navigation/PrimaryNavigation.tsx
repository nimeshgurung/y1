import Paper from "@mui/material/Paper";
import {
  Archery as ArcheryIcon,
  Bookmark as BookmarkIcon,
  Folder as FolderIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  Rocket as RocketIcon,
  Settings as SettingsIcon,
} from "iconoir-react";
import { makeStyles } from "tss-react/mui";

import { AppLogo } from "../AppLogo";

import { PrimaryNavigationItem } from "./PrimaryNavigationItem";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: theme.spacing(18), // 72px
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.neutral[20],
    borderRadius: 0,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    gap: theme.spacing(6),
    paddingTop: theme.spacing(4),
  },
}));

export const PrimaryNavigation: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <nav className={classes.nav}>
        <AppLogo />
        <PrimaryNavigationItem icon={<HomeIcon />} label="Home" to="/" />
        <PrimaryNavigationItem icon={<ArcheryIcon />} label="OKRs" to="/okrs" />
        <PrimaryNavigationItem
          icon={<RocketIcon />}
          label="Initiatives"
          to="/initiatives"
        />
        <PrimaryNavigationItem icon={<GroupIcon />} label="Teams" to="/teams" />
        <PrimaryNavigationItem
          icon={<FolderIcon />}
          label="Custom Portfolio"
          to="/custom-portfolio"
        />
        <PrimaryNavigationItem
          icon={<BookmarkIcon />}
          label="Saved"
          to="/saved"
        />
        <PrimaryNavigationItem
          icon={<SettingsIcon />}
          label="Settings"
          to="/settings"
        />
      </nav>
    </Paper>
  );
};