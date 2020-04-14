import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { textAlign } from "@material-ui/system";
import tituloprincipal from "../img/prueba-titulo2.svg";
import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery"; //se usa para mediaquery libreria de react
import MenuIcon from "@material-ui/icons/Menu";
import Desp from "./burgerMenu";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  res: {
    color: "grey",
  },
  menuburger: {},
});

export default function SimpleAppBar() {
  const classes = useStyles();
  const isActive = useMediaQuery("(max-width:768px)"); //se usa para mediaquery libreria de react
  const titulos = useMediaQuery("(min-width:768px)"); //se usa para mediaquery libreria de react

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#FFF11E" }}>
        <Toolbar
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        >
          {isActive && <Desp />}

          <Typography
            variant="h6"
            color="inherit"
            style={{ margin: "auto", display: "block" }}
          >
            <Link to="/">
              <img
                src={tituloprincipal}
                alt=""
                style={{
                  width: "50%",
                  display: "block",
                  margin: "auto",
                  padding: "5px",
                }}
              />
            </Link>
            {titulos && <Button color="dark">ART</Button>}{" "}
            {/*se usa para mediaquery libreria de react*/}
            {titulos && <Button color="dark">GAMING</Button>}
            {titulos && <Button color="dark">ANIMATION</Button>}
            {titulos && <Button color="dark">DESIGN</Button>}
            {titulos && <Button color="dark">MUSIC</Button>}
            {titulos && <Button color="dark">GAME DESIGN</Button>}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
