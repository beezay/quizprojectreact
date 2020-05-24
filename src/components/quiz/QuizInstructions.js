import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const QuizInstructions = () =>(
    <Fragment>
        <Helmet><title>Quiz Instructions</title></Helmet>
        <div className="instructions container">
            <h1>How to Play the Game</h1>
            <p>Ensure you read the question and at least Select One answer.</p>
            <div>
                <span className="left"><Link to="/">No Take me Back</Link></span>
                <span className="right"><Link to="/play/quiz">Let's Start</Link></span>
            </div>
        </div>
    </Fragment>
)

export default QuizInstructions;