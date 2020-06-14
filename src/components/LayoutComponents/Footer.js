import React from 'react';

export default class Footer extends React.Component {

    render() {
        const {media:{name, url, website}} = this.props;

        return (
            <footer className="footer" id="footer" role="contentinfo">
                <p className="text text__base">
                    code by
                    <a
                        className="text text__base text__base--bold"
                        href="https://beatriz-perez.github.io/Index/"
                        title="go to Beatriz's"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Beatriz </a>
                    for 
                </p>
                <a
                    className="logoContainer"
                    href={website}
                    title={`go to ${name} website`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                        className="logo" 
                        src={url} 
                        alt={`${name}logo`}
                    />
                </a>
                <p className="text text__base">
                    with 
                    <i className="loveIcon far fa-heart"></i>
                </p>

            </footer>
        );
    }
}