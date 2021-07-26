import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DriverStandings from "../Drivers/DriverStandings";
import ConstructorStandings from "../Constructor/ConstructorStandings";
import LastRace from "../LastRace/LastRace";
import DriverFive from "../Drivers/DriverFive";
import { Container } from "@material-ui/core";
import ConstructorFive from "../Constructor/ConstructorFive";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <LastRace />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <DriverFive />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ConstructorFive />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
