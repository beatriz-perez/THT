import React from 'react';

export default class Footer extends React.Component {

    render() {

        const {media:{name, url, website}} = this.props;

        return (
            <footer className="container__page--footer" id="footer" role="contentinfo">
                <div className="container__general">
                    <div className="container__section--footer">

                        <p className="footer__text text__footer">
                            code by
                            <a
                                className="footer__text--link text__footer text__footer--link"
                                href="https://beatriz-perez.github.io/Index/"
                                title="go to Beatriz's"
                                target="_blank"
                                rel="noopener noreferrer"
                            > Beatriz </a>
                            for
                            <a
                                className="footer__text--link text__footer text__footer--link"
                                href={website}
                                title={`go to ${name} website`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={url} alt={`${name}logo`}/>
                            </a>

                        </p>

                    </div>
                </div>
            </footer>
        );
    }
}