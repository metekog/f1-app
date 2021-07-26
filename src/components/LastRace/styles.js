import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
    color: "#006F62",
  },
  pos: {
    marginBottom: 12,
  },
  tableHead: {
    background: "rgba(220,220,220, 0.5)",
  },
  header: {
    background: " #006F62",
    color: "white",
    padding: "10px",
    borderRadius: "20px",
  },
  button: {
    border: "2px solid #F596C8",
    borderRadius: "40px",
    color: "white",
    background: "#F596C8",
    width: "25%",
    marginTop: "15px",
    "&:hover": {
      color: "#006F62",
      background: "white",
    },
  },
}));
