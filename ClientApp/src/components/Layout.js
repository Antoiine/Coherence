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
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
