import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Deatil extends Component {
    render() {
        const { match:{params:{name}}, info:{apiInfo, selection:{amount, to, from}}, media} = this.props;
        let upperName = name.toUpperCase();
        let walletInfo = apiInfo[upperName];

        return (
            <div className="detail">
                <div className="detail_selected">
                    <h3 className="detail__title title">selected wallet</h3>
                    <div className="detail_selected--wallet">
                        <img className="walletLogo" src={media[name]} alt={`${name} logo`}/>
                        <p className="walletName text text__big text__big--bold">{name}</p>
                    </div>
                    <p className="infoText text text__base text__base--bold">input</p>
                    <p className="text text__medium">
                        <span className="currency text text__medium text__base--bold">
                            {from}
                        </span>
                        <i className="arrow fas fa-long-arrow-alt-right"></i>{amount}
                    </p>
                    <p className="infoText text text__base text__base--bold">otput</p>
                    <p className="text text__medium">
                        <span className="currency text text__medium text__base--bold">
                            {to}
                        </span>
                        <i className="arrow fas fa-long-arrow-alt-right"></i>
                            {walletInfo}
                    </p>
                </div>
                <div className="detail_best">
                    <h3 className="detail__title title">best option</h3>
                </div>
                <div className="navBox">
                    <Link className="backButton button button__color1 text text__base text__base--bold" to={`/compare`}>
                        back to ranking
                    </Link> 
                </div>
            </div>
        )
    }
}
