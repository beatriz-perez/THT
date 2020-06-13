import React, { Component } from 'react'

//Servicios:
import { fetchApiInfo } from '../services/APIservice';


// Componentes:
import Header from './LayoutComponents/Header';
import Section from './LayoutComponents/Section';
import Footer from './LayoutComponents/Footer';


export default class Comparator extends Component {
    constructor(props) {
        super(props);
        this.fetchInfo = this.fetchInfo.bind(this);
        this.state = {
            apiInfo: [],
            selection: {
              pair: 'LTC-BTC',
              amount: 1
            }      
        }
    }

    componentDidMount() {
        const savedState = JSON.parse(localStorage.getItem('mylocalinfo'));
        if(!savedState) {
          this.fetchInfo();
        } else {
          this.setState(savedState);
        }
    }
    componentDidUpdate() {
        localStorage.setItem('mylocalinfo', JSON.stringify(this.state));
    }
    
    fetchInfo() {
        let pairQuery = this.state.selection.pair;
        let amountQuery = this.state.selection.amount;
        fetchApiInfo(pairQuery, amountQuery) 
        .then(data => { this.setState({ apiInfo: data });})
        .catch((error)=> { console.log(error); });
    }
    
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
