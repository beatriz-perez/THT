import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LandingPageBody extends Component {
    render() {
        return (
            <div>
                <Link to={`/compare`}>
                    <p>GO</p>
                </Link> 
            </div>
        )
    }
}
