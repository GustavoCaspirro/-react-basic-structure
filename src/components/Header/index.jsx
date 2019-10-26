import React from 'react';

import logo from '../../assets/logo.png';
import './style.css';

const Header = (props) => {
    return (
        <header>
            <h1 className="title">{ props.title }</h1>
            <img src={ logo } alt="Logo"/>
        </header>
    )
}

export default Header;