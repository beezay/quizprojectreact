import React, { Fragment } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Quiz App - Home</title>
    </Helmet>
    <div id="home">
      <section>
        <div>
          <span className="mdi mdi-cube-outline mdi-48px"></span>
        </div>
        <h1> Quiz App </h1>
        <div className="play-button-container">
          <Link className="play-button" to="/play/instructions">
            Play Quiz
          </Link>
        </div>
        <div className="auth-container">
          <Link className="auth-button" id="question-button" to="/addquestion">
            Create Question
          </Link>
        </div>
      </section>
    </div>
  </Fragment>
);

export default Home;
