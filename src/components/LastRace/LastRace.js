import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  Button,
  TableHead,
  TableRow,
  Hidden,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";

import { lastRace } from "../../Services/Services";

function LastRace() {
  const [race, setRace] = useState({});

  useEffect(() => {
    const fetchLastRace = async () => {
      const data = await lastRace();
      setRace(data);
    };
    fetchLastRace();
  }, []);

  const classes = useStyles();

  return (
    <div>
      {race && race.Results ? (
        <Container className={classes.root}>
          <Typography className={classes.header} variant="h5" gutterBottom>
            Last Race:{" "}
            <b className={classes.raceName}>
              {race.raceName}
              <span style={{ fontSize: "12px" }}>{race.season}</span>
            </b>
            <p>{race.Circuit.circuitName}</p>
          </Typography>
          <Typography className={classes.sub} variant="h5" gutterBottom>
            {race.Circuit.circuitName}
          </Typography>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell align="center">Position</TableCell>

                <Hidden xsDown>
                  <TableCell align="center">Nation</TableCell>
                </Hidden>
                <TableCell align="center">Name</TableCell>
                <Hidden xsDown>
                  <TableCell align="center">Team</TableCell>
                </Hidden>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>
            {race.Results &&
              race.Results.slice(0, 3).map((r) => (
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="center">
                      {r.position}
                    </TableCell>
                    <Hidden xsDown>
                      <TableCell align="center">
                        <img
                          src={`images/flags/${r.Driver.nationality}.png`}
                          alt=""
                        />
                      </TableCell>
                    </Hidden>

                    <TableCell align="center">
                      {r.Driver.givenName} {r.Driver.familyName}
                    </TableCell>
                    <Hidden xsDown>
                      <TableCell align="center">
                        <img
                          src={`images/cars/${r.Constructor.constructorId}.png`}
                          alt=""
                          style={{ width: "200px" }}
                        />
                      </TableCell>
                    </Hidden>
                    <TableCell align="center">{r.Time.time}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
          <Button className={classes.button}>See Details</Button>
        </Container>
      ) : (
        <div className={classes.progress}>
          <CircularProgress color="#DB0A40" />
        </div>
      )}
    </div>
  );
}

export default LastRace;
