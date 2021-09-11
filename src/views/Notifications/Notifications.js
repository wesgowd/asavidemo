/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = (place) => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Notificaciones</h4>
        <p className={classes.cardCategoryWhite}>útiles para mensajes del sistema, de usuarios, etc.</p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={9}>
            <br />
            <SnackbarContent
              message={
                "Notificación # 1"
              }
              close
              icon={AddAlert}
              color="success"
            />
            <SnackbarContent
              message={
                "Notificación # 2"
              }
              close
              icon={AddAlert}
              color="info"
            />
            <SnackbarContent
              message={
                "Notificación # 3"
              }
              close
              icon={AddAlert}
            />
            <SnackbarContent
              message={
                "Notificación # 4"
              }
              close
              icon={AddAlert}
              color="warning"
            />
            <SnackbarContent
              message={
                "Notificación # 5"
              }
              close
              icon={AddAlert}
              color="danger"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <h5>Tipos</h5>
            <br />
            <SnackbarContent
              message={
                'INFO - Informativa'
              }
              color="info"
            />
            <SnackbarContent
              message={
                'SUCCESS - Positiva'
              }
              color="success"
            />
            <SnackbarContent
              message={
                'WARNING - Alerta'
              }
              color="warning"
            />
            <SnackbarContent
              message={
                'DANGER - Peligro'
              }
              color="danger"
            />
            <SnackbarContent
              message={
                'REGULAR - Regular'
              }
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <h5>
              Posición de las notificaciones
              <br />
              <small>Clic para ver ejemplos</small>
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tl")}
                >
                  Arriba izquierda
                </Button>
                <Snackbar
                  place="tl"
                  color="info"
                  icon={AddAlert}
                  message="Notificación"
                  open={tl}
                  closeNotification={() => setTL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tc")}
                >
                  Arriba centro
                </Button>
                <Snackbar
                  place="tc"
                  color="info"
                  icon={AddAlert}
                  message="Notificación"
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tr")}
                >
                  Arriba derecha
                </Button>
                <Snackbar
                  place="tr"
                  color="info"
                  icon={AddAlert}
                  message="Notificación"
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bl")}
                >
                  Abajo izquierda
                </Button>
                <Snackbar
                  place="bl"
                  color="info"
                  icon={AddAlert}
                  message="Notificación"
                  open={bl}
                  closeNotification={() => setBL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bc")}
                >
                  Abajo centro
                </Button>
                <Snackbar
                  place="bc"
                  color="info"
                  icon={AddAlert}
                  message="Notificación"
                  open={bc}
                  closeNotification={() => setBC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("br")}
                >
                  Abajo derecha
                </Button>
                <Snackbar
                  place="br"
                  color="info"
                  icon={AddAlert}
                  message="Notificación"
                  open={br}
                  closeNotification={() => setBR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
