import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  render () {
    return (
      <header>
        <div className="navBar">
          <div className="l1">
            <img src="/images/logo.png" alt="logo"/>
            <Link to="/">Accueil</Link>
          </div>
            <Link className="l2" to="/counter">Informations</Link>
        </div>
      </header>
    );
  }
}
