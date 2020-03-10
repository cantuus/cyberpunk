import React, { Component } from 'react';
import './TestPage.css'
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
                            <div className="btns">
                                <button className='btns_more' augmented-ui="tl-clip br-clip exe">works</button>
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