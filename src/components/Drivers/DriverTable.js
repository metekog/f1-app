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
import { fetchDrivers } from "../../Services/Serives";

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

  /* console.log(years);

  console.log(allImages); */

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nation</TableCell>
              <TableCell>Driver Name</TableCell>
              <TableCell align="center">Permanent Number</TableCell>
              <TableCell align="center">Nationality</TableCell>
              <TableCell align="center">DOB</TableCell>
              <TableCell align="center">Information</TableCell>
            </TableRow>
          </TableHead>

          {drivers.map((driver) => (
            <TableBody key={driver.driverId}>
              <TableRow>
                <TableCell>
                  <img
                    src={`images/flags/${driver.nationality}.png`}
                    alt=""
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {driver.givenName} {driver.familyName}
                </TableCell>
                <TableCell align="center"> {driver.permanentNumber} </TableCell>
                <TableCell align="center">{driver.nationality}</TableCell>
                <TableCell align="center">{driver.dateOfBirth}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
