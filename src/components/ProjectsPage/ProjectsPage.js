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
                <div className='container'>
                    <div className="project-header-container">
                        <h1 className="project-header">the works</h1>
                    </div>
                    <div className="container_outer_img" augmented-ui="tl-clip br-clip exe">
                        <div className="img-inner">
                            <div class="wrapper">
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
                            </div>
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