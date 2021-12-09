import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tableHead: {
    background: "rgba(220,220,220, 0.5)",
  },
  button: {
    border: "2px solid #DB0A40",
    borderRadius: "40px",
    color: "white",
    background: "#DB0A40",
    width: "50%",
    marginTop: "15px",
    "&:hover": {
      border: "2px solid #004C6C",
      color: "#DB0A40",
      background: "white",
    },
  },
  header: {
    background: " #004C6C",
    color: "white",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "10px",
    fontFamily: "'Orbitron', sans-serif",
  },
  progress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
