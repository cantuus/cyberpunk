import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component {

    render() {
        return (
            <div className="cyber-container">
                <div className="h-container">
                    <h1 className="cyber-title glitch">come my einherjars, battle awaits us_</h1>
                    <h1 className="cyber-title glitch">come my einherjars, battle awaits us_</h1>
                    <h1 className="cyber-title glitch">come my einherjars, battle awaits us_</h1>
                </div>
                <div className="button-container">
                    <Link to="/portfolio">
                        <button className="btn">
                            <span className="btn__content">join_</span>
                            <span className="btn__glitch"></span>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;