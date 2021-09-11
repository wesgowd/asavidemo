import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="www.wesgoproto.000webhostapp.com">
        WesGo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}*/

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    //backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundImage: "url(https://source.unsplash.com/1200x900/?egg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.light,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  /*const [form, setForm] = React.useState({
    fields: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      password: "",
    },
  });*/
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormValidation = (event) => {
    event.preventDefault();
    /*
      let fields = form.fields;
      let errors = form.errors;
      let submitReady = true;

      if (fields.email == "") {
        submitReady = false;
        errors.email = "Correo Electrónico no válido.";
      }

      if (fields.password == "") {
        submitReady = false;
        errors.password = "La contraseña debe ser al menos 8 caracteres.";
      }
      setForm(fields);
      setForm(errors);

      if (submitReady) {
        handleOnSubmit();
      }
    */
    handleOnSubmit();
  };

  const handleOnSubmit = () => {
    console.log("submited");
    window.location.href = "/panel/estadisticas";
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Recuperar su contraseña
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            A continuación, porfavor escriba el correo electrónico con el que
            está registrado.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="emailRecover"
            label="Correo Electrónico"
            type="email"
            helperText="Se le enviará un correo a esta dirección con las instrucciones."
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Recuperar
          </Button>
        </DialogActions>
      </Dialog>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Panel de Control Asavi
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleFormValidation}
            method="POST"
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/*onchange={setForm(form.fields.email)}value={form.fields.email}helperText={form.errors.email}*/}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              InputProps={{ inputProps: { min: 8 } }}
            />
            {/*value={form.fields.password}helperText={form.errors.password}autoComplete="current-password"*/}
            {/*<FormControlLabel control={<Checkbox value="remember" color="primary" />}label="Recordarme"/>*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2" onClick={handleClickOpen}>
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              {/*<Grid item><Link href="#" variant="body2">{"No tienes cuenta? Registrate"}</Link></Grid>*/}
            </Grid>
            <Box mt={5}>{/*<Copyright />*/}</Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
