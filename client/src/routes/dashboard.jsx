import Dashboard from "views/Dashboard/Dashboard";
import createProject from "views/createProject/createProject";
import TableList from "views/TableList/TableList";
// import Typography from "views/Typography/Typography";
// import Icons from "views/Icons/Icons";
// import Maps from "views/Maps/Maps";
// import Notifications from "views/Notifications/Notifications";
// import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/create",
    name: "Create Project",
    icon: "pe-7s-plus",
    component: createProject
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "pe-7s-folder",
    component: TableList
  },
  { redirect: true, 
    path: "/", to: "/dashboard",
    name: "Dashboard" }
];

export default dashboardRoutes;
