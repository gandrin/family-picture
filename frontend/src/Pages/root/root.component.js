import React, { Component } from 'react';
import './root.style.css';

export default class Root extends Component {
  render() {
    return (
      <div className="Root">
        { this.props.children }
      </div>
    );
  }
}