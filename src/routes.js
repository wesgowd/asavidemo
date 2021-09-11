// Routes for Dashboard
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
//import LocalAtmIcon from "@material-ui/icons/LocalAtm";
//import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
//import Typography from "views/Typography/Typography.js";
//import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/estadisticas",
    name: "Estadísticas",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/panel",
    showSideB: true,
  },
  {
    path: "/perfil",
    name: "Perfil de Joe Doe",
    icon: Person,
    component: UserProfile,
    layout: "/panel",
    showSideB: false,
  },
  {
    path: "/movimientos",
    name: "Movimientos",
    icon: "content_paste",
    component: TableList,
    layout: "/panel",
    showSideB: true,
  },
  /*
  {
    path: "/cobranza",
    name: "Cobranza",
    icon: LocalAtmIcon,
    component: Typography,
    layout: "/panel",
    showSideB: true,
  },
  {
    path: "/catalogos",
    name: "Catálogos",
    icon: LibraryBooks,
    component: Typography,
    layout: "/panel",
    showSideB: true,
  },
  {
    path: "/mapa",
    name: "Rastreo",
    icon: LocationOn,
    component: Maps,
    layout: "/panel",
    showSideB: true,
  },*/
  {
    path: "/notificaciones",
    name: "Notificationes",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/panel",
    showSideB: false,
  },
  /*
  {
    path: "/reportes",
    name: "Reportes",
    icon: PictureAsPdfIcon,
    component: TableList,
    layout: "/panel",
    showSideB: true,
  },*/
];

export default dashboardRoutes;
