import React, { useState, useEffect } from "react";
import {
  Container,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { fetchSeasons } from "../../Services/Services";
import DriverTable from "./DriverTable";
import useStyles from "./styles";

const AllDrivers = () => {
  const [seasons, setSeasons] = useState([]);
  const [years, setYears] = useState("2021");

  const classes = useStyles();

  useEffect(() => {
    const fetchSeasonsData = async () => {
      const data = await fetchSeasons();
      setSeasons(data);
    };

    fetchSeasonsData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography className={classes.head} align="center" variant="h4">
        All Formula One Drivers
      </Typography>
      <FormControl className={classes.opt}>
        <Select
          className={classes.sel}
          value={years}
          onChange={(e) => setYears(e.target.value)}
        >
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

export default AllDrivers;
