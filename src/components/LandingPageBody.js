import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LandingPageBody extends Component {
    render() {
        return (
            <section className="landing">
                <Link to={`/compare`}>
                    <p>Aquí iría un logo con un slogan</p>
                    <p>GO</p>
                </Link> 
            </section>
        )
    }
}
