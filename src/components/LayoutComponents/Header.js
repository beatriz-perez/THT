import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends React.Component {

    render() {
        return (
            <header className="container__page--header" id="header" role="navigation">
                <div className="container__general">
                    <div className="container__section--header">
                        <Link to={`/`}>
                            <h1 className="text__SITE--title">
                                {this.props.title}
                            </h1>
                        </Link>
                    </div>
                </div>
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