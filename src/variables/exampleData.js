// ##############################
// // // DataGrid Emitir documentos Data
// #############################
const DGEDColumns = [
  { field: "tipo", minWidth: 150, headerAlign: "center", editable: true },
  {
    field: "paquete",
    type: "number",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
  { field: "socio", minWidth: 150, headerAlign: "center", editable: true },
  {
    field: "cantidad",
    type: "number",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
  { field: "folios", minWidth: 150, headerAlign: "center", editable: true },
  {
    field: "fecha",
    type: "date",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
];

const DGEDRows = [
  {
    id: 1,
    tipo: "Animal",
    paquete: 25,
    socio: "Gonzalo",
    cantidad: 12,
    folios: "100-200",
    fecha: "05/08/2020",
  },
  {
    id: 2,
    tipo: "Animal",
    paquete: 36,
    socio: "Asavi",
    cantidad: 12,
    folios: "100-200",
    fecha: "05/08/2020",
  },
  {
    id: 3,
    tipo: "Animal",
    paquete: 19,
    socio: "Del toro",
    cantidad: 12,
    folios: "100-200",
    fecha: "05/08/2020",
  },
  {
    id: 4,
    tipo: "Animal",
    paquete: 28,
    socio: "XFarm",
    cantidad: 12,
    folios: "100-200",
    fecha: "05/08/2020",
  },
  {
    id: 5,
    tipo: "Animal",
    paquete: 23,
    socio: "Torres",
    cantidad: 12,
    folios: "100-200",
    fecha: "05/08/2020",
  },
  {
    id: 6,
    tipo: "Animal",
    paquete: 25,
    socio: "Gonzalo",
    cantidad: 12,
    folios: "100-200",
    fecha: "05/08/2020",
  },
  {
    id: 7,
    tipo: "Animal",
    paquete: 36,
    socio: "Asavi",
    cantidad: 12,
    folios: "100-200",
    fecha: "04/08/2020",
  },
  {
    id: 8,
    tipo: "Animal",
    paquete: 19,
    socio: "Del toro",
    cantidad: 12,
    folios: "100-200",
    fecha: "04/08/2020",
  },
  {
    id: 9,
    tipo: "Animal",
    paquete: 28,
    socio: "XFarm",
    cantidad: 12,
    folios: "100-200",
    fecha: "04/08/2020",
  },
  {
    id: 10,
    tipo: "Animal",
    paquete: 23,
    socio: "Torres",
    cantidad: 12,
    folios: "100-200",
    fecha: "04/08/2020",
  },
];

// ##############################
// // // DataGrid Control de cargos Data
// #############################
const DGCCColumns = [
  { field: "socio", minWidth: 150, headerAlign: "center", editable: true },
  {
    field: "fecha",
    type: "date",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
  { field: "folios", minWidth: 150, headerAlign: "center", editable: true },
  {
    field: "clasificaci??n",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
  { field: "concepto", minWidth: 150, headerAlign: "center", editable: true },
  {
    field: "cargo",
    type: "money",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
  {
    field: "observaciones",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
  {
    field: "cancelado",
    type: "CheckBox",
    minWidth: 150,
    headerAlign: "center",
    editable: true,
  },
];

const DGCCRows = [
  {
    id: 1,
    socio: "Gonzalo",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2500,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 2,
    socio: "Asavi",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 3600,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 3,
    socio: "Del toro",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 1900,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 4,
    socio: "XFarm",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2800,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 5,
    socio: "Torres",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2300,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 6,
    socio: "Gonzalo",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2500,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 7,
    socio: "Asavi",
    fecha: "04/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 3600,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 8,
    socio: "Del toro",
    fecha: "04/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 1900,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 9,
    socio: "XFarm",
    fecha: "04/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2800,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 10,
    socio: "Torres",
    fecha: "04/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2300,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 11,
    socio: "Gonzalo",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2500,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 12,
    socio: "Asavi",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 3600,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 13,
    socio: "Del toro",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 1900,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 14,
    socio: "XFarm",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2800,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 15,
    socio: "Torres",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2300,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 16,
    socio: "Gonzalo",
    fecha: "05/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2500,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 17,
    socio: "Asavi",
    fecha: "04/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 3600,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 18,
    socio: "Del toro",
    fecha: "04/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 1900,
    observaciones: "observaci??n",
    cancelado: false,
  },
  {
    id: 19,
    socio: "XFarm",
    fecha: "04/08/2020",
    folios: "100-200",
    clasificaci??n: "Sin clasificar",
    concepto: "(archivo)",
    cargo: 2800,
    observaciones: "observaci??n",
    cancelado: false,
  },
];

module.exports = {
  DGEDColumns,
  DGEDRows,
  DGCCColumns,
  DGCCRows,
};
