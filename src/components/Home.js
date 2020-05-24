import React, { Fragment } from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {FunctionalComponent,ClassComponent} from './quiz/Test';

const Home = ()=>
    (
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
                    <ClassComponent/>
                    <FunctionalComponent name="Beezay"/>
                    <div className="play-button-container">
                        <ul>
                            <li>
                                <Link className="play-button" to="/play/instructions">Play Quiz</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link className="auth-button" id="question-button" to="/addquestion">Create Question</Link>
                    </div>
                </section>
            </div>
        </Fragment>
        
        
    );


export default Home;