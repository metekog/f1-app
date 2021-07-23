import React, { useState, useEffect } from "react";
import {
  Container,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { fetchSeasons } from "../../Services/Services";
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

  console.log(seasons);

  return (
    <Container>
      <Typography style={{ color: "#006F62" }} variant="h4">
        Constructor Standings
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
      <ConstructorStandings years={years} />
    </Container>
  );
};

export default ConstructorStandings;
