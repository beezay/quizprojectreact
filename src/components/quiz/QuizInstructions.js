import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Stack } from "react-bootstrap";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Quiz Instructions</title>
    </Helmet>
    <Container className="my-4">
      <h1>How to Play the Game</h1>
      <p>Ensure you read the question and at least Select One answer.</p>
      <Stack gap={2}>
        <Link to="/play/quiz">
          <h2>Let's Start</h2>
        </Link>
        <Link to="/">No Take me Back</Link>
      </Stack>
    </Container>
  </Fragment>
);

export default QuizInstructions;
