import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
// import logo from './logo.svg'
import slapImage1 from "./slap_images/facepalm-outline.png";
import slapImage2 from "./slap_images/facepalm-smiley.png";
import slapImage3 from "./slap_images/fish-slap.png";
import slapImage4 from "./slap_images/line-slap.png";
import slapImage5 from "./slap_images/ouch.png";
import slapImage6 from "./slap_images/punch.png";
import slapImage7 from "./slap_images/slap.png";

import { Link, Switch, Route, Redirect } from "react-router-dom";

import Card from "./UI/Card";

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    background: theme.palette.background,
    color: theme.palette.text,
    fontFamily: "Poppins",
  },

  App: {
    padding: "1.5rem",
    background: theme.palette.gradient,
    maxWidth: "800px",
    minHeight: "600px",
    margin: "auto",
    borderRadius: "4px",
    "& a": {
      color: theme.palette.text,
      textDecoration: "none",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
    "& h2": {
      fontSize: "1.5rem",
      textAlign: "center",
      lineHeight: "2rem",
    },
  },
  Header: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
    "&  h1": {
      fontFamily: "Poppins",
      cursor: "pointer",
      fontSize: "6rem",
      textAlign: "center",
      marginTop: "1.5rem",
      padding: 0,
    },
    "& nav": {
      fontSize: "1rem",
      textAlign: "center",
    },
    "& ul": {
      listStyleType: "none",
      display: "flex",
      justifyContent: "flex-end",
      alignContent: "center",
      textDecoration: "none",
    },
    "& li": {
      padding: "0px 10px",
    },
  },
  Main: {
    // background: theme.palette.secondary,
    "& canvas": {
      width: "100%",
      height: "auto",
      flexBasis: "100%",
    },
    "& video": {
      display: "none",
    },
  },
  Stickers: {
    padding: "2rem",
    "& img": {
      height: "4rem",
    },
    "& button": {
      marginLeft: "1rem",
    },
  },
  Gallery: {
    padding: "2rem",
    margin: "auto",
    display: "flex",
    "& img": {
      height: "16rem",
    },
    "& input": {
      borderRadius: "4px",
      marginLeft: "1rem",
      display: "inline",
    },
  },
  Picture: {
    background: "black",
    padding: "4rem",
    position: "relative",
    display: "inline-block",
    margin: "auto",
    "& h3": {
      padding: 8,
      textAlign: "center",
      width: "100%",
    },
  },
}));

const stickers = [
  slapImage1,
  slapImage2,
  slapImage3,
  slapImage4,
  slapImage5,
  slapImage6,
  slapImage7,
].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});

function App(props) {
  // css classes from JSS hook
  const classes = useStyles(props);
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAPPE!");

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/readme">readme</Link>
            </li>
          </ul>
        </nav>
        <h1>SlapSticker</h1>
        <h2>
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can!
        </h2>
      </header>
      <Switch>
        /** * Main app route */
        <Route path="/" exact>
          <main>
            <section className={classes.Gallery}>
              <Card>
                <h3>Step one: Give it a name</h3>
                <input
                  type="text"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                />
              </Card>
            </section>
            <section className={classes.Stickers}>
              <Card>
                <h3>Step two: Select your sticker</h3>
                <button onClick={() => setSticker(stickers[0])}>
                  <img src={stickers[0].url} />
                </button>
                <button onClick={() => setSticker(stickers[1])}>
                  <img src={stickers[1].url} />
                </button>
                <button onClick={() => setSticker(stickers[2])}>
                  <img src={stickers[2].url} />
                </button>
                <button onClick={() => setSticker(stickers[3])}>
                  <img src={stickers[3].url} />
                </button>
                <button onClick={() => setSticker(stickers[4])}>
                  <img src={stickers[4].url} />
                </button>
                <button onClick={() => setSticker(stickers[5])}>
                  <img src={stickers[5].url} />
                </button>
                <button onClick={() => setSticker(stickers[6])}>
                  <img src={stickers[6].url} />
                </button>
              </Card>
            </section>
            <section className={classes.Main}>
              <Card>
                <h3>Step three: Slap yourself!</h3>
                <br></br>
                <video ref={handleVideoRef} />
                <canvas
                  ref={handleCanvasRef}
                  width={2}
                  height={2}
                  onClick={handleCapture}
                />
              </Card>
            </section>
            <section className={classes.Gallery}>
              <Card>
                <h3>Step four: Cherish this moment forever</h3>
                {picture && (
                  <div className={classes.Picture}>
                    <img src={picture.dataUri} />
                    <h3>{picture.title}</h3>
                  </div>
                )}
              </Card>
            </section>
          </main>
        </Route>
        /** * Readme route */
        <Route path="/readme">
          <main>
            <h2>Devtest Readme</h2>
            <p>
              Hello candidate, Welcome to our little dev test. The goal of this
              exercise, is to asses your general skill level, and give us
              something to talk about at our next appointment.
            </p>
            <section>
              <h3>What this app should do</h3>
              <p>
                SlapSticker is an app that lets users to slap stickers on their
                face, using their webcam. Functionality wise the app works, but
                the ui needs some love. We'd like for you to extend this
                prototype to make it look and feel it bit better.
              </p>
              <p>These are the basic requirements:</p>
              <ul>
                <li>User can pick a sticker</li>
                <li>User can give the captured image a title</li>
                <li>User can place the sticker over the webcam image</li>
                <li>User can capture the webcam image with sticker</li>
              </ul>
            </section>
            <section>
              <h3>What we want you to do</h3>
              <p>
                Off course we didn't expect you to build a full fledged app in
                such a short time frame. That's why the basic requirements are
                already implemented.
              </p>
              <p>
                However, we would like for you to show off your strengths as a
                developer by improving the app.
              </p>
              <p>Some ideas (no need to do all):</p>
              <ul>
                <li>Make it look really nice</li>
                <li>Let users pick from multiple (custom) stickers</li>
                <li>Improve the workflow and ux</li>
                <li>Show multiple captured images in a gallery</li>
                <li>Let users download or share the captured pics</li>
                <li>Add super cool effects to webcam feed</li>
                <li>Organize, document and test the code</li>
                <li>Integrate with zoom, teams, meet...</li>
              </ul>
            </section>
            <section>
              <h3> quickstart</h3>
              <ul>
                <li>You can clone this repo to get started </li>
                <li>run `$ npm install` to install deps</li>
                <li>run `$ npm run start` to start dev environment</li>
                <li>push it to github or gitlab to share it with us. </li>
              </ul>
            </section>
            <section>
              <p>
                P.s. We've already added some libraries to make your life easier
                (Create React App, Jss, React Router), but feel free to add
                more.
              </p>
            </section>
          </main>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
