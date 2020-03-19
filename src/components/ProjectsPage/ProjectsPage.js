import React, { Component } from 'react';
import './ProjectsPage.css'
import cyberpunk from '../../images/cyberpunk.jpg'
import digi from '../../images/digi-doodle.png'
import dozo from '../../images/dozo.png'
import tallyho from '../../images/tallyho.png'

class ProjectPage extends Component {

    render() {
        return (
            <div>
                <div className='projects-container'>
                    <div className="project-header-container">
                        <h1 className="project-header">the works</h1>
                    </div>
                    <div className="projects-container-outer-img" augmented-ui="tl-clip br-clip exe">
                        <div className="projects-img-inner">

                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div class="flipper">
                                    <div class="front digi-img">
                                        <img className="project-img" src={digi} alt="" />
                                    </div>
                                    <div class="back">
                                        <p>Fan of Pictionary? Play our rendition of the classic game with a simple sign up
                                        and a click away from showcasing your artistic and guessing skills. Made possible by Socket.io, Canvas,
                                        Js-Cookie, React.js, Node.js, Express, and PostgreSQL.
                                        </p>
                                        <div class="link-container">
                                            <a class="link" target="_blank"
                                                href="https://github.com/thinkful-ei-iguana/digi-doodle-client">Repo</a>
                                            <a class="link" target="_blank" href="https://digi-doodle.now.sh/">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div class="flipper">
                                    <div class="front">
                                        <img className="tallyho-img project-img" src={tallyho} alt="" />
                                    </div>
                                    <div class="back tallyho-desc">
                                        <p>Tired of making a visual schedule by hand? Look no further parents!
                                        Tallyho! makes the process easier without the manual labor. Users can create, update, delete, and check off event items on their schedule. Made with love - React.js, Node.js, Express, PostgreSQL, and JWT Token.
                                        </p>
                                        <div class="link-container">
                                            <a class="link" target="_blank"
                                                href="https://github.com/cantuus/tallyho-client">Repo</a>
                                            <a class="link" target="_blank" href="https://tally-ho.koeutsophia.now.sh/">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div class="flipper">
                                    <div class="front">
                                        <img className="dozo-img project-img" src={dozo} alt="" />
                                    </div>
                                    <div class="back">
                                        <p>Pick up Japanese with Dozo where it utilizes the Spaced Repetition method
                                        for an effective way of studying. Built on React.js, Node.js, Express, PostgreSQL, and JWT Token.
                                        </p>
                                        <div class="link-container">
                                            <a class="link" target="_blank"
                                                href="https://github.com/thinkful-ei-iguana/Anthony-Sophia-Capstone">Repo</a>
                                            <a class="link" target="_blank" href="https://dozo.now.sh/">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div class="wrapper">
                                <div class="media">
                                    <div class="layer">
                                        <div className="inner-layer">
                                            <p>Digi-Doodle</p>
                                            <div class="link-container">
                                                <a class="link" target="_blank"
                                                    href="https://github.com/thinkful-ei-iguana/digi-doodle-client">Repo</a>
                                                <a class="link" target="_blank" href="https://digi-doodle.now.sh/">Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="digi-img" src={digi} alt="" />
                                </div>
                                <div class="media">
                                    <div class="layer">
                                        <div className="inner-layer">
                                            <p>Dozo</p>
                                            <div class="link-container">
                                                <a class="link" target="_blank"
                                                    href="https://github.com/thinkful-ei-iguana/Anthony-Sophia-Capstone">Repo</a>
                                                <a class="link" target="_blank" href="https://dozo.now.sh/">Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={dozo} alt="" />
                                </div>
                                <div class="media">
                                    <div class="layer">
                                        <div className="inner-layer">
                                            <p>Tallyho</p>
                                            <div class="link-container">
                                                <a class="link" target="_blank"
                                                    href="https://github.com/cantuus/tallyho-client">Repo</a>
                                                <a class="link" target="_blank" href="https://tally-ho.koeutsophia.now.sh/">Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={tallyho} alt="" />
                                </div>
                            </div> */}
                            {/* <img src={digi} alt="cyber punk girl and boy" className="container_img" />
                            <img src={dozo} alt="cyber punk girl and boy" className="container_img" />
                            <img src={tallyho} alt="cyber punk girl and boy" className="container_img" /> */}
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        )
    }
}

export default ProjectPage;