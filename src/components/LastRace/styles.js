import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minWidth: 275,
    textAlign: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "red",
    marginTop: "10px",
  },
  raceName: {
    color: "#DB0A40",
  },
  pos: {
    marginBottom: 12,
  },
  tableHead: {
    background: "rgba(220,220,220, 0.5)",
  },
  header: {
    background: " #004C6C",
    color: "white",
    padding: "10px",
    borderRadius: "20px",
    fontFamily: "'Orbitron', sans-serif",
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
  progress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
