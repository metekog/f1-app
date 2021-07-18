/* import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  CssBaseline,
} from "@material-ui/core"; */

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { getConstructor } from "../../Services/Services";
import useStyles from "./styles";

export default function ConstructorStandings() {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    const fetchConstructorsData = async () => {
      const data = await getConstructor();
      setConstructors(data);
    };
    fetchConstructorsData();
  }, []);

  const classes = useStyles();
  console.log(constructors);

  return (
    <>
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

          {constructors.map((c) => (
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <img
                    src={`images/cars/${c.Constructor.constructorId}.png`}
                    alt=""
                  />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {c.Constructor.name}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </>
  );
}
