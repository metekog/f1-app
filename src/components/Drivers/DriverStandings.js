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
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import { driverStanding, fetchSeasons } from "../../Services/Services";
import useStyles from "./styles";

const DriverStandings = () => {
  const classes = useStyles();

  const [drivers, setDrivers] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [years, setYears] = useState("2021");

  useEffect(() => {
    setTimeout(() => {
      const fetchDriversData = async () => {
        const data = await driverStanding(years);
        setDrivers(data);
      };
      fetchDriversData();
    }, 3000);
  }, [years]);

  useEffect(() => {
    const fetchSeasonsData = async () => {
      const data = await fetchSeasons();
      setSeasons(data);
    };

    fetchSeasonsData();
  }, []);

  return (
    <Container>
      <Typography
        align="center"
        className={classes.header}
        variant="h5"
        gutterBottom
      >
        <b className={classes.raceName}>
          <span style={{ color: "#DB0A40" }}>{years} </span>- Drivers' Standings{" "}
        </b>
      </Typography>
      <FormControl>
        <Select value={years} onChange={(e) => setYears(e.target.value)}>
          {seasons.map((s) => (
            <MenuItem key={s.season} value={s.season}>
              {s.season}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Team</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Points</TableCell>
              <TableCell align="center">Wins</TableCell>
              <TableCell align="center">Driver Nationality</TableCell>
            </TableRow>
          </TableHead>

          {drivers.map((driver) => (
            <TableBody key={driver.Driver.driverId}>
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {driver.position}
                </TableCell>
                <TableCell align="center">
                  <img
                    style={{ width: "200px" }}
                    src={`images/cars/${driver.Constructors[0].constructorId}.png`}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">
                  {driver.Driver.givenName} {driver.Driver.familyName}
                </TableCell>
                <TableCell align="center">{driver.points}</TableCell>
                <TableCell align="center">{driver.wins}</TableCell>
                <TableCell align="center">
                  <img
                    src={`images/flags/${driver.Driver.nationality}.png`}
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
};

export default DriverStandings;
