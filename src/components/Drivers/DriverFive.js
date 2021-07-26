import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";
import useStyles from "./styles";
import { driverStanding } from "../../Services/Services";
import { Link } from "react-router-dom";

export default function DriverFive() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDriverData = async () => {
      const data = await driverStanding();
      setDrivers(data);
    };
    fetchDriverData();
  }, []);
  console.log(drivers);

  const classes = useStyles();

  return (
    <TableContainer>
      <Typography className={classes.header} variant="h5">
        Drivers Standings
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center">Position</TableCell>
            <Hidden xsDown mdDown>
              <TableCell align="center"></TableCell>
            </Hidden>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Wins</TableCell>
          </TableRow>
        </TableHead>

        {drivers.slice(0, 5).map((driver) => (
          <TableBody key={driver.Driver.driverId}>
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                {driver.position}
              </TableCell>
              <Hidden xsDown mdDown>
                <TableCell align="center">
                  <img
                    src={`images/flags/${driver.Driver.nationality}.png`}
                    alt=""
                  />
                </TableCell>
              </Hidden>
              <TableCell align="center">
                {driver.Driver.givenName} {driver.Driver.familyName}
              </TableCell>
              <TableCell align="center">{driver.points}</TableCell>
              <TableCell align="center">{driver.wins}</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
      <Link to="/drivers-standings" style={{ textDecoration: "none" }}>
        <Button className={classes.button}>All Standings</Button>
      </Link>
    </TableContainer>
  );
}
