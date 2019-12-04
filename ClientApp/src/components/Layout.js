import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import "../css/main.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <div className="mainWindow">
          <video autoPlay muted loop id="myVideo">
            <source src="/videos/water.mp4" type="video/mp4"/>
          </video>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
