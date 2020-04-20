import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Pieza from "../img/art3-11.svg";
import firebase from "firebase";
import "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#6D559E",
  },
  mainStyle: {
    backgroundColor: "#6D559E",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundColor: "#6D559E",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();
  let [results, setResults] = useState([]);
  console.log("diego");
  useEffect(() => {
    firebase
      .firestore()
      .collection("home-img")
      .onSnapshot((snap) => {
        let array = [];
        snap.forEach((doc) => {
          array.push(doc.data());
        });
        setResults(array);
      });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main className={classes.mainStyle}>
        {/* Hero unit
        //DIVS DE PRESENTACION CON BOTON , H1 Y SPAN
         <div className={classes.heroContent}>
          {<Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              PEREYRA PROJECT
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Arte digital, animacion ,gaming, diseño, 3d, son algunos de los
              apartados mas importantes de este sitio, disfrutalos!!!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
        
        */}

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {results.map((r, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to={r.link}>
                    {" "}
                    <CardMedia
                      className={classes.cardMedia}
                      image={r.img}
                      title={r.title}
                    />
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
