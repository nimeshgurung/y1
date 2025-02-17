import { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { List, ViewGrid } from "iconoir-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { CardProps } from "../Card/Card";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { ControlGroup } from "../ControlGroup/ControlGroup";
import { InitiativeCardLayout } from "./InitiativeCardLayout";

const useStyles = makeStyles()((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(6),
  },
  tabs: {
    display: "flex",
    gap: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  tab: {
    cursor: "pointer",
    ...theme.typography["body.standard"],
    color: theme.palette.custom.text.subtle,
    "&.active": {
      color: theme.palette.custom.text.strong,
      fontWeight: 500,
    },
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing(3),
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
}));

export const MOCK_INITIATIVES: CardProps[] = [
  {
    type: "Initiative",
    status: "inProgress",
    ragStatus: "amber",
    lastUpdated: "Yesterday",
    name: "User has entered the initiative name here and it can span multiple lines",
    teamName: "SYDNEY SIEROTA",
    teamInitial: "S",
    date: "25 MAR 25",
    progress: 75,
    commentCount: 3,
    isBookmarked: false,
  },
  {
    type: "Initiative",
    status: "planned",
    ragStatus: "green",
    lastUpdated: "Just now",
    name: "This is a new initiative which was requested by an IM and has been added by the Blueprint team",
    teamName: "MANAGER NOT SET",
    teamInitial: "M",
    date: "25 MAR 25",
    progress: 0,
    commentCount: 0,
    isBookmarked: false,
  },
  {
    type: "Initiative",
    status: "inProgress",
    ragStatus: "red",
    lastUpdated: "Yesterday",
    name: "User has entered the initiative name here and it can span multiple lines",
    teamName: "SYDNEY SIEROTA",
    teamInitial: "S",
    date: "25 MAR 25",
    progress: 50,
    commentCount: 1,
    isBookmarked: true,
  },
  {
    type: "Objective",
    status: "planned",
    ragStatus: "green",
    lastUpdated: "2 days ago",
    name: "Implement new customer feedback system across all product lines",
    teamName: "ALEX CHEN",
    teamInitial: "A",
    date: "15 APR 25",
    progress: 100,
  },
  {
    type: "Objective",
    status: "inProgress",
    ragStatus: "amber",
    lastUpdated: "5 hours ago",
    name: "Develop AI-powered analytics dashboard for real-time insights",
    teamName: "MARIA RODRIGUEZ",
    teamInitial: "M",
    date: "30 JUN 25",
    progress: 35,
  },
  {
    type: "Objective",
    status: "inProgress",
    ragStatus: "red",
    lastUpdated: "1 week ago",
    name: "Legacy system migration to cloud infrastructure",
    teamName: "JAMES WILSON",
    teamInitial: "J",
    date: "10 MAY 25",
    progress: 20,
  },
  {
    type: "Objective",
    status: "inProgress",
    ragStatus: "green",
    lastUpdated: "3 days ago",
    name: "Mobile app redesign and performance optimization",
    teamName: "EMMA TAYLOR",
    teamInitial: "E",
    date: "01 JUL 25",
    progress: 60,
  },
  {
    type: "Objective",
    status: "planned",
    ragStatus: "amber",
    lastUpdated: "1 day ago",
    name: "Implement enhanced security protocols across all platforms",
    teamName: "DAVID KUMAR",
    teamInitial: "D",
    date: "20 AUG 25",
    progress: 0,
  },
  {
    type: "Objective",
    status: "inProgress",
    ragStatus: "green",
    lastUpdated: "12 hours ago",
    name: "International market expansion and localization project",
    teamName: "SOPHIA WANG",
    teamInitial: "S",
    date: "15 SEP 25",
    progress: 45,
  },
  {
    type: "Objective",
    status: "inProgress",
    ragStatus: "amber",
    lastUpdated: "4 days ago",
    name: "Q3 Performance optimization and scalability improvements",
    teamName: "RYAN PATEL",
    teamInitial: "R",
    date: "30 JUL 25",
    progress: 90,
  },
  {
    type: "Objective",
    status: "inProgress",
    ragStatus: "green",
    lastUpdated: "Today",
    name: "Strategic partnership integration and API development",
    teamName: "LISA JOHNSON",
    teamInitial: "L",
    date: "05 OCT 25",
    progress: 30,
  },

  // Add more mock initiatives as needed
];

export const InitiativeCardPage: React.FC = () => {
  const { classes } = useStyles();
  const [viewMode, setViewMode] = useState<"Grid" | "List">("Grid");
  const [activeTab, setActiveTab] = useState<"my" | "all">("my");

  const viewOptions = [
    { label: "Grid", icon: <ViewGrid /> },
    { label: "List", icon: <List /> },
  ];

  return (
    <InitiativeCardLayout>
      <Box className={classes.header}>
        <ControlGroup
          options={viewOptions}
          activeOption={viewMode}
          onChange={(option) => setViewMode(option as "Grid" | "List")}
        />
        <Button variant="primary">Request new initiative</Button>
      </Box>

      <div className={classes.tabs}>
        <Typography
          className={`${classes.tab} ${activeTab === "my" ? "active" : ""}`}
          onClick={() => setActiveTab("my")}
        >
          My initiatives
        </Typography>
        <Typography
          className={`${classes.tab} ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All initiatives
        </Typography>
      </div>

      <div className={viewMode === "Grid" ? classes.gridContainer : classes.listContainer}>
        {MOCK_INITIATIVES.map((initiative, index) => (
          <Card key={index} {...initiative} />
        ))}
      </div>
    </InitiativeCardLayout>
  );
};