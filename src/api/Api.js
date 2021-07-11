import axios from "axios";

const baseEndPoint = "http://ergast.com/api/f1";

export const fetchDrivers = async () => {
  const { data } = await axios.get(`${baseEndPoint}/2020/drivers.json`);
  return data.MRData.DriverTable.Drivers;
};
