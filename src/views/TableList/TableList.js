import React from "react";
import PropTypes from "prop-types";
// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomTable from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import RegularButton from "components/CustomButtons/Button.js";
// data
import { catSocios } from "../../variables/catalogos.js";
import {
  DGEDColumns,
  DGEDRows,
  DGCCColumns,
  DGCCRows,
} from "../../variables/exampleData.js";

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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function TableList() {
  const classes = useStyles();
  const [valueTab, setValueTab] = React.useState(0);
  const [valueRadio, setValueRadio] = React.useState("producto");
  const [selPaquete, setSelPaquete] = React.useState("");
  const [dgsModel, setDgsModel] = React.useState([
    {
      field: "tipo",
      sort: "asc",
    },
  ]);
  const [dgccModel, setDgccModel] = React.useState([
    {
      field: "socio",
      sort: "asc",
    },
  ]);

  const handleChangeTabs = (event, newValue) => {
    setValueTab(newValue);
  };
  const handleChangeRadioOp = (event) => {
    setValueRadio(event.target.value);
  };
  const handleChangeSelPaquete = (event) => {
    setSelPaquete(event.target.value);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <AppBar position="static" color="default">
          <Tabs
            value={valueTab}
            onChange={handleChangeTabs}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Emisión de documentos" {...a11yProps(0)} />
            <Tab label="Control de cargos" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={valueTab} index={0}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>
                Generar nuevo documento
              </h4>
              <p className={classes.cardCategoryWhite}>
                Llena los siguientes campos
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Tipo</FormLabel>
                    <RadioGroup
                      aria-label="tipo"
                      name="tipo"
                      value={valueRadio}
                      onChange={handleChangeRadioOp}
                      row
                    >
                      <FormControlLabel
                        value="producto"
                        control={<Radio />}
                        label="Producto"
                      />
                      <FormControlLabel
                        value="animal"
                        control={<Radio />}
                        label="Animal"
                      />
                    </RadioGroup>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <FormControl fullWidth>
                    <InputLabel id="paquete">Paquete</InputLabel>
                    <Select
                      labelId="paquete"
                      id="paquete"
                      value={selPaquete}
                      label="Paquete"
                      onChange={handleChangeSelPaquete}
                      name="paquete"
                    >
                      <MenuItem value={0}></MenuItem>
                      <MenuItem value={1}>Paquete1</MenuItem>
                      <MenuItem value={2}>Paquete2</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <Autocomplete
                      id="Socio"
                      options={catSocios}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField {...params} label="Socio" />
                      )}
                    >
                      <MenuItem value={0}></MenuItem>
                      <MenuItem value={1}>Socio1</MenuItem>
                      <MenuItem value={2}>Socio2</MenuItem>
                    </Autocomplete>
                  </FormControl>
                  <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                      <CustomInput
                        labelText="Cantidad"
                        id="cantidad"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <CustomInput
                        labelText="Folios (A -> B)"
                        id="folio"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <RegularButton color="success" size="lg">
                    Emitir documento
                  </RegularButton>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
          <Card>
            <CardHeader color="regular">
              <h4 className={classes.cardTitleWhite}>
                Documentos más recientes que emitiste tú
              </h4>
              <p className={classes.cardCategoryWhite}>Últimos 10</p>
            </CardHeader>
            <CardBody>
              <DataGrid
                autoPageSize={true}
                autoHeight={true}
                sortModel={dgsModel}
                hideFooter={true}
                pageSize={10}
                disableColumnFilter={true}
                disableColumnSelector={true}
                rows={DGEDRows}
                columns={DGEDColumns}
                onSortModelChange={(model) => setDgsModel(model)}
              />
            </CardBody>
          </Card>
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Documentos más recientes que emitiste tú
              </h4>
              <p className={classes.cardCategoryWhite}>
                Clic para editar la fila
              </p>
            </CardHeader>
            <CardBody>
              <DataGrid
                Pagination
                editMode="row"
                autoHeight={true}
                sortModel={dgccModel}
                pageSize={10}
                rows={DGCCRows}
                columns={DGCCColumns}
                onSortModelChange={(model) => setDgccModel(model)}
              />
            </CardBody>
          </Card>
        </TabPanel>
      </GridItem>
    </GridContainer>
  );
}
