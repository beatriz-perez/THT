import React, { Component } from 'react'

//Datos:
import externalResourcesList from '../data/resources.json';

// Componentes:
import LandingPageBody from './LandingPageBody';
import Footer from './LayoutComponents/Footer';

export default class LandingPage extends Component {
    render() {
        const {externalResourcesList:{media}} = externalResourcesList;

        return (
            <div>
                <LandingPageBody/>
                <Footer media={media}/>
            </div>
        )
    }
}
