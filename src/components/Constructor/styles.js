import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
   
  },
  card: {
    width: "300px",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
