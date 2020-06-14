import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Deatil extends Component {
    render() {
        const { match:{params:{name}}, info:{apiInfo, selection} } = this.props;
        let upperName = name.toUpperCase();
        let walletInfo = apiInfo[upperName];

        return (
            <div>
                <p>{name}</p>
                <p>{walletInfo}</p>
                <Link to={`/compare`}>
                    <p>back to ranking</p>
                </Link> 

                
            </div>
        )
    }
}
