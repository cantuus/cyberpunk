import React, { Component } from 'react';
import './PortfolioPage.css'
import cyberpunk from '../../images/cyberpunk.jpg'

class TestPage extends Component {

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
                            <div className="btns-container">
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
                                    <a class="icon-button btns_more" href="/projects" aria-label="Projects" title="Projects">
                                        <i class="fas fa-archive fa-lg icon-animation"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_outer_img" augmented-ui="tl-clip br-clip exe">
                        <div className="img-inner">
                            <img src={cyberpunk} alt="cyber punk girl and boy" className="container_img" />
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        )
    }
}

export default TestPage;