import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LandingPageBody extends Component {
    render() {
        return (
            <section className="landing" id="landing" role="complementary">
                <div className="landingBox">
                    <div className="landingBox__textsBox title">
                        {/* <i className="fas fa-coins"></i>
                        <i className="fas fa-exchange-alt"></i>                        
                        <i className="fas fa-coins"></i> */}
                        <h1 className="title__main">rate advisor</h1>
                        <h2 className="title__subMain">your best choice</h2>
                    </div>
                    <ul className="landingBox__stepsBox text">
                        <li className="landingBox__stepsBox--step">
                            <p className="landingBox__stepsBox--number text__big text__big--bold">1</p>
                            <p className="landingBox__stepsBox--text text__medium text__medium--bold">selecciona la moneda que tienes y la que quieres</p>
                        </li>
                        <li className="landingBox__stepsBox--step">
                            <p className="landingBox__stepsBox--number text__big text__big--bold">2</p>
                            <p className="landingBox__stepsBox--text text__medium text__medium--bold">indica la cantidad para calcular el precio total</p>
                        </li>
                        <li className="landingBox__stepsBox--step">
                            <p className="landingBox__stepsBox--number text__big text__big--bold">3</p>
                            <p className="landingBox__stepsBox--text text__medium text__medium--bold">compara y descubre tu mejor opción</p>
                        </li>
                    </ul>
                    <Link to={`/compare`} className="landingBox__button button button__color1 text text__big text__big--bold">
                        GO
                    </Link> 
                </div>
            </section>
        )
    }
}
