import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from "@material-ui/icons/Pause";
import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import firebase from "firebase";
import "firebase/firestore";

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
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
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
  function mostrar() {
    console.log("hola");
  }
  function playmusic() {
    let audio = new Audio(
      "https://firebasestorage.googleapis.com/v0/b/pereyra-project.appspot.com/o/music%2Fse-nace-el-temor.wav?alt=media&token=402eefd9-c4d8-4322-880c-9aa5577225c6"
    );
    audio.play();
  }
  function stopMusic() {
    let audio = new Audio();
    audio.stop();
  }
  return (
    <React.Fragment>
      {results.map((r, i) => (
        <Card className={classes.root} key={i}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Mac Miller
              </Typography>
            </CardContent>

            <ReactAudioPlayer
              className={classes.controls}
              src={r.song}
              controls
            />
          </div>
          <CardMedia
            className={classes.cover}
            image={r.img}
            title="Live from space album cover"
          />
        </Card>
      ))}
    </React.Fragment>
  );
}
