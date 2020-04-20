import React, { useState, useEffect, Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { createMuiTheme, ThemeProvider, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import AudioPlayer from "material-ui-audio-player";
import firebase from "firebase";
import "firebase/firestore";

const stylos = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  loopIcon: {
    color: "#3f51b5",
    "&.selected": {
      color: "#0921a9",
    },
    "&:hover": {
      color: "#7986cb",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  playIcon: {
    color: "#6D559E",
    "&:hover": {
      color: "#ff4081",
    },
  },
  volumeIcon: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  volumeSlider: {
    color: "black",
  },
  progressTime: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  mainSlider: {
    color: "#6D559E",
    "& .MuiSlider-rail": {
      color: "#6D559E",
    },
    "& .MuiSlider-track": {
      color: "#6D559E",
    },
    "& .MuiSlider-thumb": {
      color: "#6D559E",
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "#CAB2E2",
    boxShadow: "0%",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#6D559E",
  },
  cover: {
    width: "50%",
  },
  mainStyle: {
    backgroundColor: "#6D559E",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();
  let [results, setResults] = useState([]);
  console.log("diego");
  useEffect(() => {
    firebase
      .firestore()
      .collection("music")
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
      <main className={classes.mainStyle}>
        <Container className={classes.cardGrid}>
          <Grid container spacing={6}>
            {results.map((r, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {r.title}
                      </Typography>

                      <Typography variant="subtitle1" color="textSecondary">
                        {r.autor}
                      </Typography>
                      <br />

                      <AudioPlayer
                        useStyles={stylos}
                        src={r.song}
                        loop={true}
                      />
                    </CardContent>
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={r.img}
                    title="Se nace del temor"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
