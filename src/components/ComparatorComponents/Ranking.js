import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Ranking extends Component {
    render() {

        const generateJSX = (item, index) => {
            const name = item[0].toLowerCase();
            const price = item[1];
            const logo = media[name];
            return (
                <li key={index} className="comparisonLine">
                    <Link to={`/compare/detail/${name}`}>
                        <img className="comparisonLine__logo" src={logo} alt={`${name.toLowerCase()} logo`}/>
                        <p className="comparisonLine__name text">{name.toLowerCase()}</p>
                        <p className="comparisonLine__price text">{price}</p>
                        <p className="comparisonLine__position">{index + 1}</p>
                    </Link>
                </li>
            )
        };

        const {info:{apiInfo, selection}, media} = this.props;
        const results = Object.entries(apiInfo)
            .sort((a, b) => a[1] > b[1] ? -1 : 1)
            .map(generateJSX);

        return (
            <ul className="cardList">
                {results}
            </ul>
        )
    }
}
