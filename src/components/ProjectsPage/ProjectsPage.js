import React, { Component } from 'react';
import './Projects.css'
import cyberpunk from '../../images/cyberpunk.jpg'
import digi from '../../images/digi-doodle.png'
import dozo from '../../images/dozo.png'
import tallyho from '../../images/tallyho.png'


class ProjectPage extends Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <div className="container_content">
                        <div className="container_content_inner">
                            <div className="title">
                                <h1>Hello</h1>
                            </div>
                            <div className="par">
                                <p>
                                    My name is Sophia Koeut and I love to convert tea into code to make the web beautiful!
                                </p>
                            </div>
                            <div className="btns">
                                <a class="icon-button btns_more" target="_blank" href="https://github.com/cantuus" aria-label="Github" title="Github">
                                    <i class="fab fa-github fa-lg icon-animation"></i>
                                </a>
                                <a class="icon-button btns_more" target="_blank" href="https://www.linkedin.com/in/sophia-koeut-2a9030125/"
                                    aria-label="LinkedIn" title="LinkedIn">
                                    <i class="fab fa-linkedin-in fa-lg icon-animation"></i>
                                </a>
                                <a class="icon-button btns_more" target="_blank" href="mailto:koeutsophia@gmail.com" aria-label="Gmail" title="Gmail">
                                    <i class="far fa-envelope fa-lg icon-animation"></i>
                                </a>
                            </div>
                        </div>
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