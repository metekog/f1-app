import axios from "axios";

const baseEndPoint = "http://ergast.com/api/f1";

export const fetchDrivers = async (year = 2021) => {
  const { data } = await axios.get(`${baseEndPoint}/${year}/drivers.json`);
  return data.MRData.DriverTable.Drivers;
};

/* export const fetchYears = async () => {
  const { data } = await axios.get(
    `${baseEndPoint}/seasons.json?limit=30&offset=60`
  );
  return data.MRData.SeasonTable.Seasons;
};
 */

export const fetchSeasons = async (year = 2021) => {
  const { data } = await axios.get(`${baseEndPoint}/${year}/drivers.json`);
  return data.MRData.DriverTable;
};

export const nextRace = async () => {
  const { data } = await axios.get(`${baseEndPoint}/current/next.json`);
  return data.MRData.RaceTable.Races;
};

export const lastRace = async () => {
  const { data } = await axios.get(`${baseEndPoint}/current/last/results.json`);
  return data.data.MRData.RaceTable.Races;
};

export const driverStandings = async () => {
  const { data } = await axios.get(
    `${baseEndPoint}/current/driverStandings.json`
  );
  return data.MRData.StandingsTable.StandingsLists.DriverStandings;
};

export const calendar = async () => {
  const { data } = await axios.get(`${baseEndPoint}/2021.json`);
  return data.MRData.RaceTable.Races;
};
