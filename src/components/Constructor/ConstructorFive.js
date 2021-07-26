import React, { useEffect, useState } from "react";
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
  Button,
  Hidden,
} from "@material-ui/core";
import { constructorStanding } from "../../Services/Services";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function ConstructorFive() {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    const fetchConstructorData = async () => {
      const data = await constructorStanding();
      setConstructors(data);
    };
    fetchConstructorData();
  }, []);

  const classes = useStyles();

  return (
    <TableContainer>
      <Typography className={classes.header} variant="h5">
        Constructors Standings
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center">Position</TableCell>
            <Hidden xsDown mdDown>
              <TableCell align="center"></TableCell>
            </Hidden>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Wins</TableCell>
          </TableRow>
        </TableHead>

        {constructors.slice(0, 5).map((constructor) => (
          <TableBody key={constructor.Constructor.constructorId}>
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                {constructor.position}
              </TableCell>
              <Hidden xsDown mdDown>
                <TableCell align="center">
                  <img
                    style={{ width: "220px", height: "64px" }}
                    src={`images/cars/${constructor.Constructor.constructorId}.png`}
                    alt=""
                  />
                </TableCell>
              </Hidden>
              <TableCell align="center">
                {constructor.Constructor.name}
              </TableCell>
              <TableCell align="center">{constructor.points}</TableCell>
              <TableCell align="center">{constructor.wins}</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
      <Link to="constructors-standings" style={{ textDecoration: "none" }}>
        <Button className={classes.button}>All Standings</Button>
      </Link>
    </TableContainer>
  );
}
