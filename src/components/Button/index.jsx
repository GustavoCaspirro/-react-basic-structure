import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ href, label, to, handleClick, ...props }) => {
    if (href.length) {
        return <a href={ href } { ...props }>{ label }</a>
    } else if (to.length) {
        return (<Link to={ to } { ...props }>
            { label }
        </Link>);
    }

    return (<button onClick={ handleClick } { ...props }>{ label }</button>)
};

Button.defaultProps = {
    href: '',
    label: '',
    to: '',
    handleClick: () => {},
};

Button.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string,
    handleClick: PropTypes.func,
};

export default Button;