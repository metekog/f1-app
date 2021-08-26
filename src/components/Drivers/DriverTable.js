import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { fetchDrivers } from "../../Services/Services";

export default function DriverTable({ years }) {
  const classes = useStyles();

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDriversData = async () => {
      const data = await fetchDrivers(years);
      setDrivers(data);
    };
    fetchDriversData();
  }, [years]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center">Nation</TableCell>
              <TableCell align="center">Driver Name</TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">Nationality</TableCell>
              <TableCell align="center">Date of Birth</TableCell>
              <TableCell align="center">Wiki</TableCell>
            </TableRow>
          </TableHead>

          {drivers.map((driver) => (
            <TableBody key={driver.driverId}>
              <TableRow>
                <TableCell align="center">
                  <img src={`images/flags/${driver.nationality}.png`} alt="" />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {driver.givenName} {driver.familyName}
                </TableCell>
                <TableCell align="center"> {driver.permanentNumber} </TableCell>
                <TableCell align="center">{driver.nationality}</TableCell>
                <TableCell align="center">{driver.dateOfBirth}</TableCell>
                <TableCell align="center">
                  <a href={driver.url} target="blank">
                    Biography
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
