import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const screenWidth = window.innerWidth;
const justifyMainSeq = screenWidth > 900 ? "space-between" : "center";
const previewWidth = screenWidth > 900 ? "60%" : "100%";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100vh",
  },
  mainSeq: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: justifyMainSeq,
  },
  seqtext: {
    display: "flex",
    flexDirection: "row",
    justifyContent: justifyMainSeq,
    margin: "20px 50px",
  },
  seqInputs: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    justifyContent: "space-between",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  previewField: {
    width: previewWidth,
    textAlign: 'center'
  },
  preview: {
      textAlign: 'center',
    display: "flex",
    flexDirection: "column",
    margin: "40px 0px",
    justifyContent: justifyMainSeq,
  },
  previewString: {
    wordWrap: "initial",
    overflow: "auto",
    maxHeight: "20vh",
  },
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "20px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  homepage: {
    textAlign: "center",
    paddingTop: "50px",
  },
  homepageMessage: {
    fontSize: "20px",
  },
}));

export default useStyles;
