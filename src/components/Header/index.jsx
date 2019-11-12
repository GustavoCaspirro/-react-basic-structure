import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <h1>{ props.title }</h1>
                <img className="logo" src={ logo } alt="logo"/>
            </div>
        </header>
    );
};

export default Header;