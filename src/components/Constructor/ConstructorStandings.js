import React, { useState, useEffect } from "react";
import {
  Container,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { fetchSeasons } from "../../Services/Services";
import useStyles from "./styles";
import ConstructorTable from "./ConstructorTable";

const ConstructorStandings = () => {
  const [seasons, setSeasons] = useState([]);
  const [years, setYears] = useState("2021");

  useEffect(() => {
    const fetchSeasonsData = async () => {
      const data = await fetchSeasons();
      setSeasons(data);
    };

    fetchSeasonsData();
  }, []);

  const classes = useStyles();

  return (
    <Container>
      <Typography align="center" className={classes.header} variant="h5" gutterBottom>
        <b className={classes.raceName}> {years} - Constructors' Standings</b>
      </Typography>
      <FormControl>
        <Select value={years} onChange={(e) => setYears(e.target.value)}>
          {seasons.map((season) => (
            <MenuItem key={season.season} value={season.season}>
              {season.season}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ConstructorTable years={years} />
    </Container>
  );
};

export default ConstructorStandings;
