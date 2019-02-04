import Dashboard from "views/Dashboard/Dashboard";
import createProject from "views/createProject/createProject";
import TableList from "views/TableList/TableList";
import editProject from "views/editProject/editProject";

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
  {
    path: "/editProject",
    component: editProject,
    invisible: true
  },
  {
    redirect: true,
    path: "/", to: "/dashboard",
    name: "Dashboard"
  },
];

export default dashboardRoutes;
