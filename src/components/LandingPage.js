import React, { Component } from 'react'

// Componentes:
import LandingPageBody from './LandingPageBody';
import Footer from './LayoutComponents/Footer';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <LandingPageBody/>
                <Footer />
            </div>
        )
    }
}
