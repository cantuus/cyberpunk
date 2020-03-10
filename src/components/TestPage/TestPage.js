import React, { Component } from 'react';
import './TestPage.css'
import cyberpunk from '../../images/cyberpunk.jpg'

class TestPage extends Component {

    render() {
        return (
            <div>
                <div class='container'>
                    <div class="container_content">
                        <div class="container_content_inner">
                            <div class="title">
                                <h1>Hello</h1>
                            </div>
                            <div class="par">
                                <p>
                                    My name is Sophia Koeut and I love to convert tea into code to make the web beautiful!
                                </p>
                            </div>
                            <div class="btns">
                                <button class='btns_more' augmented-ui="tl-clip br-clip exe">works</button>
                            </div>
                        </div>
                    </div>
                    <div class="container_outer_img" augmented-ui="tl-clip br-clip exe">
                        <div class="img-inner">
                            <img src={cyberpunk} alt="cyber punk girl and boy" class="container_img" />
                        </div>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
        )
    }
}

export default TestPage;