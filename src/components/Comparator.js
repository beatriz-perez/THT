import React, { Component } from 'react'

// Componentes:
import Header from './LayoutComponents/Header';
import Section from './LayoutComponents/Section';
import Footer from './LayoutComponents/Footer';


export default class Comparator extends Component {
    render() {
        return (
            <div>
                <Header title="Título de la aplicación" />
                <Section id="centralSection" title="Sección principal" role="main content">
                </Section>
                <Footer />

                
            </div>
        )
    }
}
