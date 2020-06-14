import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends React.Component {

    render() {
        return (
            <header className="header" id="header" role="navigation">
                <Link to={`/`}>
                    <h1 className="text__SITE--title">
                        <i className="fas fa-coins"></i>
                        {this.props.title}
                    </h1>
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