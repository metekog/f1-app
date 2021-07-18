import React, { useState, useEffect } from "react";
import { Container, FormControl, Select, MenuItem } from "@material-ui/core";
import { fetchSeasons } from "../../Services/Services";
import DriverTable from "./DriverTable";

const Drivers = () => {
  const [seasons, setSeasons] = useState([]);
  const [years, setYears] = useState("2021");

  useEffect(() => {
    const fetchSeasonsData = async () => {
      const data = await fetchSeasons();
      setSeasons(data);
    };

    fetchSeasonsData();
  }, []);
 

  return (
    <Container maxWidth="lg">
      <FormControl>
        <Select value={years} onChange={(e) => setYears(e.target.value)}>
          {seasons.map((s) => (
            <MenuItem key={s.season} value={s.season}>
              {s.season}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DriverTable years={years} />
    </Container>
  );
};

export default Drivers;
