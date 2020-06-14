import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends React.Component {

    render() {
        return (
            <header className="header" id="header" role="navigation">
                <Link className="titleBox title" to={`/`}>
                    <h1 className="title__header">rate advisor</h1>
                    <h2 className="title__subHeader">your best choice</h2>
                </Link>
            </header>
        );
    }
}
Header.defaultProps = {
    title: 'aplicación react'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}