import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch as Swticher,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import IconButton from "@material-ui/core/IconButton";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import Home from "./pages/home";
import Cart from "./pages/cart";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  link: {
    textDecoration: "none",
  },
}));

function App() {
  const [darkState, setDarkState] = useState(false);
  const classes = useStyles();
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="absolute"
              className={clsx(classes.appBar && classes.appBarShift)}
            >
              <Toolbar>
                <Link to="/" style={{ textDecoration: "none", color: "unset" }}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                  >
                    <HomeOutlinedIcon />
                  </IconButton>
                </Link>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  TEM TUDO
                </Typography>
                <Switch checked={darkState} onChange={handleThemeChange} />
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <LocalMallOutlinedIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
              <Swticher>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
              </Swticher>
            </Container>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
