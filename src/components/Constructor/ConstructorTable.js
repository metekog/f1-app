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
  Container,
  Typography,
} from "@material-ui/core";
import { constructorStanding } from "../../Services/Services";

function ConstructorTable({ years }) {
  const classes = useStyles();

  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    const fetchConstructorsData = async () => {
      const data = await constructorStanding(years);
      setConstructors(data);
    };
    fetchConstructorsData();
  }, [years]);

  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Team</TableCell>
              <TableCell align="center">Points</TableCell>
              <TableCell align="center">Wins</TableCell>
              <TableCell align="center">Team Nationality</TableCell>
            </TableRow>
          </TableHead>

          {constructors.map((constructor) => (
            <TableBody key={constructor.Constructor.constructorId}>
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {constructor.position}
                </TableCell>
                <TableCell align="center">
                  <img
                    style={{ width: "200px" }}
                    src={`images/cars/${constructor.Constructor.constructorId}.png`}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">
                  {constructor.Constructor.name}
                </TableCell>
                <TableCell align="center">{constructor.points}</TableCell>
                <TableCell align="center">{constructor.wins}</TableCell>
                <TableCell align="center">
                  <img
                    src={`images/flags/${constructor.Constructor.nationality}.png`}
                    alt=""
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ConstructorTable;
