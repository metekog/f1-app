import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchDrivers } from "../../api/Api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchDriversData = async () => {
      const data = await fetchDrivers();
      setDrivers(data);
    };
    fetchDriversData();
  }, []);
  console.log(drivers);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Driver Name</TableCell>
            <TableCell align="right">Permanent Number</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drivers.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell component="th" scope="row">
                {driver.givenName}  {driver.familyName}
              </TableCell>
              <TableCell align="right"> {driver.permanentNumber} </TableCell>
              <TableCell align="right">{driver.nationality}</TableCell>
              <TableCell align="right">{driver.dateOfBirth}</TableCell>
              <TableCell align="right">{driver.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Drivers;
